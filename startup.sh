#!/bin/bash
pip3 install --upgrade pip
pip3 install -r requirements.txt

# export PYTHONPATH=/app
export PYTHONPATH=/app


#Start app
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload