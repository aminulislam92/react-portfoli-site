import React, { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="border-b border-gray-600">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-6 relative ">
          <a href="mailto:aminulislam@dev.com">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-gray-800/80 rounded-full">
                <IoMailOutline className="text-white" />
              </span>
              <span className={`${isMenuOpen ? "hidden" : "block"}`}>
                aminulislam@dev.com
              </span>
            </div>
          </a>

          {/* mobile menue button */}
          <div
            className="md:hidden z-50 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div
              className={`w-6 h-0.5 bg-gray-300 transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-300 my-1.5 transition-all ${isMenuOpen ? "opacity-0" : ""}`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-300 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></div>
          </div>

          {/* desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  LinkedIn
                </a>
                <span className="text-gray-300 ml-2">/</span>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Dribble
                </a>
                <span className="text-gray-300 ml-2">/</span>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </nav>

          {/* mobile navigation menu */}
          <nav
            className={`fixed md:hidden top-0 right-0 h-screen w-64 bg-black/95 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"} flex items-center justify-center z-40`}
          >
            <ul className="space-y-8 text-center">
              <li>
                <a
                  onClick={() => setIsMenuOpen(false)}
                  href="#"
                  className="text-gray-300 hover:text-white text-xl"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  onClick={() => setIsMenuOpen(false)}
                  href="#"
                  className="text-gray-300 hover:text-white text-xl"
                >
                  Dribble
                </a>
              </li>
              <li>
                <a
                  onClick={() => setIsMenuOpen(false)}
                  href="#"
                  className="text-gray-300 hover:text-white text-xl"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </nav>

          {/* overlay */}

          {isMenuOpen && (
            <div
              className="fixed md:hidden inset-0 bg-black/50 z-30"
              onClick={() => isMenuOpen(false)}
            ></div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
