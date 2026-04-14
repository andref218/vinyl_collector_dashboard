"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, LogOut } from "lucide-react";
import { signOutUser } from "@/actions/auth";
import Link from "next/link";

type UserMenuProps = {
  name: string;
  email: string;
  image: string;
};

const UserMenu = ({ name, email, image }: UserMenuProps) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 cursor-pointer"
      >
        <Image
          src={image || "/default-avatar.png"}
          alt={name || "User avatar"}
          width={38}
          height={38}
          className="rounded-full object-cover border border-white/20"
        />
        <ChevronDown size={16} className="text-white" />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-72 rounded-2xl border border-white/10 bg-neutral-950/95 backdrop-blur-xl shadow-2xl p-3">
          <div className="flex items-center gap-3 p-2">
            <Image
              src={image || "/default-avatar.png"}
              alt={name || "User avatar"}
              width={42}
              height={42}
              className="rounded-full object-cover border border-white/10"
            />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate">
                {name || "User"}
              </p>
              <p className="text-sm text-gray-400 truncate">{email}</p>
            </div>
          </div>

          <div className="my-2 h-px bg-white/10" />
          {/* Navigation links */}
          <div className="flex flex-col gap-1">
            <Link
              href="/collection"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              Collection
            </Link>

            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              Dashboard
            </Link>

            <Link
              href="/wrapped"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              Wrapped
            </Link>
          </div>

          <div className="my-2 h-px bg-white/10" />

          <form action={signOutUser}>
            <button
              type="submit"
              className="w-full flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-red-400 hover:bg-white/5 transition cursor-pointer"
            >
              <LogOut size={16} />
              Sign out
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
