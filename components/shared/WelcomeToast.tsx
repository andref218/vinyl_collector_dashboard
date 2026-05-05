"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type WelcomeToastProps = {
  show: boolean;
};

export default function WelcomeToast({ show }: WelcomeToastProps) {
  const router = useRouter();

  useEffect(() => {
    if (!show) return;

    toast.success("Username created successfully. Welcome to your collection.");

    router.replace("/collection");
  }, [show, router]);

  return null;
}
