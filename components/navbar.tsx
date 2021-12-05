import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="mb-4">
      <Link href="/">
        <div className="bg-gray-700 h-12 flex items-center px-4 justify-between">
          <span className="text-gray-300 text-3xl font-bold">
            The European Theater of World War II
          </span>
          <span className="flex space-x-4">
            <Link href="/">
              <span className="text-gray-300 text-2xl cursor-pointer">Map</span>
            </Link>
            <Link href="/sources">
              <span className="text-gray-300 text-2xl cursor-pointer">
                Sources
              </span>
            </Link>
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
