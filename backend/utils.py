import re

def extract_block(text, lang):
    pattern = rf"```{lang}\s*(.*?)```"
    match = re.search(pattern, text, re.DOTALL)
    return match.group(1).strip() if match else ""

def parse_code_blocks(code: str):
    html = extract_block(code, "html")
    css  = extract_block(code, "css")
    js   = extract_block(code, "js")
    return html, css, js
