from tools.web_search import search_web


class ResearchAgent:

    @staticmethod
    def research(subtasks):

        all_findings = []

        for task in subtasks:

            findings = search_web(task)

            all_findings.append({
                "subtask": task,
                "findings": findings
            })

        return all_findings