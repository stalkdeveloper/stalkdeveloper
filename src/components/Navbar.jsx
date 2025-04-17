import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Scrollspy from 'react-scrollspy';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'experiences', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-blue-600 tracking-wide">
          Stalk Developer
        </a>

        {/* Desktop Navigation */}
        <Scrollspy
          items={navLinks.map((link) => link.id)}
          currentClassName="text-blue-600 font-semibold"
          className="hidden md:flex gap-6 text-sm text-gray-700 font-medium tracking-wide"
          offset={-100}
        >
          {navLinks.map((link) => (
            <li key={link.id} className="list-none">
              <a
                href={`#${link.id}`}
                className="hover:text-blue-600 transition-colors duration-200 transform hover:scale-105"
              >
                {link.label}
              </a>
            </li>
          ))}
        </Scrollspy>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="focus:outline-none text-gray-700"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        } bg-white shadow-md px-6 pb-4`}
      >
        <ul className="flex flex-col gap-3 text-sm text-gray-800 font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                onClick={toggleMenu}
                href={`#${link.id}`}
                className="hover:text-blue-600 transition-colors duration-200 transform hover:scale-105 block"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
