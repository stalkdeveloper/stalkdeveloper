import React from 'react';
import { FaCode, FaMapMarkerAlt } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-blue-600">
          About Me
        </h2>

        <div className="space-y-5 text-sm leading-relaxed mb-12 text-center max-w-3xl mx-auto">
          <p>
            I'm a passionate <strong>Fullstack Developer</strong> with over <strong>3 years of hands-on experience</strong> building scalable, responsive, and high-performance web applications — from elegant UIs to robust backends.
          </p>
          <p>
            Skilled in the <strong>MERN stack</strong>, <strong>PHP (Laravel, CodeIgniter)</strong>, and <strong>Python Django</strong>. My experience spans <em>e-commerce platforms</em>, <em>CRM dashboards</em>, and <em>real-time apps</em> with a strong focus on clean code, performance, and API integrations.
          </p>
          <p>
            I enjoy working in agile teams, handling deployments, version control, and constantly learning in a remote-friendly environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tech Stack Card */}
          <div className="bg-gray-100 p-5 rounded-lg shadow text-center hover:shadow-xl transition duration-300">
            <FaCode className="text-blue-600 text-4xl mb-3 mx-auto" />
            <h3 className="text-lg font-semibold mb-3 text-blue-600">Tech Stack & Tools</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 text-left">
              <li><strong>Frontend:</strong> HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, jQuery, React.js</li>
              <li><strong>Backend:</strong> Core PHP, Node.js, Express.js, Python (Basic), REST APIs</li>
              <li><strong>Frameworks:</strong> Laravel, CodeIgniter, Django, MVC/MVT</li>
              <li><strong>Databases:</strong> MySQL, SQLite, MongoDB</li>
              <li><strong>DevOps / Hosting:</strong> cPanel, AWS (EC2, S3)</li>
              <li><strong>Version Control:</strong> Git, GitHub, GitLab, Bitbucket</li>
            </ul>
          </div>

          {/* Education & Location Card */}
          <div className="bg-gray-100 p-5 rounded-lg shadow text-center hover:shadow-xl transition duration-300">
            <FaMapMarkerAlt className="text-green-600 text-4xl mb-3 mx-auto" />
            <h3 className="text-lg font-semibold mb-3 text-blue-600">Education & Location</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 text-left">
              <li><strong>MCA:</strong> Kongu Engineering College, Anna University (2019–2022) – 8.1 CGPA</li>
              <li><strong>BCA:</strong> Gossner College, Ranchi University (2016–2019) – 68%</li>
              <li><strong>Location:</strong> Jaipur, Rajasthan</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
