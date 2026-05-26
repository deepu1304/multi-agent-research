from fastapi import APIRouter
from pydantic import BaseModel

from fastapi.responses import StreamingResponse

import asyncio
import json

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


# =========================
# STREAMING EVENTS
# =========================

async def event_generator(task: str):

    workflow_steps = [
        {
            "agent": "Planner Agent",
            "status": "running",
            "message": "Generating execution plan..."
        },
        {
            "agent": "Planner Agent",
            "status": "completed",
            "message": "Execution plan completed."
        },
        {
            "agent": "Research Agent",
            "status": "running",
            "message": "Searching web sources..."
        },
        {
            "agent": "Research Agent",
            "status": "completed",
            "message": "Research data collected."
        },
        {
            "agent": "Analyst Agent",
            "status": "running",
            "message": "Analyzing findings..."
        },
        {
            "agent": "Analyst Agent",
            "status": "completed",
            "message": "Insights generated."
        },
        {
            "agent": "Report Agent",
            "status": "running",
            "message": "Generating final report..."
        },
        {
            "agent": "Report Agent",
            "status": "completed",
            "message": "Report generated successfully."
        }
    ]

    for step in workflow_steps:

        yield f"data: {json.dumps(step)}\n\n"

        await asyncio.sleep(2)


@router.get("/research-stream")
async def research_stream(task: str):

    return StreamingResponse(
        event_generator(task),
        media_type="text/event-stream"
    )