from fastapi import FastAPI
from api.routes import router

app = FastAPI(
    title="Multi-Agent Research Assistant"
)

app.include_router(router)


@app.get("/")

def root():

    return {
        "message": "Server Running"
    }