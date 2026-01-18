# 🚀 AI Website Generator (Ollama + Next.js + FastAPI)

An AI-powered website generator that converts natural language prompts into fully functional, responsive websites using HTML, CSS, and JavaScript — all generated locally using Ollama (no paid APIs).

## ✨ Features

🧠 AI-powered website generation from text prompts
🎨 Generates HTML, CSS, and JavaScript
🖥️ Live preview inside the browser using iframe
🌙 Supports dark/light themes
🔒 Runs 100% locally using Ollama (no OpenAI / Gemini)
⚡ FastAPI backend + Next.js frontend
📱 Responsive design output

## 🛠 Tech Stack
Frontend

Next.js (App Router)

React

Tailwind CSS

Backend

FastAPI

Python

Ollama (LLM runtime)

AI Model

qwen2.5:1.5b (lightweight, fast, local)

## 📂 Project Structure

ai-website-generator/
│
├── backend/
│   ├── main.py
│   ├── ollama_engine.py
│   ├── utils.py
│   ├── requirements.txt
│   └── venv/
│
├── frontend/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── public/
│   └── package.json
│
└── README.md

## ⚙️ Setup Instructions
1️⃣ Install Ollama

Download and install Ollama from:
👉 https://ollama.com

Pull the model:

ollama pull qwen2.5:1.5b

2️⃣ Backend Setup (FastAPI)
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt


Start backend:

uvicorn main:app --reload


Backend runs at:

http://127.0.0.1:8000


Swagger Docs:

http://127.0.0.1:8000/docs

3️⃣ Frontend Setup (Next.js)
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:3000

## 🧪 How It Works

User enters a prompt (e.g. “Create a portfolio website for a photographer with dark theme”)

Frontend sends prompt to FastAPI

FastAPI calls Ollama locally

AI generates:

HTML

CSS

JavaScript

Code is parsed and injected into an iframe

Live website preview is shown instantly

⚙️ Setup Instructions
1️⃣ Install Ollama

Download and install Ollama from:
👉 https://ollama.com

Pull the model:

ollama pull qwen2.5:1.5b

2️⃣ Backend Setup (FastAPI)
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt


Start backend:

uvicorn main:app --reload


Backend runs at:

http://127.0.0.1:8000


Swagger Docs:

http://127.0.0.1:8000/docs

3️⃣ Frontend Setup (Next.js)
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:3000

🧪 How It Works

User enters a prompt (e.g. “Create a portfolio website for a photographer with dark theme”)

Frontend sends prompt to FastAPI

FastAPI calls Ollama locally

AI generates:

HTML

CSS

JavaScript

Code is parsed and injected into an iframe

Live website preview is shown instantly


## 📸 Example Prompt


## 🧠 Why Ollama?

✅ Free & open-source

✅ No API keys

✅ Runs fully offline

✅ Perfect for internships & demos

## 🚀 Future Improvements

Export website as ZIP

Save generated projects

Tailwind-only templates

Deploy to Vercel / Render

Component-based generation

Multi-page website support

## 👨‍💻 Author

Praneet Biswal
B.Tech Student | DevOps & AI Enthusiast

## 📜 License

This project is licensed under the MIT License.
