import { auth } from "@/auth";
import client from "@/lib/db";
import { redirect } from "next/navigation";

export default async function Collection() {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  const db = client.db();

  const user = await db.collection("users").findOne({
    email: session.user.email,
  });

  if (!user?.username) {
    redirect("/onboarding");
  }
  return (
    <div className="flex min-h-screen items-center flex-col">Dashboard</div>
  );
}
