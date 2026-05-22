import os
import json
import google.generativeai as genai

from dotenv import load_dotenv

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)


class PlannerAgent:

    @staticmethod
    def create_plan(user_task):

        prompt = f"""
        You are an expert research planner.

        Break the user's task into
        clear research subtasks.

        Return ONLY valid JSON array.

        Example:
        [
          "Research Tesla market share",
          "Analyze competitors"
        ]

        TASK:
        {user_task}
        """

        response = model.generate_content(prompt)

        text = response.text.strip()

        try:
            subtasks = json.loads(text)
            return subtasks

        except Exception:
            return [
                "Research task parsing failed"
            ]