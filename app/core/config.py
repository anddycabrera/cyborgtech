from functools import lru_cache

from pydantic import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str = "MyStarlogs"
    API_V1_STR: str = "/api/v1"
    CELERY_BROKER_URL: str
    CELERY_RESULT_BACKEND: str

    
    class Config:
        case_sensitive = True
        env_file = ".env"


@lru_cache()
def get_settings():
    return Settings()


settings = get_settings()
