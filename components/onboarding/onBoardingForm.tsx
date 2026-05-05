"use client";

import { useActionState } from "react";
import { setUsername } from "@/actions/user";

const initialState = {
  error: "",
};

export default function OnboardingForm() {
  const [state, formAction, pending] = useActionState(
    setUsername,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <div className="flex items-center rounded-2xl border border-white/10 bg-black/40 focus-within:border-blue-500 transition">
          <input
            id="username"
            name="username"
            type="text"
            placeholder="@username"
            required
            minLength={3}
            className="w-full bg-transparent px-4 py-3 text-white placeholder:text-gray-600 outline-none"
          />
        </div>

        <p className="text-xs text-gray-500 mt-2">
          Use at least 3 characters. Letters, numbers, dots and underscores work
          best.
        </p>
      </div>

      {state.error && (
        <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full h-12 rounded-2xl bg-white text-black font-medium hover:bg-gray-200 transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? "Checking username..." : "Submit"}
      </button>
    </form>
  );
}
