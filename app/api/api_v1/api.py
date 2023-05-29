from app.api.api_v1.routers import sentiment_analysis
from fastapi import APIRouter

api_router = APIRouter()

api_router.include_router(sentiment_analysis.router)