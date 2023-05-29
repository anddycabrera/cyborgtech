from fastapi import APIRouter
from transformers import pipeline

router = APIRouter(prefix="/sentiment-analysis", tags=["sentiment-analysis"])

sentiment_analysis = pipeline("sentiment-analysis", model="siebert/sentiment-roberta-large-english")


@router.get("/sentiment-roberta-large-english")
async def analyze_sentiment(text: str):
    result = sentiment_analysis(text)
    return result