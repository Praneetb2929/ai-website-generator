import ollama

def generate_website_code(user_prompt: str) -> str:
    prompt = f"""
You are an expert frontend developer.

Generate a COMPLETE responsive website.

STRICT RULES (VERY IMPORTANT):
- Output ONLY code
- NO explanations
- NO markdown outside code blocks
- HTML must be inside ```html
- CSS must be inside ```css
- JavaScript must be inside ```js
- Do NOT include anything else

User request:
{user_prompt}
"""

    response = ollama.chat(
        model="qwen2.5:1.5b",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    return response["message"]["content"]