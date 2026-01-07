import { useState } from "react";

export default function Studio() {
  const [script, setScript] = useState("");
  const [language, setLanguage] = useState("English");
  const [voice, setVoice] = useState("Male - Deep - Energetic");

  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col">
      <header className="w-full py-4 bg-purple-50 border-b flex justify-between px-6 items-center">
        <h1 className="text-2xl font-bold text-purple-700">🎥 Motion Box It Studio</h1>
        <div className="text-gray-500">User: you@example.com</div>
      </header>

      <section className="flex flex-grow p-6 gap-6">
        <div className="w-1/2">
          <h2 className="font-semibold text-lg mb-2">The Script Engine</h2>
          <textarea
            className="w-full h-64 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-300"
            placeholder='Type your story... e.g. "A small boy in Hyderabad finds a flying cycle."'
            value={script}
            onChange={(e) => setScript(e.target.value)}
          />
          <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full">
            ✨ Expand Story
          </button>
        </div>

        <div className="w-1/2 space-y-4">
          <div>
            <h2 className="font-semibold text-lg mb-2">AI Translation</h2>
            <select
              className="border p-2 rounded w-full"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {["English", "Telugu", "Tamil", "Hindi", "Spanish", "French"].map((lang) => (
                <option key={lang}>{lang}</option>
              ))}
            </select>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">Voice Customization</h2>
            <select
              className="border p-2 rounded w-full"
              value={voice}
              onChange={(e) => setVoice(e.target.value)}
            >
              {[
                "Male - Deep - Energetic",
                "Female - Soft - Calm",
                "Child - Joyful",
                "Male - Sarcastic - Fun"
              ].map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </div>

          <button className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg">
            🎬 Generate Video
          </button>
        </div>
      </section>

      <footer className="p-4 text-center text-gray-400 border-t text-sm">
        ⭐ Community Love | 3.1K Videos Generated This Week
      </footer>
    </main>
  );
}