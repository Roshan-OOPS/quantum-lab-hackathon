"""
reasoning_routes.py
Handles the "why did you choose this answer" AI grading feature.
Uses Groq's free API.
"""

from fastapi import APIRouter
from pydantic import BaseModel
from groq import Groq
import os, json

router = APIRouter()
client = Groq(api_key=os.getenv("GROQ_API_KEY"))


class ReasoningRequest(BaseModel):
    question: str
    correct_answer: str
    learner_explanation: str


@router.post("/grade-reasoning")
def grade_reasoning(req: ReasoningRequest):
    prompt = f"""You are a quantum computing tutor. A student answered a question correctly,
but you need to check if they actually UNDERSTAND why, not just guessed right.

Question: {req.question}
Correct answer: {req.correct_answer}
Student's explanation for why this is correct: {req.learner_explanation}

Evaluate their understanding. Respond ONLY with valid JSON, no other text, in this exact format:
{{"verdict": "Understood" or "Partial" or "Needs Improvement", "feedback": "one short encouraging sentence explaining what they got right or missed"}}
"""
    try:
        response = client.chat.completions.create(
            model="openai/gpt-oss-120b",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=300,
        )
        raw = response.choices[0].message.content.strip()
        clean = raw.replace("```json", "").replace("```", "").strip()
        result = json.loads(clean)
    except Exception as e:
         result = {"verdict": "Partial", "feedback": "Couldn't grade this one, try rephrasing your answer."}

    return result