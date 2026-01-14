import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1A2A44] text-white mt-12 w-full">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Branding */}
        <div className="text-lg font-bold">Career Tracker</div>

      

        {/* Social Media */}
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1306C] transition-colors">
            <FaInstagram size={20} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DA1F2] transition-colors">
            <FaTwitter size={20} />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] transition-colors">
            <FaFacebook size={20} />
          </a>
        </div>
      </div>

      {/* Rights Reserved */}
      <div className="bg-[#14213D] text-gray-300 text-center py-2 text-sm">
        &copy; {new Date().getFullYear()} Career Tracker. All rights reserved.
      </div>
    </footer>
  );
}
