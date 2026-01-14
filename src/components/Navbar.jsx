import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

export default function Navbar({ loggedIn, handleLogout }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if link is active
  const isActive = (path) => {
    if (path === "/dashboard" && location.pathname === "/") return false;
    return location.pathname === path;
  };

  // Public links
  const publicLinks = [
    
    { name: "Features", path: "/#features" },
    { name: "About", path: "/about" },
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/signup", special: true }
  ];

  // Private links (when logged in)
  const privateLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Applications", path: "/applications" },
    { name: "Add New", path: "/applications/new", special: true },
    { name: "Jobs", path: "/jobs" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="bg-gradient-to-r from-[#1A2A44] to-[#0D1B2A] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div
              className="text-2xl font-bold cursor-pointer flex items-center space-x-2"
              onClick={() => navigate(loggedIn ? "/dashboard" : "/")}
            >
              <div className="bg-[#00B4D8] w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">CT</span>
              </div>
              <span>Career Tracker</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {(loggedIn ? privateLinks : publicLinks).map((link) => (
              <div key={link.path} className="relative">
                <Link
                  to={link.path}
                  className={`
                    px-4 py-2 rounded-lg font-medium transition-all duration-300
                    ${link.special 
                      ? "bg-[#00B4D8] hover:bg-[#0096C7] text-white shadow-md" 
                      : isActive(link.path)
                        ? "text-[#00B4D8] bg-white/10"
                        : "hover:text-[#00B4D8] hover:bg-white/5"
                    }
                  `}
                  onClick={() => link.path.startsWith("/#") && setMobileMenuOpen(false)}
                >
                  {link.name}
                  {link.special && (
                    <span className="ml-1 text-xs">+</span>
                  )}
                </Link>
                
                {/* Active indicator */}
                {isActive(link.path) && !link.special && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-[#00B4D8] rounded-full"></div>
                )}
              </div>
            ))}

            {/* User profile dropdown for logged in users */}
            {loggedIn && (
              <div className="ml-4 pl-4 border-l border-white/20 flex items-center space-x-4">
                <div className="relative group">
                  <button className="flex items-center space-x-2 hover:text-[#00B4D8] transition-colors">
                    <FaUserCircle className="text-xl" />
                    <span className="text-sm">Profile</span>
                  </button>
                  
                  {/* Dropdown menu */}
                  <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        My Profile
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Settings
                      </Link>
                      <div className="border-t border-gray-200">
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {loggedIn && (
              <FaUserCircle className="text-xl mr-4" />
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#00B4D8] hover:bg-white/10 focus:outline-none"
              aria-label="Main menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D1B2A] border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {(loggedIn ? privateLinks : publicLinks).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  block px-3 py-3 rounded-lg font-medium transition-colors
                  ${link.special
                    ? "bg-[#00B4D8] text-white"
                    : isActive(link.path)
                      ? "text-[#00B4D8] bg-white/10"
                      : "text-white hover:text-[#00B4D8] hover:bg-white/5"
                  }
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
                {link.special && (
                  <span className="ml-2 text-xs bg-white/20 px-1 py-0.5 rounded">
                    New
                  </span>
                )}
              </Link>
            ))}
            
            {/* Logout button in mobile */}
            {loggedIn && (
              <button
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-3 text-red-400 hover:bg-white/5 rounded-lg"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}