import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")


class PlannerAgent:

    @staticmethod
    def create_plan(user_task):

        prompt = f"""
        You are a professional research planner.

        Break the following task into clear,
        ordered subtasks.

        Return ONLY a numbered list.

        TASK:
        {user_task}
        """

        response = model.generate_content(prompt)

        return response.text