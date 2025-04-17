import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-3">© {new Date().getFullYear()} Stalk Developer. All rights reserved.</p>

        <div className="flex justify-center space-x-4 mb-3">
          {/* Social Icons */}
          <a
            href="https://www.linkedin.com/in/stalkdeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://github.com/stalkdeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.instagram.com/stalkvlog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-colors duration-200"
            aria-label="Instagram"
          >
            <FaInstagram size={22} />
          </a>
        </div>

        <p className="text-xs text-gray-400">Sunny Kumar — Web & Backend Developer</p>
      </div>
    </footer>
  );
}

export default Footer;
