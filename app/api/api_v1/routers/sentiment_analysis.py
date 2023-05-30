from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from app.core.task import sentiment_roberta_large_english
from pydantic import BaseModel

class Text(BaseModel):
    text: str

router = APIRouter(prefix="/sentiment-analysis", tags=["sentiment-analysis"])

@router.post("/sentiment-roberta-large-english")
async def analyze_sentiment(text: Text):
    task = sentiment_roberta_large_english.delay(text.text)
    return {"task_id": str(task.id)}

@router.get("/task-status/{task_id}")
async def task_status(task_id: str):
    result = sentiment_roberta_large_english.AsyncResult(task_id)
    response = {"task_status": result.status}
    if result.ready():
        if result.successful():
            response["task_result"] = result.result
        else:
            response["task_exception"] = str(result.result)  # Get the exception details if the task failed
    return JSONResponse(response)
