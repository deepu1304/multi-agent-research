from agents.planner import PlannerAgent
from agents.researcher import ResearchAgent


class WorkflowEngine:

    @staticmethod
    def run(task):

        subtasks = PlannerAgent.create_plan(task)

        research_results = (
            ResearchAgent.research(subtasks)
        )

        return {
            "original_task": task,
            "subtasks": subtasks,
            "research_results": research_results
        }