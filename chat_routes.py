"""
chat_routes.py
Free-form AI tutor chat, separate from the reasoning grader.
Students can ask anything about quantum concepts here.
"""

from fastapi import APIRouter
from pydantic import BaseModel
from groq import Groq
import os

router = APIRouter()
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

SYSTEM_PROMPT = """You are a friendly, patient quantum computing tutor for beginners.
Explain concepts simply, avoid unnecessary jargon or heavy math unless asked.
Use everyday analogies (coins, spinning objects, dice) where helpful.
Keep answers concise, a few sentences unless the student asks for more depth.
If a student asks something unrelated to quantum computing or this learning app,
gently steer them back to quantum topics."""


class ChatMessage(BaseModel):
    role: str  # "user" or "assistant"
    content: str


class ChatRequest(BaseModel):
    messages: list[ChatMessage]


@router.post("/chat")
def chat(req: ChatRequest):
    groq_messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    groq_messages += [{"role": m.role, "content": m.content} for m in req.messages]

    try:
        response = client.chat.completions.create(
            model="openai/gpt-oss-120b",
            messages=groq_messages,
            max_tokens=400,
        )
        reply = response.choices[0].message.content.strip()
        return {"success": True, "reply": reply}
    except Exception as e:
        return {"success": False, "reply": "Sorry, I couldn't respond right now. Try again in a moment."}
