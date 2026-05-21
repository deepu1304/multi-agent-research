from agents.planner import PlannerAgent


class WorkflowEngine:

    @staticmethod
    def run(task):

        plan = PlannerAgent.create_plan(task)

        return {
            "original_task": task,
            "execution_plan": plan
        }