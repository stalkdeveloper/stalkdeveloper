import React, { useState, useEffect } from 'react';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { FaCode, FaHome, FaUser, FaCog, FaBriefcase, FaProjectDiagram, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';
import Scrollspy from 'react-scrollspy';

function Navbar({ isDark, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', icon: <FaHome className="text-sm" /> },
    { id: 'about', label: 'About', icon: <FaUser className="text-sm" /> },
    { id: 'services', label: 'Services', icon: <FaCog className="text-sm" /> },
    { id: 'experiences', label: 'Experience', icon: <FaBriefcase className="text-sm" /> },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram className="text-sm" /> },
    { id: 'faq', label: 'FAQ', icon: <FaQuestionCircle className="text-sm" /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope className="text-sm" /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? isDark
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-white/95 backdrop-blur-md shadow-lg py-2'
        : isDark
          ? 'bg-gray-900/90 shadow-md py-3'
          : 'bg-white/90 shadow-md py-3'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          className={`flex items-center gap-2 text-xl font-bold transition-all hover:scale-105 ${
            isDark 
              ? 'bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent'
          }`}
        >
          <FaCode className={isDark ? 'text-orange-400' : 'text-orange-600'} />
          <span>Stalk Developer</span>
        </a>

        {/* Desktop Navigation */}
        <Scrollspy
          items={navLinks.map((link) => link.id)}
          currentClassName={isDark ? 'text-orange-400 font-semibold' : 'text-orange-600 font-semibold'}
          className="hidden md:flex items-center gap-6 text-sm font-medium"
          offset={-100}
        >
          {navLinks.map((link) => (
            <li key={link.id} className="list-none">
              <a 
                href={`#${link.id}`} 
                className={`flex items-center gap-1.5 transition-all duration-200 hover:scale-105 ${
                  isDark 
                    ? 'text-gray-400 hover:text-orange-400' 
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                {link.icon}
                {link.label}
              </a>
            </li>
          ))}
        </Scrollspy>

        {/* Right Side - Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              isDark
                ? 'bg-orange-500/20 hover:bg-orange-500/30 text-yellow-400'
                : 'bg-orange-100 hover:bg-orange-200 text-orange-700'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className={`md:hidden p-2 rounded-lg transition-all duration-200 focus:outline-none ${
              isDark 
                ? 'text-white hover:bg-gray-800' 
                : 'text-gray-800 hover:bg-gray-100'
            }`}
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isDark ? 'bg-gray-900' : 'bg-white'
      } shadow-lg ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col gap-2 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`} 
                onClick={() => setMenuOpen(false)} 
                className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-all duration-200 ${
                  isDark 
                    ? 'text-gray-400 hover:text-orange-400 hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-orange-600 hover:bg-gray-50'
                }`}
              >
                <span className="text-lg">{link.icon}</span>
                <span className="font-medium">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;