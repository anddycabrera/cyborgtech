terraform {
  backend "s3" {
    bucket   = "915560773632-terraform"
    key      = "backend-us-east-2/nlp/terraform.tfstate"
    region   = "us-east-2"

    skip_region_validation      = true
    skip_credentials_validation = true
    skip_metadata_api_check     = true
  }
}