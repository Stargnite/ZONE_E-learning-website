"use client";

import Image from "next/image";
import Logo from "@/images/logo.svg";
import { FiSun } from "react-icons/fi";
import { LuGlobe } from "react-icons/lu";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 py-1 container mx-auto flex items-center justify-between">
      <Image src={Logo} alt="" />

      {/* <FiSun />
	   <LuGlobe /> */}
      <div className="flex align-start flex-col md:flex-row md:ml-auto md:mr-auto  items-center text-base">
        <a className="mr-5">Home</a>
        <a className="mr-5">Service</a>
        <a className="mr-5">Case Study</a>
        <a className="mr-5">Blog</a>
      </div>
      <button className="inline-flex  bg-yellow-500 border-0 py-1 px-3 mt-4 md:mt-0">
        Click Me
      </button>
    </nav>
  );
};

export default Navbar;
