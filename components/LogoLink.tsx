"use client";

import { Disc2 } from "lucide-react";
import Link from "next/link";

export default function LogoLink() {
  return (
    <Link
      href="/"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="flex items-center gap-2 text-lg font-bold text-primary"
    >
      <h3 className="font-bold ">Vynilz</h3>
      <Disc2></Disc2>
    </Link>
  );
}
