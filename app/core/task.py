from celery import Celery
from transformers import pipeline
from app.core.config import settings

celery = Celery('app.core.task')
celery.conf.broker_url = settings.CELERY_BROKER_URL
celery.conf.result_backend = settings.CELERY_RESULT_BACKEND

@celery.task(name="sentiment-roberta-large-english")
def sentiment_roberta_large_english(text: str):
    sentiment_analysis = pipeline("sentiment-analysis", model="siebert/sentiment-roberta-large-english")
    result = sentiment_analysis(text)
    return result