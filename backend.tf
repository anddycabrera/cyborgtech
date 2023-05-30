terraform {
  backend "s3" {
    bucket   = "998197354163-terraform-us-east-1"
    key      = "backend-us-east-1/nlp/terraform.tfstate"
    region   = "us-east-1"

    skip_region_validation      = true
    skip_credentials_validation = true
    skip_metadata_api_check     = true
  }
}