"use client";

import React, { FormEvent } from "react";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaApplePay,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaGooglePay,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const pathname = usePathname();

  // Hide footer on specific routes
  if (
    pathname.includes("/dashboard") ||
    pathname.includes("/login") ||
    pathname.includes("/signup")
  ) {
    return null;
  }

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Swal.fire({
      title: "Subscribed!",
      text: "Thank you for subscribing to our newsletter!",
      icon: "success",
      confirmButtonText: "Ok",
      confirmButtonColor: "#364957",
    });
  };

  return (
    <footer className="bg-slate-50 text-gray-700 dark:bg-[#1f1f22] dark:text-gray-200">
      <div className="w-full flex flex-col lg:flex-row gap-2 mx-auto">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-2/3 border-t border-gray-200 p-4 bg-slate-100 dark:bg-[#0A0A0C]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

            {/* Contact */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-800 dark:text-white">
                Contact Us
              </h2>
              <p>www.bookify06@gmail.com</p>
              <p>Dhaka, Bangladesh</p>
              <p>+8802-8123456</p>

              <div className="flex justify-center gap-4 text-xl">
                <FaFacebook className="hover:text-[#364957] cursor-pointer" />
                <FaInstagram className="hover:text-[#364957] cursor-pointer" />
                <FaTwitter className="hover:text-[#364957] cursor-pointer" />
                <FaYoutube className="hover:text-[#364957] cursor-pointer" />
              </div>
            </div>

            {/* About */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-800 dark:text-white">
                About Us
              </h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#364957]">About Us</a></li>
                <li><a href="#" className="hover:text-[#364957]">Careers</a></li>
                <li><a href="#" className="hover:text-[#364957]">Banners & Noble</a></li>
                <li><a href="#" className="hover:text-[#364957]">Authors</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-800 dark:text-white">
                Categories
              </h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#364957]">Coupons</a></li>
                <li><a href="#" className="hover:text-[#364957]">E-catalogs</a></li>
                <li><a href="#" className="hover:text-[#364957]">Order Form</a></li>
                <li><a href="#" className="hover:text-[#364957]">Blog</a></li>
              </ul>
            </div>

            {/* Help */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-800 dark:text-white">
                Quick Help
              </h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#364957]">Help Center</a></li>
                <li><a href="#" className="hover:text-[#364957]">Order Status</a></li>
                <li><a href="#" className="hover:text-[#364957]">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-[#364957]">Covid Safety</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 text-sm text-center">
            © Copyright The Readers. All rights reserved. Site by{" "}
            <span className="font-semibold text-[#364957]">Bookify</span>.
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/3 flex flex-col gap-2">

          {/* Newsletter */}
          <div className="border border-gray-200 p-6 bg-slate-100 dark:bg-[#0A0A0C] flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-white">
              Subscribe to our newsletter!
            </h2>

            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 w-full">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#364957] text-gray-800"
              />
              <button
                type="submit"
                className="bg-[#364957] text-white px-4 py-2 rounded hover:bg-[#2b3b46] transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Payments */}
          <div className="flex justify-center items-center gap-4 text-3xl p-6 border border-gray-200 bg-slate-100 dark:bg-[#0A0A0C] text-gray-600 dark:text-gray-300">
            <FaApplePay />
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcAmex />
            <FaCcPaypal />
            <FaGooglePay />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
