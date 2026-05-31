from agents.planner import PlannerAgent

from agents.researcher import ResearchAgent

from agents.analyst import AnalystAgent


class WorkflowEngine:

    @staticmethod
    def run(task):

        # Planner

        subtasks = (
            PlannerAgent.create_plan(task)
        )

        # Research

        research_results = (
            ResearchAgent.research(
                subtasks
            )
        )

        # Analysis

        analysis = (
            AnalystAgent.analyze(
                research_results
            )
        )

        return {

            "task": task,

            "subtasks": subtasks,

            "research_results":
                research_results,

            "analysis":
                analysis
        }