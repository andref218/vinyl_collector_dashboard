"use client";

import { LogOut, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { signOutUser } from "@/actions/auth";

type MobileMenuProps = {
  session: any;
};

export default function MobileMenu({ session }: MobileMenuProps) {
  const user = session?.user;
  return (
    <div className="ml-auto md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2">
            <Menu className="w-6 h-6 text-white cursor-pointer" />
          </button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="bg-black text-white w-[320px] border-l border-white/10 p-6"
        >
          <SheetTitle className="text-white text-lg">Menu</SheetTitle>

          <div className="flex flex-col gap-6 mt-10 text-lg font-semibold">
            <SheetClose asChild>
              <Link href="/collection">Collection</Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/#features">Features</Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/#how-it-works">How it works</Link>
            </SheetClose>

            <hr className="border-white/10" />

            {user ? (
              <>
                <div className="flex items-center gap-3">
                  <Image
                    src={user.image || "/default-avatar.png"}
                    alt="avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="text-sm">
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-gray-400 text-xs">{user.email}</p>
                  </div>
                </div>

                <form action={signOutUser}>
                  <button className="flex items-center gap-2 text-red-400 mt-2 cursor-pointer">
                    <LogOut size={16} />
                    Sign out
                  </button>
                </form>
              </>
            ) : (
              <>
                <SheetClose asChild>
                  <Link href="/sign-in">Login</Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="/sign-up">
                    <button className="bg-blue-500 py-2 px-4 rounded-xl w-fit cursor-pointer">
                      Sign Up
                    </button>
                  </Link>
                </SheetClose>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
