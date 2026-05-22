from fastapi import APIRouter
from pydantic import BaseModel

from orchestrator.workflow_engine import WorkflowEngine

router = APIRouter()


class TaskRequest(BaseModel):
    task: str


@router.post("/research")

async def research_task(request: TaskRequest):

    result = WorkflowEngine.run(
        request.task
    )

    return result