resource "aws_acm_certificate" "cert" {
  domain_name       = "mystarlog.com"
  validation_method = "DNS"

  subject_alternative_names = ["*.mystarlog.com"]
}

resource "aws_route53_record" "cert_validation" {
  count = length(aws_acm_certificate.cert.domain_validation_options)

  zone_id = data.aws_route53_zone.this.zone_id
  name    = aws_acm_certificate.cert.domain_validation_options[count.index].resource_record_name
  type    = aws_acm_certificate.cert.domain_validation_options[count.index].resource_record_type
  records = [aws_acm_certificate.cert.domain_validation_options[count.index].resource_record_value]
  ttl     = 60
}
