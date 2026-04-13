import Link from "next/link";
import LogoLink from "./LogoLink";
import MobileMenu from "./MobileMenu";

const NavBarMainApp = () => {
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
        </ul>

        <div className="hidden md:flex items-center gap-4 ml-auto">
          <Link href="/sign-in">
            <button className="font-bold text-sm cursor-pointer">Login</button>
          </Link>

          <Link href="/sign-up">
            <button className="bg-blue-500 py-2 px-3 rounded-2xl font-bold text-sm cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </nav>
  );
};

export default NavBarMainApp;
