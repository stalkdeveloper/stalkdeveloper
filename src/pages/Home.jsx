import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaCode, FaReact, FaNodeJs, FaLaravel, FaRocket, FaUsers, FaAward, FaChartLine } from 'react-icons/fa';

function Home({ isDark }) {
  const [currentTech, setCurrentTech] = useState(0);
  const technologies = ['MERN Stack', 'Node.js', 'React', 'Laravel', 'Full Stack'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500 pt-20 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800' 
          : 'bg-gradient-to-br from-orange-50 via-white to-amber-50'
      }`}
      aria-label="Homepage"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse ${
          isDark ? 'bg-orange-500' : 'bg-orange-400'
        }`}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000 ${
          isDark ? 'bg-amber-500' : 'bg-amber-400'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-10 ${
          isDark ? 'bg-orange-600' : 'bg-orange-300'
        }`}></div>
        
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float ${
              isDark ? 'bg-orange-400/30' : 'bg-orange-300/50'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="text-center max-w-5xl px-6 relative z-10">
        {/* Animated Badge */}
        <div className={`inline-block mb-6 px-5 py-2 backdrop-blur-sm rounded-full border animate-bounce-slow transition-all duration-300 ${
          isDark 
            ? 'bg-orange-500/20 border-orange-400/30 text-orange-200' 
            : 'bg-orange-100 border-orange-300 text-orange-700'
        }`}>
          <span className="text-sm font-medium flex items-center gap-2">
            <span className="text-lg">🚀</span>
            Welcome to my digital space
            <span className="text-lg">✨</span>
          </span>
        </div>

        {/* Main Heading */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight animate-fadeInUp ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Hi, I'm{' '}
          <span className={`relative inline-block ${
            isDark 
              ? 'bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent'
          }`}>
            Sunny Kumar
          </span>
        </h1>

        {/* Role with Rotating Text */}
        <div className="mb-4 animate-fadeInUp animation-delay-200">
          <p className={`text-xl md:text-2xl font-light inline-block ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I'm a
          </p>

          <div className="inline-block ml-2">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent animate-pulse">
              {technologies[currentTech]}
            </span>

            <span className={`text-xl md:text-2xl font-light ml-2 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Developer
            </span>
          </div>
        </div>


        {/* Description */}
        <p className={`text-lg md:text-xl mb-8 font-light max-w-2xl mx-auto animate-fadeInUp animation-delay-400 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Building scalable, high-performance web applications with modern technologies.
          Specialized in creating seamless user experiences and robust backend systems.
        </p>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 animate-fadeInUp animation-delay-600">
          <div className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 hover:scale-110 ${
            isDark ? 'bg-gray-800/50 text-orange-400' : 'bg-orange-50 text-orange-600'
          }`}>
            <FaReact className="text-xl animate-spin-slow" />
            <span className="text-sm font-medium">React</span>
          </div>
          <div className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 hover:scale-110 ${
            isDark ? 'bg-gray-800/50 text-orange-400' : 'bg-orange-50 text-orange-600'
          }`}>
            <FaNodeJs className="text-xl" />
            <span className="text-sm font-medium">Node.js</span>
          </div>
          <div className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 hover:scale-110 ${
            isDark ? 'bg-gray-800/50 text-orange-400' : 'bg-orange-50 text-orange-600'
          }`}>
            <FaLaravel className="text-xl" />
            <span className="text-sm font-medium">Laravel</span>
          </div>
          <div className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 hover:scale-110 ${
            isDark ? 'bg-gray-800/50 text-orange-400' : 'bg-orange-50 text-orange-600'
          }`}>
            <FaCode className="text-xl" />
            <span className="text-sm font-medium">MongoDB</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-800">
          <a
            href="#projects"
            className={`group inline-flex items-center gap-2 px-6 sm:px-8 py-3 font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ${
              isDark
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-orange-500/50'
                : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-orange-500/30'
            }`}
          >
            View My Work
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 backdrop-blur-sm border font-semibold rounded-full transition-all duration-300 ${
              isDark
                ? 'bg-orange-500/10 border-orange-400/30 text-orange-200 hover:bg-orange-500/20'
                : 'bg-orange-100 border-orange-300 text-orange-700 hover:bg-orange-200'
            }`}
          >
            Get In Touch
          </a>
        </div>

        {/* uShortify Founder Section */}
        <div className={`mt-16 p-6 rounded-2xl backdrop-blur-sm border animate-fadeInUp animation-delay-1000 ${
          isDark 
            ? 'bg-gray-800/50 border-gray-700' 
            : 'bg-white/80 border-gray-200 shadow-lg'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl animate-pulse ${
                isDark ? 'bg-orange-500/20' : 'bg-orange-100'
              }`}>
                🚀
              </div>
              <div className="text-left">
                <a 
                  href="https://ushortify.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <h3 className={`text-xl font-bold mb-1 flex items-center gap-2 transition-all duration-300 group-hover:scale-105 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Founder at uShortify
                    <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">🔗</span>
                  </h3>
                </a>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Shorten, brand, and track every link you share.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-center group">
                <FaUsers className={`text-2xl mx-auto mb-1 transition-all duration-300 group-hover:scale-110 ${
                  isDark ? 'text-orange-400' : 'text-orange-500'
                }`} />
                <div className="relative">
                  <p className={`text-lg font-bold inline-flex items-center gap-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                      &lt;50ms
                    </span>
                  </p>
                </div>
                <p className={`text-xs ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>Redirect Speed</p>
              </div>
              <div className="text-center group">
                <FaAward className={`text-2xl mx-auto mb-1 transition-all duration-300 group-hover:scale-110 ${
                  isDark ? 'text-orange-400' : 'text-orange-500'
                }`} />
                <p className={`text-lg font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Live</p>
                <p className={`text-xs ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>Click Tracking</p>
              </div>
              <div className="text-center group">
                <FaChartLine className={`text-2xl mx-auto mb-1 transition-all duration-300 group-hover:scale-110 ${
                  isDark ? 'text-orange-400' : 'text-orange-500'
                }`} />
                <p className={`text-lg font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>99.9%</p>
                <p className={`text-xs ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>Uptime</p>
              </div>
            </div>
          </div>
          
          {/* Quick Stats Row */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div>
                <p className={`text-xs font-medium ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  🔗 Custom aliases
                </p>
              </div>
              <div>
                <p className={`text-xs font-medium ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  📊 Advanced analytics
                </p>
              </div>
              <div>
                <a 
                  href="https://ushortify.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`text-xs font-medium inline-flex items-center gap-1 transition-all duration-300 hover:scale-105 ${
                    isDark ? 'text-orange-400 hover:text-orange-300' : 'text-orange-600 hover:text-orange-700'
                  }`}
                >
                  Visit uShortify →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 rounded-full border-2 flex justify-center ${
          isDark ? 'border-gray-600' : 'border-gray-400'
        }`}>
          <div className={`w-1 h-2 rounded-full mt-2 animate-scroll ${
            isDark ? 'bg-orange-400' : 'bg-orange-600'
          }`}></div>
        </div>
      </div>
    </section>
  );
}

export default Home;