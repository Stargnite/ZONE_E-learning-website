"use client";

import Image from "next/image";
import Logo from "@/images/logo.svg";
import { FiSun } from "react-icons/fi";
import { LuGlobe } from "react-icons/lu";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useState } from "react";
import Link from "next/link";
import { useDarkMode } from "../ContextProvider";
import {useContext} from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {isDarkMode, toggleDarkMode} = useDarkMode()

  return (
    <div className="px-10 md:px-20 py-5 mx-auto flex items-center justify-between">
      <Image src={Logo} alt="" className="bg-white"/>

      <nav className="align-start flex-col md:flex-row md:ml-auto md:mr-auto text-gray-600 font-semibold items-center hidden md:flex">
        <Link href="#" className={`mr-5 hover:text-primary ${isDarkMode ? "text-gray-300" : ""}`}>Home</Link>
        <Link href="#" className={`mr-5 hover:text-primary ${isDarkMode ? "text-gray-300" : ""}`}>Service</Link>
        <Link href="#" className={`mr-5 hover:text-primary ${isDarkMode ? "text-gray-300" : ""}`}>Case Studies</Link>
        <Link href="#" className={`mr-5 hover:text-primary ${isDarkMode ? "text-gray-300" : ""}`}>Blog</Link>
      </nav>

      <div className="flex justify-between items-center">
        <FiSun size={25} className="mr-5" onClick={toggleDarkMode} />
        <LuGlobe size={25} className="mr-5" />
        <HiBars3BottomRight size={25} className="flex md:hidden" />
        <button className={`mx-3 hidden md:block ${isDarkMode ? "text-gray-300" : ""}`}>Login</button>
        <button className={`font-semibold rounded-md border-0 py-1 px-3 mt-4 md:mt-0 hidden md:inline-flex ${isDarkMode ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-white"}`}>
          Join Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
