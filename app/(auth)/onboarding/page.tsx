import { signOutUser } from "@/actions/auth";
import { setUsername } from "@/actions/user";
import { auth } from "@/auth";
import OnboardingForm from "@/components/onboarding/onBoardingForm";
import client from "@/lib/db";
import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";

export default async function OnboardingPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  const db = client.db();

  const user = await db.collection("users").findOne({
    email: session.user.email,
  });

  if (user?.username) {
    redirect("/collection");
  }

  return (
    <main
      className="relative min-h-screen flex items-center justify-center px-6 text-white
      bg-[linear-gradient(to_bottom,#0f1115_0%,#0b0d12_40%,#07080c_100%)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.10),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_50%)]" />

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
        <p className="text-sm text-blue-400 mb-3">Welcome to Vynilz</p>

        <h1 className="text-4xl font-bold tracking-tight mb-3">
          Choose your username
        </h1>

        <OnboardingForm />
        <div className="flex justify-center mt-5">
          <form action={signOutUser}>
            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white cursor-pointer"
            >
              <LogOut size={16} />
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
