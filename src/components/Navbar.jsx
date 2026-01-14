import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ loggedIn, handleLogout }) {
  const navigate = useNavigate();

  return (
    <header className="bg-[#1A2A44] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Career Tracker
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          {!loggedIn ? (
            <>
              <Link
                to="/"
                className="hover:text-[#00B4D8] transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/login"
                className="hover:text-[#00B4D8] transition-colors duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="hover:text-[#00B4D8] transition-colors duration-300"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="hover:text-[#00B4D8] transition-colors duration-300"
              >
                Dashboard
              </Link>
              <Link
                to="/applications"
                className="hover:text-[#00B4D8] transition-colors duration-300"
              >
                Applications
              </Link>
              <Link
                to="/applications/new"
                className="hover:text-[#00B4D8] transition-colors duration-300"
              >
                Add Application
              </Link>
              <Link
                to="/about"
                className="hover:text-[#00B4D8] transition-colors duration-300"
              >
                About
              </Link>
              <button
                onClick={handleLogout}
                className="bg-[#00B4D8] hover:bg-[#0077B6] text-white px-4 py-1 rounded transition-colors duration-300"
              >
                Logout
              </button>
            </>
          )}
        </nav>

        {/* Mobile Placeholder */}
        <div className="md:hidden">
          <span className="text-white font-bold">Menu</span>
        </div>
      </div>
    </header>
  );
}
