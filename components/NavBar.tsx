import { Disc2 } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="top-0 z-10 shadow-md py-2">
      <div className="container flex items-center h-16 px-4 mx-auto gap-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-primary"
        >
          <h3 className="font-bold ">Vynilz</h3>
          <Disc2></Disc2>
        </Link>
        <div>
          <ul className="flex gap-10 ml-10">
            <li className="cursor-pointer font-bold">Features</li>
            <li className="cursor-pointer font-bold">Collection</li>
            <li className="cursor-pointer font-bold">How it works</li>
          </ul>
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <button className="font-bold text-sm cursor-pointer">Login</button>
          <button className="bg-blue-500 py-2 px-3 rounded-2xl font-bold text-sm cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
