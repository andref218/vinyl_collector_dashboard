"use server";

import { auth } from "@/auth";
import client from "@/lib/db";
import { redirect } from "next/navigation";

type UsernameState = {
  error?: string;
};

export async function setUsername(
  prevState: UsernameState,
  formData: FormData,
): Promise<UsernameState> {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/sign-in");
  }

  const rawUsername = formData.get("username");

  if (!rawUsername || typeof rawUsername !== "string") {
    return {
      error: "Username is required.",
    };
  }

  const username = rawUsername.toLowerCase().trim().replace(/\s+/g, "");

  if (username.length < 3) {
    return {
      error: "Username must be at least 3 characters.",
    };
  }

  const usernameRegex = /^[a-z0-9._-]+$/;

  if (!usernameRegex.test(username)) {
    return {
      error:
        "Username can only contain letters, numbers, dots, underscores and hyphens.",
    };
  }

  const db = client.db();

  const existingUser = await db.collection("users").findOne({
    username,
  });

  if (existingUser) {
    return {
      error: "This username is already taken.",
    };
  }

  await db.collection("users").updateOne(
    {
      email: session.user.email,
    },
    {
      $set: {
        username,
        isPublic: false,
        updatedAt: new Date(),
      },
    },
  );

  redirect("/collection?welcome=1");
}
