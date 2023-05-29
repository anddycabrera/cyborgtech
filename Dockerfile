FROM tiangolo/uvicorn-gunicorn:python3.11

# Set environment varibles
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app/

COPY requirements.txt requirements.txt

COPY . /app/

COPY ./startup.sh /app/

RUN chmod +x /app/startup.sh