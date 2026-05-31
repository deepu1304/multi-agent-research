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


class AnalystAgent:

    @staticmethod
    def analyze(research_results):

        prompt = f"""
        You are a senior market analyst.

        Analyze the following research data.

        Return ONLY valid JSON.

        Format:

        {{
            "executive_summary": "...",

            "key_findings": [
                "...",
                "..."
            ],

            "risks": [
                "...",
                "..."
            ],

            "opportunities": [
                "...",
                "..."
            ]
        }}

        Research Data:

        {json.dumps(research_results)}
        """

        response = model.generate_content(
            prompt
        )

        text = response.text.strip()


        text = text.replace(
            "```json",
            ""
        ).replace(
            "```",
            ""
        ).strip()

        try:

            return json.loads(text)

        except Exception:

            return {
                "executive_summary":
                    "Analysis generation failed.",

                "key_findings": [],

                "risks": [],

                "opportunities": []
            }