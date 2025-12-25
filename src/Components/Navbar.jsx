"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import img from "../../src/assets/images/About/logo (1).png";
import img2 from "../../src/assets/images/About/bookdark.png";
import {
  FaChalkboardTeacher,
  FaSignOutAlt,
  FaUserEdit,
} from "react-icons/fa";
import ProfileUpdateModal from "./ProfileUpdateModal";
import toast from "react-hot-toast";
import { TbExchange } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import NavbarDrawer from "./Navbar/NavbarDrawer";
import Toggle from "./Toggle/Toggle";
import ToggleMenu from "../Components/ToggleMenu/ToggleMenu";

const Navbar = () => {
  const session = useSession();
  const pathName = usePathname();

  // Hide navbar on specific routes
  if (
    pathName.includes("/dashboard") ||
    pathName.includes("/login") ||
    pathName.includes("/signup")
  ) {
    return null;
  }

  // Fetch exchange data (safe)
  useQuery({
    queryKey: ["exchange value", session?.data?.user?.email],
    enabled: !!session?.data?.user?.email,
    queryFn: async () => {
      const res = await axios.get(
        `https://bookify-server-lilac.vercel.app/take-book?email=${session?.data?.user?.email}`
      );
      return res.data;
    },
  });

  const links = [
    { title: "Home", path: "/" },
    { title: "Exchange", path: "/exchange" },
    { title: "Audio books", path: "/audiobooks/671e8aa0cc79bac9d2cf7419" },
    { title: "All Books", path: "/all-books" },
    { title: "Contact", path: "/contact" },
    { title: "About", path: "/about" },
  ];

  return (
    <div className="overflow-hidden">
      <nav className="md:flex items-center md:justify-between bg-[#F3F2ED] border-b border-black dark:border-white dark:bg-[#272727E6] py-1.5 lg:px-10 md:fixed z-50 w-full top-0">

        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="dark:hidden">
            <Image
              src={img}
              alt="Bookify Logo"
              className="h-14 md:h-[68px] w-28 md:w-36"
              priority
            />
          </div>

          <div className="hidden dark:block">
            <Image
              src={img2}
              alt="Bookify Logo Dark"
              className="h-14 md:h-[68px] w-28 md:w-36"
              priority
            />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2 dark:text-white">
            <Toggle />
            <NavbarDrawer />
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-x-6 items-center">
          {links.map((link, index) => (
            <li
              key={link.path}
              className={`${
                pathName === link.path ? "font-black" : ""
              } flex items-center`}
            >
              <Link
                href={link.path}
                className="text-black dark:text-white flex items-center gap-1"
              >
                {link.title}
                {index === 1 && <TbExchange className="text-xl" />}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex gap-x-3 items-center">
          <Toggle />

          {session.status === "loading" ? (
            <svg
              className="animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 0C16 0 17 1 17 2V8C17 9 16 10 15 10C14 10 13 9 13 8V2C13 1 14 0 15 0Z"
                fill="#364957"
                className="dark:fill-white"
              />
            </svg>
          ) : (
            <>
              {session.status === "unauthenticated" && (
                <Link href="/login">
                  <button className="font-semibold text-white px-4 py-2 rounded-md bg-[#374956] dark:bg-white dark:text-black">
                    Login
                  </button>
                </Link>
              )}

              {session.status === "authenticated" && (
                <ToggleMenu session={session} />
              )}
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
