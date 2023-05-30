resource "aws_security_group" "allow_traffic" {
  name        = "allow_http_https"
  description = "Allow inbound traffic from Internet on HTTP and HTTPS"

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

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 8000
    to_port     = 8000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 5556
    to_port     = 5556
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

resource "aws_instance" "app" {
  ami           = "ami-01107263728f3bef4" # an Amazon Linux 2 AMI
  instance_type = "t2.micro"

  vpc_security_group_ids = [aws_security_group.allow_traffic.id]

  key_name = "nlp-key" # replace with the name of your existing key pair

  root_block_device {
    volume_type = "gp3"
    volume_size = 8 # change this to the size you want in GB
  }

  tags = {
    Name = "my-app"
  }

  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              yum install -y docker
              yum install -y git
              curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
              chmod +x /usr/local/bin/docker-compose
              systemctl start docker
              git clone https://github.com/anddycabrera/cyborgtech.git
              cd cyborgtech-main
              docker-compose up -d
              EOF
}
