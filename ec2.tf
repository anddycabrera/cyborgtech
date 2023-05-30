resource "aws_instance" "app" {
  ami           = "ami-0c94855ba95c574c8" # an Amazon Linux 2 AMI
  instance_type = "t2.micro"

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
              git clone https://github.com/anddycabrera/starlogs.git
              cd starlogs
              docker-compose up -d
              EOF
}
