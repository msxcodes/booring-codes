import React from "react";
import { Button } from "../ui/button";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Linkedin } from "lucide-react";

export default function Header() {
  return (
    <header className="text-slate-700 z-[999] mx-auto flex flex-col overflow-hidden md:px-24 fixed py-4 lg:flex-row lg:items-center w-full bg-white/10 backdrop-blur-3xl">
      <a
        href="#"
        className="ml-4 flex items-center whitespace-nowrap text-2xl font-black"
      >
        BooringCodes
      </a>
      <input type="checkbox" className="peer hidden" id="navbar-open" />
      <label
        className="absolute top-5 right-5 cursor-pointer lg:hidden"
        htmlFor="navbar-open"
      >
        <svg
          className="h-7 w-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
      <nav
        aria-label="Header Navigation"
        className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
      >
        <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
          <li className="lg:mr-12">
            <a
              className="rounded text-gray-700 font-bold transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="lg:mr-12">
            <a
              className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              href="#"
            >
              Services
            </a>
          </li>
          <li className="lg:mr-12">
            <a
              className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              href="#"
            >
              Contact
            </a>
          </li>
          <li className="lg:mr-12">
            <a
              className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              href="#"
            >
              FAQ
            </a>
          </li>
        </ul>
        <hr className="mt-4 w-full lg:hidden" />
        <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
          <ul className="mt-4 flex sm:mt-0 gap-2">
            <li className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
              <GitHubLogoIcon />
            </li>
            <li className=" flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
              <TwitterLogoIcon />
            </li>
            <li className=" flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
              <LinkedInLogoIcon />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
