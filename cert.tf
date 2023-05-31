module "acm" {
  source  = "terraform-aws-modules/acm/aws"
  version = "~> 4.0"

  domain_name  = "mystarlog.com"
  zone_id      = data.aws_route53_zone.this.zone_id

  subject_alternative_names = [
    "*.mystarlog.com",
  ]

  wait_for_validation = false

  tags = {
    Name = "mystarlog.com"
  }
}