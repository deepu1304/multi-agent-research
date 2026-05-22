import os

from tavily import TavilyClient
from dotenv import load_dotenv

load_dotenv()

client = TavilyClient(
    api_key=os.getenv("TAVILY_API_KEY")
)


def search_web(query):

    response = client.search(
        query=query,
        search_depth="advanced",
        max_results=3
    )

    cleaned_results = []

    for result in response["results"]:

        cleaned_results.append({
            "title": result.get("title"),
            "url": result.get("url"),
            "content": result.get("content")
        })

    return cleaned_results