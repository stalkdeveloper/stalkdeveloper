import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer({ isDark }) {
  return (
    <footer className={`transition-colors duration-500 py-8 ${
      isDark ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className={`text-lg font-bold ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              Stalk Developer
            </h3>
            <p className={`text-xs mt-1 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
              MERN Stack Developer & Founder of uShortify
            </p>
          </div>

          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/stalkdeveloper" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              isDark ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}>
              <FaLinkedin size={18} />
            </a>
            <a href="https://github.com/stalkdeveloper" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              isDark ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}>
              <FaGithub size={18} />
            </a>
            <a href="https://www.instagram.com/stalkvlog" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              isDark ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}>
              <FaInstagram size={18} />
            </a>
            <a href="mailto:sunnyk.kongu@gmail.com" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              isDark ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}>
              <FaEnvelope size={18} />
            </a>
          </div>

          <p className={`text-xs ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            © {new Date().getFullYear()} Sunny Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;