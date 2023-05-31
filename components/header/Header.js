import Image from "next/image";
import Link from "next/link";
import logo from "./logo.png";

function Header() {
  return (
    <header>
      <div className="lg:w-4/5 mx-auto flex p-5 flex-col md:flex-row items-center">
        <Image src={logo} alt="" />
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 text-white">
            Demos
          </Link>
          <Link href={"/"} className="mr-5 text-white">
            About
          </Link>
          <Link href={"/"} className="mr-5 text-white">
            Blog
          </Link>
          <Link href={"/"} className="mr-5 text-white">
            Pages
          </Link>
          <Link href={"/"} className="mr-5 text-white">
            Content
          </Link>
        </nav>
        <div>
          <button type="button" className="px-8 py-3 border rounded mr-4">
            Border
          </button>
          <button
            type="button"
            className="px-5 py-3 rounded text-white bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Get Started Free
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
