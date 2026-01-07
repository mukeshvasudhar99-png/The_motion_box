import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-white to-purple-100">
      <h1 className="text-4xl font-bold text-purple-700 mb-8">Welcome to Motion Box It</h1>
      <button className="flex items-center gap-3 bg-white border border-gray-200 rounded-full shadow-md px-6 py-3 hover:shadow-lg transition">
        <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" />
        <span>Sign in with Google</span>
      </button>
      <Link href="/" className="text-gray-500 mt-6 hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
}