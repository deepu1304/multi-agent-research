from fastapi import APIRouter
from pydantic import BaseModel

from orchestrator.workflow_engine import WorkflowEngine

router = APIRouter()


class TaskRequest(BaseModel):
    task: str


@router.post("/research")

def start_research(request: TaskRequest):

    result = WorkflowEngine.run(
        request.task
    )

    return result