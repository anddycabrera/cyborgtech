data "aws_route53_zone" "this" {
    name = "mystarlog.com"
}

resource "aws_route53_record" "mystarlog" {
  zone_id = data.aws_route53_zone.this.zone_id
  name    = ""
  type    = "A"

  alias {
    name                   = aws_lb.lb.dns_name
    zone_id                = aws_lb.lb.zone_id
    evaluate_target_health = false
  }
}