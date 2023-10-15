"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { BiMenu, BiX } from "react-icons/bi";

import { useGlobalState } from "@/context/store";


const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("home");

  const {user, dispatchAuth} = useGlobalState()

  const toggleNavHandler = () => {
    setShowNav((prevState) => !prevState);
  };

  const hideNavHandler = (navSection) => {
    setShowNav(false);
    const section = document.getElementById(navSection);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveNavItem(navSection);
  };

  const logoutHandler = async() => {
    try {
      await axios.get('/api/auth/logout')
      dispatchAuth()
      setShowNav(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"];

      const activeSection = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (activeSection) {
        setActiveNavItem(activeSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let navClasses =
    "fixed top-20 bottom-0 left-0 right-0 z-10 backdrop-blur h-screen bg-slate-950/95 md:static md:top-0 md:bottom-0 md:left-0 md:right-0 md:h-fit md:bg-inherit";
  if (!showNav) {
    navClasses += " hidden md:block";
  }

  const navLinkClasses =
    "border-sky-900 border p-2 text-sky-400 hover:text-white hover:bg-sky-900 block w-full cursor-pointer md:rounded";

  return (
    <header className="z-20 flex items-center justify-between p-4 h-20 fixed top-0 left-0 right-0 border-sky-900 border-b backdrop-blur md:px-6">
      <div className="flex gap-3 items-center animate-slide-left">
        <button
          className="text-2xl border border-sky-400 md:hidden h-fit"
          onClick={toggleNavHandler}
        >
          {showNav ? <BiX /> : <BiMenu />}
        </button>
        <Link href="/" className="text-3xl font-bold">
          <span className="text-white">Abu </span>
          <span className="text-sky-400">Raihan</span>
        </Link>
      </div>
      <nav className={navClasses}>
        <ul className="flex gap-3 flex-col animate-slide-left md:animate-none mt-6 p-4 md:flex-row md:mt-0 md:p-0">
          <li
            className={`${navLinkClasses}${
              activeNavItem === "home" ? " bg-sky-900/50 text-white" : ""
            }`}
            onClick={() => hideNavHandler("home")}
          >
            Home
          </li>
          <li
            className={`${navLinkClasses}${
              activeNavItem === "projects" ? " bg-sky-900/50 text-white" : ""
            }`}
            onClick={() => hideNavHandler("projects")}
          >
            Projects
          </li>
          <li
            className={`${navLinkClasses}${
              activeNavItem === "about" ? " bg-sky-900/50 text-white" : ""
            }`}
            onClick={() => hideNavHandler("about")}
          >
            About
          </li>
          <li
            className={`${navLinkClasses}${
              activeNavItem === "contact" ? " bg-sky-900/50 text-white" : ""
            }`}
            onClick={() => hideNavHandler("contact")}
          >
            Contact
          </li>
          {user.role && user.uid && (
            <li className="bg-red-500 text-white px-4 py-2 cursor-pointer" onClick={logoutHandler}>Logout</li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
