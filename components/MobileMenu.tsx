"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";

export default function MobileMenu() {
  return (
    <div className="ml-auto md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2">
            <Menu className="w-6 h-6 text-white" />
          </button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="bg-black text-white w-[320px] border-l border-white/10 p-6"
        >
          <SheetTitle className="text-white text-lg">Menu</SheetTitle>
          <div className="flex flex-col gap-6 mt-10 text-lg font-semibold">
            <SheetClose asChild>
              <Link href="/collection" className="font-bold">
                Collection
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/#features">Features</Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/#how-it-works">How it works</Link>
            </SheetClose>

            <hr className="border-white/10" />

            <SheetClose asChild>
              <Link href="/sign-in">Login</Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/sign-up">
                <button className="bg-blue-500 py-2 px-4 rounded-xl w-fit">
                  Sign Up
                </button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
