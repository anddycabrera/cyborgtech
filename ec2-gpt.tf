# resource "aws_instance" "app" {
#   ami           = "ami-024e6efaf93d85776" # an Ubuntu AMI
#   instance_type = "t2.micro"

#   vpc_security_group_ids = [aws_security_group.allow_traffic.id]

#   key_name = "nlp-key" # replace with the name of your existing key pair

#   root_block_device {
#     volume_type = "gp3"
#     volume_size = 100 # change this to the size you want in GB
#   }

#   tags = {
#     Name = "mystarlog"
#     Timestamp = "${timestamp()}"
#   }

#   user_data_replace_on_change = true

#   user_data = <<-EOF
#               #!/bin/bash
#               eco ${random_string.r0.result}
#               sudo apt update -y
#               sudo apt-get install make
#               sudo DEBIAN_FRONTEND=noninteractive apt install -y python3.10-venv
#               sudo apt update -y
#               sudo git clone https://github.com/AntonOsika/gpt-engineer.git
#               cd gpt-engineer
#               echo "alias python=/usr/bin/python3" >> ~/.bashrc
#               source ~/.bashrc
#               sudo ln -s /usr/bin/python3 /usr/bin/python
#               sudo make install
#               sudo apt update -y
#               EOF
#   lifecycle {
#     create_before_destroy = true
#   }

# }

# resource "random_string" "r0" {
#   length  = 8
#   special = false
# }

# resource "aws_security_group" "allow_traffic" {
#   name        = "allow_http_https"
#   description = "Allow inbound traffic from Internet on HTTP and HTTPS"

#   ingress {
#     from_port   = 80
#     to_port     = 80
#     protocol    = "tcp"
#     cidr_blocks = ["0.0.0.0/0"]
#   }

#   ingress {
#     from_port   = 443
#     to_port     = 443
#     protocol    = "tcp"
#     cidr_blocks = ["0.0.0.0/0"]
#   }

#   ingress {
#     from_port   = 22
#     to_port     = 22
#     protocol    = "tcp"
#     cidr_blocks = ["0.0.0.0/0"]
#   }

#   ingress {
#     from_port   = 8000
#     to_port     = 8000
#     protocol    = "tcp"
#     cidr_blocks = ["0.0.0.0/0"]
#   }

#   ingress {
#     from_port   = 8080
#     to_port     = 8080
#     protocol    = "tcp"
#     cidr_blocks = ["0.0.0.0/0"]
#   }

#   ingress {
#     from_port   = 5556
#     to_port     = 5556
#     protocol    = "tcp"
#     cidr_blocks = ["0.0.0.0/0"]
#   }

#   egress {
#     from_port   = 0
#     to_port     = 0
#     protocol    = "-1"
#     cidr_blocks = ["0.0.0.0/0"]
#   }
# }