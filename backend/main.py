from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from ollama_engine import generate_website_code
from utils import parse_code_blocks
from export import router as export_router


app = FastAPI()

# ✅ Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ REGISTER EXPORT ROUTER (THIS WAS MISSING)
app.include_router(export_router)


class PromptRequest(BaseModel):
    prompt: str


@app.post("/generate")
def generate_website(request: PromptRequest):
    raw_code = generate_website_code(request.prompt)
    html, css, js = parse_code_blocks(raw_code)

    return {
        "html": html,
        "css": css,
        "js": js
    }
