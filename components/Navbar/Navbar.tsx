"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { ModeToggle } from "../Theme/theme-toggle";
import { MailIcon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

export function Navbar() {
  const { theme } = useTheme();
  const [hydrated, setHydrated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Dynamically set text color based on the theme
  const textColor = theme === "light" ? "text-gray-800" : "text-white";
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }
  return (
    <div
      className={`w-full h-auto md:h-screen md:grid md:grid-rows-4 shadow-md ${
        theme !== "light" ? "bg-gray-500" : "bg-white"
      } bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100"
`}
    >
      {/* Hamburger Icon */}
      <div className="w-full md:hidden flex justify-between items-center p-4">
        <ModeToggle />
        <p className="text-yellow-500 font-extrabold text-xl">Thaarik A.</p>
        <button
          onClick={toggleMenu}
          className={`${textColor} focus:outline-none`}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Links (hidden on mobile unless menu is open) */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "block" : "hidden"
        } md:block w-full h-auto md:h-screen flex flex-col text-center justify-center items-center `}
      >
        <div className="w-full flex flex-col justify-center items-center md:h-full md:grid md:grid-rows-4 md:justify-items-center">
          <div className="md:h-full md:row-span-3 md:flex md:flex-col md:justify-evenly md:items-center">
            {!isOpen && <ModeToggle />}
            <Link href="#about" legacyBehavior passHref>
              <span
                onClick={() => setIsOpen(false)}
                className={`${textColor} block px-4 py-2 md:py-0 cursor-pointer`}
              >
                About Me
              </span>
            </Link>
            <Link href="#experience" legacyBehavior passHref>
              <span
                onClick={() => setIsOpen(false)}
                className={`${textColor} block px-4 py-2 md:py-0 cursor-pointer`}
              >
                Experience
              </span>
            </Link>
            <Link href="#skills" legacyBehavior passHref>
              <span
                onClick={() => setIsOpen(false)}
                className={`${textColor} block px-4 py-2 md:py-0 cursor-pointer`}
              >
                Skills
              </span>
            </Link>
            <Link href="#projects" legacyBehavior passHref>
              <span
                onClick={() => setIsOpen(false)}
                className={`${textColor} block px-4 py-2 md:py-0 cursor-pointer`}
              >
                Projects
              </span>
            </Link>
          </div>
          <div className="w-[80%] mb-2 flex flex-row justify-evenly items-center md:h-full md:row-span-1  md:flex-col md:items-center">
            <Link href="#contact" legacyBehavior passHref>
              <MailIcon
                onClick={() => setIsOpen(false)}
                className={`w-6 h-6 ${textColor} cursor-pointer mt-2 m-4`}
              />
            </Link>
            <a
              href="https://github.com/Thaarik"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <GitHubLogoIcon
                className={`w-6 h-6 ${textColor} cursor-pointer mt-2 m-4`}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/thaarik-ahamed/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <LinkedInLogoIcon
                className={`w-6 h-6 ${textColor} cursor-pointer mt-2 m-4`}
              />
            </a>
            <a
              href="https://www.instagram.com/a_paradox_of_time/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <InstagramLogoIcon
                className={`w-6 h-6 ${textColor} cursor-pointer mt-2 m-4`}
              />
            </a>
            <a
              href="https://x.com/?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <TwitterLogoIcon
                className={`w-6 h-6 ${textColor} cursor-pointer mt-2 m-4 mb-4`}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
