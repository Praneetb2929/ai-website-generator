"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateWebsite = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("http://127.0.0.1:8000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error("Backend error while generating website");
      }

      const data = await res.json();

      setHtml(data.html || "");
      setCss(data.css || "");
      setJs(data.js || "");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ✅ NEW: DOWNLOAD ZIP FUNCTION
  const downloadWebsite = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/export", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ html, css, js }),
      });

      if (!res.ok) {
        throw new Error("Failed to export website");
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "website.zip";
      a.click();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      alert("Download failed");
    }
  };

  return (
    <main className="p-10 min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">
        AI Website Generator
      </h1>

      <textarea
        className="border w-full p-3 rounded text-black bg-white"
        rows={4}
        placeholder="Create a portfolio website for a photographer with dark theme"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <div className="mt-4 flex gap-4">
        <button
          onClick={generateWebsite}
          disabled={loading}
          className="bg-white text-black px-6 py-2 rounded disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Website"}
        </button>

        {/* ✅ NEW: DOWNLOAD BUTTON */}
        {html && (
          <button
            onClick={downloadWebsite}
            className="bg-green-600 text-white px-6 py-2 rounded"
          >
            Download Website (ZIP)
          </button>
        )}
      </div>

      {error && (
        <p className="mt-4 text-red-500">
          {error}
        </p>
      )}

      {html && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">
            Live Preview
          </h2>

          <iframe
            className="w-full h-[600px] border bg-white"
            srcDoc={`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      background: white;
      color: black;
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 16px;
    }
    ${css}
  </style>
</head>
<body>
  ${html}
  <script>
    ${js}
  </script>
</body>
</html>`}
          />
        </div>
      )}
    </main>
  );
}
