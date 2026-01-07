import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-800">
      <div className="text-center max-w-3xl px-6">
        <h1 className="text-5xl font-extrabold mb-4 text-purple-700">
          Motion Box It
        </h1>
        <p className="text-xl text-gray-500 mb-8">
          "Your Imagination, Our Animation. Speak it into Existence."
        </p>
        <div className="mb-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="rounded-lg shadow-lg mx-auto w-full max-w-lg"
          >
            <source
              src="https://cdn.pixabay.com/video/2024/03/01/206345-910092802.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <Link href="/login">
          <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full text-lg shadow-md hover:shadow-lg transition">
            🎬 Get Started with Google
          </button>
        </Link>
      </div>
      <footer className="absolute bottom-4 text-gray-400 text-sm">
        Motion Box It © 2026 | The Universal Language of Animation
      </footer>
    </main>
  );
}