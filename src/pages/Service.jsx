import React from 'react';
import { FaLaptopCode, FaCogs, FaPaintBrush } from 'react-icons/fa';

function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-10">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Full-Stack Development */}
          <div className="bg-gray-100 p-5 rounded-lg shadow text-center hover:shadow-xl transition duration-300">
            <FaLaptopCode className="text-blue-600 text-4xl mb-3 mx-auto" />
            <h5 className="text-lg font-semibold mb-2">Full-Stack Development</h5>
            <p className="text-sm text-gray-700 leading-relaxed">
              End-to-end development of dynamic and scalable web applications using
              <strong> PHP (Laravel, CodeIgniter, WordPress)</strong>,
              <strong> Python (Django)</strong>, and
              <strong> Node.js</strong>. I focus on building high-performance solutions
              with clean architecture and efficient code practices.
            </p>
          </div>

          {/* API Development */}
          <div className="bg-gray-100 p-5 rounded-lg shadow text-center hover:shadow-xl transition duration-300">
            <FaCogs className="text-green-600 text-4xl mb-3 mx-auto" />
            <h5 className="text-lg font-semibold mb-2">API Development</h5>
            <p className="text-sm text-gray-700 leading-relaxed">
              Expert in crafting secure and scalable <strong>RESTful APIs </strong>
              for mobile and web apps. I specialize in integrating third-party services,
              authentication systems, and custom business logic to streamline workflows
              and ensure seamless user experiences.
            </p>
          </div>

          {/* Frontend Development */}
          <div className="bg-gray-100 p-5 rounded-lg shadow text-center hover:shadow-xl transition duration-300">
            <FaPaintBrush className="text-yellow-500 text-4xl mb-3 mx-auto" />
            <h5 className="text-lg font-semibold mb-2">Frontend Development</h5>
            <p className="text-sm text-gray-700 leading-relaxed">
              Creating <strong>intuitive, responsive, and accessible</strong> interfaces
              using HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS. I bring ideas
              to life through interactive components and modern UI patterns, ensuring
              every design feels natural and user-friendly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
