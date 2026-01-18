import zipfile
import io
from fastapi import APIRouter
from fastapi.responses import StreamingResponse

router = APIRouter()

@router.post("/export")
def export_website(data: dict):
    html = data.get("html", "")
    css = data.get("css", "")
    js = data.get("js", "")

    zip_buffer = io.BytesIO()

    with zipfile.ZipFile(zip_buffer, "w", zipfile.ZIP_DEFLATED) as zip_file:
        zip_file.writestr("index.html", html)
        zip_file.writestr("style.css", css)
        zip_file.writestr("script.js", js)

    zip_buffer.seek(0)

    return StreamingResponse(
        zip_buffer,
        media_type="application/zip",
        headers={"Content-Disposition": "attachment; filename=website.zip"}
    )
