import React, { useState, useEffect } from 'react';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { FaCode, FaHome, FaUser, FaCog, FaBriefcase, FaProjectDiagram, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';
import ScrollSpyWrapper from './ScrollSpyWrapper';

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

  // For very small screens, show only icons in desktop menu
  const showFullLabels = window.innerWidth >= 1024;
  const showIconsOnly = window.innerWidth >= 768 && window.innerWidth < 1024;

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
      <div className="container mx-auto px-3 sm:px-4 flex justify-between items-center min-w-0">
        {/* Logo - Responsive with text truncation */}
        <a 
          href="#home" 
          className={`flex items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg lg:text-xl font-bold transition-all hover:scale-105 flex-shrink-0 ${
            isDark 
              ? 'bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent'
          }`}
        >
          <FaCode className={`${isDark ? 'text-orange-400' : 'text-orange-600'} text-sm sm:text-base`} />
          <span className="hidden sm:inline whitespace-nowrap">Stalk Developer</span>
          <span className="sm:hidden">SD</span>
        </a>

        {/* Desktop Navigation - Responsive menu */}
        <div className="hidden md:block flex-1 mx-2 lg:mx-4">
          <ScrollSpyWrapper
            items={navLinks.map((link) => link.id)}
            currentClassName={isDark ? 'text-orange-400 font-semibold' : 'text-orange-600 font-semibold'}
            offset={-100}
          >
            <ul className="flex items-center justify-center gap-1 lg:gap-2 xl:gap-4 text-xs lg:text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.id} className="list-none">
                  <a 
                    href={`#${link.id}`} 
                    className={`flex items-center gap-1 transition-all duration-200 hover:scale-105 whitespace-nowrap px-1 lg:px-2 py-1 ${
                      isDark 
                        ? 'text-gray-400 hover:text-orange-400' 
                        : 'text-gray-600 hover:text-orange-600'
                    }`}
                  >
                    {link.icon}
                    {/* Show full label on large screens, show first letter on medium screens */}
                    <span className="hidden lg:inline">{link.label}</span>
                    <span className="lg:hidden">{link.label.charAt(0)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ScrollSpyWrapper>
        </div>

        {/* Right Side - Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              isDark
                ? 'bg-orange-500/20 hover:bg-orange-500/30 text-yellow-400'
                : 'bg-orange-100 hover:bg-orange-200 text-orange-700'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <HiSun size={18} className="sm:w-5 sm:h-5" /> : <HiMoon size={18} className="sm:w-5 sm:h-5" />}
          </button>

          {/* Mobile Menu Button - Shows on medium and below */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className={`md:hidden p-1.5 sm:p-2 rounded-lg transition-all duration-200 focus:outline-none ${
              isDark 
                ? 'text-white hover:bg-gray-800' 
                : 'text-gray-800 hover:bg-gray-100'
            }`}
          >
            {menuOpen ? <HiX size={20} className="sm:w-6 sm:h-6" /> : <HiMenu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full width dropdown with smooth animation */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isDark ? 'bg-gray-900' : 'bg-white'
      } shadow-lg ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col gap-1 px-4 py-3">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`} 
                onClick={() => setMenuOpen(false)} 
                className={`flex items-center gap-3 py-3 px-3 rounded-lg transition-all duration-200 ${
                  isDark 
                    ? 'text-gray-400 hover:text-orange-400 hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-orange-600 hover:bg-gray-50'
                }`}
              >
                <span className="text-base sm:text-lg">{link.icon}</span>
                <span className="font-medium text-sm sm:text-base">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;