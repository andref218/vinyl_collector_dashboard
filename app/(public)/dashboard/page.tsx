import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Collection() {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }
  return (
    <div className="flex min-h-screen items-center flex-col">Dashboard</div>
  );
}
