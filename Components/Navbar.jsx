"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const navdata = [
  { title: "Trekking", url: "/trekking" },
  { title: "Mountaineering", url: "/mountaineering" },
  { title: "Tours", url: "/tours" },
  { title: "Heli Tours", url: "/heli-tours" },
  { title: "Blog", url: "/blog" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <section className="max-w-[1310px] mx-auto  mt-10 ">
      <nav className="flex  items-center justify-between  border-8  rounded-[49px] border-[#ffffff1a]/[0.1]   px-10 ">
        {/* Logo */}
        <div className="">
          <Image
            src="/site-logo.svg"
            alt="Site Logo"
            className="h-[55px] w-auto"
            width={192}
            height={0}
            priority
          />
        </div>
        {/* Desktop Navigation Links */}
        <div className="flex   ">
          <ul className=" hidden lg:flex flex-wrap  h-full w-full  ">
            {navdata.map((item, index) => (
              <li
                key={index}
                className="hover:bg-teal-100 w-max duration-500 ease-in-out  h-full "
              >
                <Link
                  href={item.url}
                  className="text-black block uppercase font-[700] h-full py-7 px-4   text-[17px] cursor-pointer"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            {/* Icons */}
          </ul>
          <div className="flex items-center gap-4 px-5">
            <button className="text-black hover:text-gray-500">
              <IoSearch className="text-[1.3rem]" />
            </button>
            <button className="text-black hover:text-gray-500">
              <BsThreeDots className="text-[1.3rem]" />
            </button>
            <button className="lg:hidden block text-[25px]" onClick={toggleNav}>
              {open ? <RxCross2 /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>{" "}
        {/* Mobile Menu Toggle Button */}
        {/* Mobile Navigation Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-full bg-gray-300 shadow-lg z-50 transition-all duration-500 ease-in-out ${
            open ? "clip-open" : "clip-closed"
          }`}
        >
          <div className="flex justify-end items-center p-4 border-b">
            <button onClick={toggleNav}>
              <RxCross2 className="w-6 h-6 text-black" />
            </button>
          </div>
          <ul className="flex flex-col  text-center gap-6 p-4">
            {navdata.map((item, index) => (
              <li
                key={index}
                className="hover:bg-teal-100 w-full duration-500 ease-in-out"
              >
                <Link
                  href={item.url}
                  className="text-black block uppercase font-[700] py-3 px-5 text-[17px] cursor-pointer"
                  onClick={() => setOpen(false)} // Close menu on link click
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Styles for the clip-path effect */}
      <style jsx>{`
        .clip-open {
          clip-path: circle(150% at 90% 10%);
        }
        .clip-closed {
          clip-path: circle(0% at 90% 10%);
        }
      `}</style>
    </section>
  );
};

export default Navbar;
