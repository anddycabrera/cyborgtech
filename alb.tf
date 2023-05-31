data "aws_vpc" "default" {
  default = true
}

resource "aws_default_subnet" "default_az1" {
  availability_zone = "us-east-2a"

  tags = {
    Name = "Default subnet for us-east-2a"
  }
}

resource "aws_default_subnet" "default_az2" {
  availability_zone = "us-east-2b"

  tags = {
    Name = "Default subnet for us-east-2b"
  }
}

resource "aws_lb" "lb" {
  name               = "tf-nlp-lb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.elb_sg.id]
  subnets            = [aws_default_subnet.default_az1.id, aws_default_subnet.default_az2.id]

  enable_deletion_protection = true

  access_logs {
    bucket  = "my-access-logs-bucket"
    prefix  = "lb"
    enabled = true
  }
}

resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.lb.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type             = "redirect"
    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

resource "aws_lb_listener" "https" {
  load_balancer_arn = aws_lb.lb.arn
  port              = "443"
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = aws_acm_certificate.cert.arn

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.tg.arn
  }
}

resource "aws_lb_target_group" "tg" {
  name     = "tf-example-lb-tg"
  port     = 8000
  protocol = "HTTP"
  vpc_id   = data.aws_vpc.default.id

  health_check {
    interval            = 30
    path                = "/"
    timeout             = 3
    healthy_threshold   = 2
    unhealthy_threshold = 2
  }
}

resource "aws_lb_target_group_attachment" "tga" {
  target_group_arn = aws_lb_target_group.tg.arn
  target_id        = aws_instance.app.id
  port             = 8000
}

resource "aws_security_group" "elb_sg" {
  name        = "elb_sg"
  description = "Allow inbound traffic on HTTP and HTTPS"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}