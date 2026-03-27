import React from 'react';
import { FaLaptopCode, FaServer, FaPaintBrush, FaDatabase, FaCloudUploadAlt, FaShieldAlt, FaMobileAlt, FaChartLine, FaRobot, FaSearch } from 'react-icons/fa';

function Services({ isDark }) {
  const services = [
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: 'Full-Stack Development',
      description: 'End-to-end web applications using MERN stack, Laravel, and modern technologies. Building scalable, maintainable solutions with clean architecture.',
      features: ['MERN Stack', 'Laravel/PHP', 'REST APIs', 'Real-time apps']
    },
    {
      icon: <FaServer className="text-3xl" />,
      title: 'Backend Development',
      description: 'Robust server-side applications with Node.js, Express, and PHP. Focus on performance, security, and scalability.',
      features: ['Node.js/Express', 'REST/GraphQL', 'Microservices', 'WebSockets']
    },
    {
      icon: <FaPaintBrush className="text-3xl" />,
      title: 'Frontend Development',
      description: 'Modern, responsive, and accessible interfaces using React and Tailwind CSS. Creating delightful user experiences.',
      features: ['React/Next.js', 'Tailwind CSS', 'Responsive Design', 'SPA/SSR']
    },
    {
      icon: <FaDatabase className="text-3xl" />,
      title: 'Database Design',
      description: 'Efficient database architecture with MySQL, MongoDB, and query optimization strategies.',
      features: ['Schema Design', 'Query Optimization', 'Indexing', 'Data Modeling']
    },
    {
      icon: <FaCloudUploadAlt className="text-3xl" />,
      title: 'Cloud & DevOps',
      description: 'Deployment and infrastructure management on AWS with Docker and CI/CD pipelines.',
      features: ['AWS (EC2, S3)', 'Docker', 'CI/CD', 'Git workflows']
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: 'API Integration',
      description: 'Seamless integration with third-party services, payment gateways, and external APIs.',
      features: ['Payment Gateways', 'Social APIs', 'Webhooks', 'OAuth']
    },
    {
      icon: <FaMobileAlt className="text-3xl" />,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications using React Native with native-like performance.',
      features: ['React Native', 'iOS/Android', 'Push Notifications', 'Offline Support']
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics dashboards with real-time data visualization and reporting.',
      features: ['Chart.js', 'D3.js', 'Real-time Metrics', 'Custom Reports']
    },
    {
      icon: <FaRobot className="text-3xl" />,
      title: 'AI Integration',
      description: 'Integration of AI/ML models for intelligent features and automation.',
      features: ['Chatbots', 'Recommendation Systems', 'NLP', 'Computer Vision']
    }
  ];

  return (
    <section id="services" className={`py-20 transition-colors duration-500 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            What I Do
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${
            isDark ? 'bg-gray-600' : 'bg-gray-300'
          }`}></div>
          <p className={`mt-4 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Comprehensive development services for modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`rounded-2xl shadow-lg transition-all duration-300 p-6 border transform hover:-translate-y-2 hover:shadow-2xl animate-fadeInUp ${
                isDark 
                  ? 'bg-gray-900 border-gray-700' 
                  : 'bg-white border-gray-100'
              }`}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
              }`}>
                {service.icon}
              </div>
              <h3 className={`text-xl font-bold mb-3 transition-colors ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                {service.title}
              </h3>
              <p className={`text-sm mb-4 leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, i) => (
                  <span key={i} className={`px-2 py-1 text-xs rounded-lg ${
                    isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;