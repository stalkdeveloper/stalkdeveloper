import React, { useState } from 'react';
import { FaArrowRight, FaShoppingCart, FaGamepad, FaChartLine, FaCar, FaUsers, FaCode, FaRobot, FaMobileAlt, FaCloud, FaWallet } from 'react-icons/fa';

function Projects({ isDark }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Multi-Vendor E-Commerce Platform',
      shortDesc: 'Complete e-commerce solution with multi-vendor support',
      description: 'A comprehensive e-commerce platform that enables multiple vendors to sell products, manage inventory, and process payments securely. Features include real-time inventory tracking, coupon management, and detailed analytics dashboards.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT', 'Tailwind CSS'],
      icon: <FaShoppingCart />,
      stats: '1,000+ daily transactions',
      category: 'ecommerce',
      image: '🛍️',
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 2,
      title: 'Real-Time Gaming Platform',
      shortDesc: 'Interactive gaming with live rooms & real-time betting',
      description: 'Built a high-performance gaming platform with WebSocket integration for real-time gameplay, live chat, and instant transactions. Includes secure wallet system, game analytics, and automated payouts.',
      stack: ['Next.js', 'Socket.IO', 'Node.js', 'Firebase', 'Tailwind CSS', 'Redis'],
      icon: <FaGamepad />,
      stats: '1,000+ daily payments',
      category: 'gaming',
      image: '🎮',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Business CRM & Dashboard',
      shortDesc: 'Comprehensive CRM with sales tracking & analytics',
      description: 'Enterprise-grade CRM solution with role-based access, lead management, sales pipeline tracking, and real-time reporting. Multi-tenant architecture with subscription-based feature control.',
      stack: ['React', 'Laravel', 'MySQL', 'Chart.js', 'JWT', 'Tailwind CSS'],
      icon: <FaUsers />,
      stats: '45% faster API response',
      category: 'crm',
      image: '📊',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 4,
      title: 'Ride-Sharing Platform',
      shortDesc: 'Real-time ride booking with GPS tracking',
      description: 'Complete ride-sharing solution with driver and passenger apps, real-time location tracking, dynamic pricing, ride history, and push notifications. Built for scalability and user experience.',
      stack: ['React Native', 'Node.js', 'Firebase', 'Google Maps API', 'MongoDB'],
      icon: <FaCar />,
      stats: 'Real-time ride matching',
      category: 'transport',
      image: '🚗',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 5,
      title: 'Trading & Portfolio Tracker',
      shortDesc: 'Real-time market data & portfolio management',
      description: 'Advanced trading platform with real-time market data integration, portfolio tracking, trade logging, profit/loss analysis, and customizable price alerts. Integrated with Binance and Bybit APIs.',
      stack: ['Next.js', 'WebSockets', 'Chart.js', 'MongoDB', 'Tailwind CSS'],
      icon: <FaChartLine />,
      stats: '40% improved trading efficiency',
      category: 'trading',
      image: '📈',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Marketplace Platform',
      shortDesc: 'OLX-style classifieds with advanced search',
      description: 'Scalable marketplace platform supporting multiple categories, user listings, location-based search, built-in messaging, and image management. Optimized for thousands of concurrent users.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Cloudinary'],
      icon: <FaCode />,
      stats: 'Supports thousands of users',
      category: 'marketplace',
      image: '🏪',
      color: 'from-rose-500 to-red-500'
    },
    {
      id: 7,
      title: 'AI-Powered Chatbot',
      shortDesc: 'Intelligent customer support chatbot',
      description: 'Built an AI-powered chatbot with natural language processing for automated customer support. Features include intent recognition, multi-language support, and seamless integration with existing systems.',
      stack: ['Python', 'TensorFlow', 'React', 'Node.js', 'WebSockets'],
      icon: <FaRobot />,
      stats: '80% automated responses',
      category: 'ai',
      image: '🤖',
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 8,
      title: 'Mobile Fitness Tracker',
      shortDesc: 'Cross-platform fitness tracking app',
      description: 'React Native application for fitness tracking with real-time workout monitoring, progress visualization, personalized recommendations, and social sharing features.',
      stack: ['React Native', 'Node.js', 'MongoDB', 'Redux', 'Chart.js'],
      icon: <FaMobileAlt />,
      stats: '10K+ active users',
      category: 'mobile',
      image: '🏃',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 9,
      title: 'Cloud Storage Solution',
      shortDesc: 'Secure file storage and sharing platform',
      description: 'Cloud storage application with end-to-end encryption, file versioning, team collaboration features, and seamless integration with third-party services.',
      stack: ['React', 'Node.js', 'AWS S3', 'MongoDB', 'Socket.IO'],
      icon: <FaCloud />,
      stats: '5TB+ data stored',
      category: 'cloud',
      image: '☁️',
      color: 'from-sky-500 to-blue-500'
    },
    {
      id: 10,
      title: 'Crypto Wallet Dashboard',
      shortDesc: 'Multi-chain cryptocurrency wallet',
      description: 'Comprehensive crypto wallet supporting multiple blockchains with portfolio tracking, transaction history, price alerts, and DeFi integration.',
      stack: ['Next.js', 'Web3.js', 'Node.js', 'MongoDB', 'Chart.js'],
      icon: <FaWallet />,
      stats: '10+ supported chains',
      category: 'trading',
      image: '💰',
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: '✨' },
    { id: 'ecommerce', name: 'E-Commerce', icon: '🛍️' },
    { id: 'gaming', name: 'Gaming', icon: '🎮' },
    { id: 'crm', name: 'CRM', icon: '📊' },
    { id: 'transport', name: 'Transport', icon: '🚗' },
    { id: 'trading', name: 'Trading', icon: '📈' },
    { id: 'marketplace', name: 'Marketplace', icon: '🏪' },
    { id: 'ai', name: 'AI/ML', icon: '🤖' },
    { id: 'mobile', name: 'Mobile', icon: '📱' },
    { id: 'cloud', name: 'Cloud', icon: '☁️' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className={`py-8 transition-colors duration-500 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className={`text-sm font-medium px-4 py-2 rounded-full ${
              isDark ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600 shadow-sm'
            }`}>
              🚀 My Portfolio
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Featured <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${
            isDark ? 'bg-gray-700' : 'bg-gray-300'
          }`}></div>
          <p className={`mt-6 max-w-2xl mx-auto text-lg ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Building scalable, production-ready applications that solve real-world problems
          </p>
        </div>

        {/* Category Filter - Modern Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`group relative px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? isDark
                    ? 'bg-gray-700 text-white shadow-lg scale-105'
                    : 'bg-gray-800 text-white shadow-lg scale-105'
                  : isDark
                    ? 'bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-800 shadow-sm'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">{cat.icon}</span>
                <span>{cat.name}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid - Modern Card Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer animate-fadeInUp ${
                isDark ? 'hover:shadow-2xl' : 'hover:shadow-xl'
              }`}
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {/* Card Background with Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Card Content */}
              <div className={`relative h-full rounded-2xl p-6 transition-all duration-500 ${
                isDark 
                  ? 'bg-gray-800/90 backdrop-blur-sm border border-gray-700 group-hover:border-transparent' 
                  : 'bg-white border border-gray-100 group-hover:border-transparent shadow-lg'
              }`}>
                {/* Project Icon/Image */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 ${
                    isDark 
                      ? 'bg-gray-700 group-hover:bg-white/20' 
                      : 'bg-gray-100 group-hover:bg-white/20'
                  }`}>
                    {project.image}
                  </div>
                </div>

                {/* Project Info */}
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                  isDark ? 'text-white group-hover:text-white' : 'text-gray-900 group-hover:text-dark'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm mb-4 leading-relaxed transition-colors duration-300 ${
                  isDark ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray'
                }`}>
                  {project.shortDesc}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.slice(0, 3).map((tech, i) => (
                    <span key={i} className={`px-2 py-1 text-xs rounded-lg transition-all duration-300 ${
                      isDark 
                        ? 'bg-gray-700 text-gray-300 group-hover:bg-white/20 group-hover:text-dark' 
                        : 'bg-gray-100 text-gray-600 group-hover:bg-white/20 group-hover:text-dark'
                    }`}>
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className={`px-2 py-1 text-xs rounded-lg transition-all duration-300 ${
                      isDark 
                        ? 'bg-gray-700 text-gray-300 group-hover:bg-white/20 group-hover:text-dark' 
                        : 'bg-gray-100 text-gray-600 group-hover:bg-white/20 group-hover:text-dark'
                    }`}>
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>

                {/* Stats & View Link */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <p className={`text-xs font-semibold transition-colors duration-300 ${
                    isDark ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-500 group-hover:text-gray'
                  }`}>
                    {project.stats}
                  </p>
                  <div className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 ${
                    isDark ? 'text-gray-400 group-hover:text-dark' : 'text-gray-600 group-hover:text-dark'
                  }`}>
                    <span>View Details</span>
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              isDark
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            View All Projects
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className={`relative max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Gradient */}
            <div className={`relative h-32 rounded-t-2xl bg-gradient-to-r ${selectedProject.color}`}>
              <div className="absolute -bottom-8 left-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}>
                  {selectedProject.image}
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 pt-10">
              <h3 className={`text-2xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {selectedProject.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.stack.map((tech, i) => (
                  <span key={i} className={`px-2 py-1 text-xs rounded-lg ${
                    isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>

              <p className={`mb-6 leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {selectedProject.description}
              </p>

              <div className={`p-4 rounded-xl mb-6 ${
                isDark ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <p className={`text-sm font-semibold mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Key Highlights:
                </p>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {selectedProject.stats}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`flex-1 py-2 rounded-lg font-medium transition-all ${
                    isDark
                      ? 'bg-gray-700 text-white hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Close
                </button>
                <button
                  className={`flex-1 py-2 rounded-lg font-medium transition-all bg-gradient-to-r ${selectedProject.color} text-white hover:opacity-90`}
                >
                  View Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;