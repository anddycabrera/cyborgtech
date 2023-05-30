data "aws_route53_zone" "this" {
    name = "mystarlog.com"
}

# resource "aws_route53_record" "example" {
#   zone_id = data.aws_route53_zone.this.zone_id
#   name    = ""
#   type    = "A"
#   ttl     = "300"
#   records = [aws_instance.app.public_ip]
# }