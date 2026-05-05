import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { signUpWithGoogle } from "@/actions/auth";
import { auth } from "@/auth";
import client from "@/lib/db";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const session = await auth();

  if (session?.user?.email) {
    const db = client.db();

    const user = await db.collection("users").findOne({
      email: session.user.email,
    });

    if (!user?.username) {
      redirect("/onboarding");
    }

    redirect("/collection");
  }
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
        <p className="text-sm text-blue-400 mb-3">Start your journey</p>

        <h1 className="text-4xl font-bold tracking-tight mb-3">
          Create your Vynilz account
        </h1>

        <p className="text-gray-400 mb-8 leading-relaxed">
          Build your vinyl collection, unlock smart insights, and relive your
          music taste with yearly recaps.
        </p>

        <form action={signUpWithGoogle}>
          <button
            type="submit"
            className="w-full h-12 rounded-2xl bg-white text-black font-medium flex items-center justify-center gap-3 hover:bg-gray-200 transition cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-5 h-5"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.72 1.22 9.23 3.6l6.9-6.9C35.88 2.2 30.33 0 24 0 14.62 0 6.56 5.48 2.74 13.44l8.03 6.24C12.53 13.06 17.76 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.14 24.55c0-1.63-.15-3.2-.43-4.73H24v9.01h12.4c-.53 2.87-2.13 5.3-4.54 6.93l7.02 5.46C43.89 36.7 46.14 30.99 46.14 24.55z"
              />
              <path
                fill="#FBBC05"
                d="M10.77 28.68c-.48-1.43-.75-2.95-.75-4.53s.27-3.1.75-4.53l-8.03-6.24C1.01 16.8 0 20.28 0 24.15s1.01 7.35 2.74 10.77l8.03-6.24z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.33 0 11.65-2.09 15.54-5.68l-7.02-5.46c-2 1.35-4.56 2.14-8.52 2.14-6.24 0-11.47-3.56-13.23-8.68l-8.03 6.24C6.56 42.52 14.62 48 24 48z"
              />
            </svg>
            Sign up with Google
            <ArrowRight size={18} />
          </button>
        </form>

        <div className="my-8 h-px bg-white/10" />

        <p className="text-sm text-gray-400 text-center">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-white font-medium hover:text-blue-400 transition"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
