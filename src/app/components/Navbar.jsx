"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import "./navbar.css";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleClick = (e, path) => {
    e.preventDefault();
    const target = document.querySelector(path);

    if (target) {
      const isMobile = window.innerWidth <= 768;
      const offset = isMobile ? 110 : 100;

      const elementPosition =
        target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setNavbarOpen(false);
    }
  };

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="navbar-container">
        <Link
          href={"/"}
          className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-[24px] sm:text-[36px] text-[#ADB7BE] hover:text-white name"
        >
          Devran Balkanlı
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div
          className={` my-[0px] mx-auto md:m-[0px] ${
            navbarOpen ? "flex" : "hidden"
          } md:flex md:w-auto`}
          id="navbar"
        >
          <ul className="flex flex-col gap-[0px] py-4 items-center sm:flex-row gap-[50px] navbar-list">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.path}
                onClick={(e) => handleClick(e, link.path)}
                className=" py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                {link.title}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
