import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { useLocation } from 'react-router-dom';

import Logo from "/assets/Logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#", label: "Our Screens" },
    { href: "#", label: "Schedule" },
    { href: "#", label: "Movie Library" },
    { href: "#", label: "Location & Contact" }
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-black-primary"
    >
      <div className="container mx-auto flex items-center justify-between gap-2 backdrop-blur-sm shadow-lg py-4 px-6 md:px-8 lg:px-10">
        <div
          className="flex items-center gap-1 cursor-pointer"
        >
          <img src={Logo} alt="Nezcode-Logo-Name" onClick={() => window.location.href = "/"} className='h-8 opacity-85 hover:opacity-100 transition-opacity' />
        </div>

        {/* Navigation Links - Desktop */}
        <div
          className="hidden md:flex items-center gap-5 xl:gap-10"
        >
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className={`text-sm uppercase font-medium relative text-center after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-white after:transition-all
                ${currentPath === link.href ? 'text-white after:w-full  ' : 'text-gray-400 hover:text-gray-200'}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-black-primary border-t border-black-primary py-4"
        >
          <div
            className="container mx-auto px-4 space-y-4"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium text-center py-2
                  ${currentPath === link.href ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar