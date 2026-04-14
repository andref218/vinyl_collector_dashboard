import Link from "next/link";
import LogoLink from "./LogoLink";
import MobileMenu from "./MobileMenu";
import { auth } from "@/auth";
import UserMenu from "./UserMenu";

const NavBarMainApp = async () => {
  const session = await auth();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-md py-2 bg-black/60 backdrop-blur-md">
      <div className="container flex items-center h-16 px-4 md:px-10 mx-auto">
        {/* Logo */}
        <LogoLink />

        {/* Desktop Menu*/}
        <ul className="hidden md:flex items-center gap-10 ml-10">
          <li>
            <Link href="/collection" className="font-bold">
              Collection
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="font-bold">
              Dahsboard
            </Link>
          </li>
          <li>
            <Link href="/wrapped" className="font-bold">
              Wrapped
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4 ml-auto">
          {session?.user ? (
            <UserMenu
              name={session.user.name ?? ""}
              email={session.user.email ?? ""}
              image={session.user.image ?? ""}
            />
          ) : (
            <>
              <Link href="/sign-in">
                <button className="font-bold text-sm cursor-pointer">
                  Login
                </button>
              </Link>

              <Link href="/sign-up">
                <button className="bg-blue-500 py-2 px-3 rounded-2xl font-bold text-sm cursor-pointer">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <MobileMenu session={session} />
      </div>
    </nav>
  );
};

export default NavBarMainApp;
