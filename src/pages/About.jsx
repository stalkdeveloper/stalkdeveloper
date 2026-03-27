import React from 'react';
import { FaCode, FaMapMarkerAlt, FaGraduationCap, FaUsers } from 'react-icons/fa';

function About({ isDark }) {
  return (
    <section id="about" className={`py-20 transition-colors duration-500 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className={`text-sm font-medium px-4 py-2 rounded-full ${
              isDark ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600 shadow-sm'
            }`}>
              👨‍💻 About Me
            </span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${
            isDark ? 'bg-gray-600' : 'bg-gray-300'
          }`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-fadeInLeft">
            <div className={`p-6 rounded-2xl shadow-lg border ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Who Am I?
              </h3>
              <p className={`leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm a passionate <strong className={isDark ? 'text-gray-200' : 'text-gray-800'}>MERN Stack Developer</strong> with <strong>4+ years of experience</strong> building scalable, high-performance web applications. I specialize in creating robust backend systems and elegant frontend interfaces.
              </p>
              <p className={`leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                My expertise spans the entire development lifecycle - from database design and API development to responsive UIs and cloud deployment. I thrive on solving complex problems and delivering production-ready solutions that make a difference.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-4 rounded-xl shadow border text-center ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
              }`}>
                <FaUsers className={`text-2xl mx-auto mb-2 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`} />
                <p className={`text-sm font-semibold ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>
                  4+ Years
                </p>
                <p className={`text-xs ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Experience
                </p>
              </div>
              <div className={`p-4 rounded-xl shadow border text-center ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
              }`}>
                <FaCode className={`text-2xl mx-auto mb-2 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`} />
                <p className={`text-sm font-semibold ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>
                  50+ Projects
                </p>
                <p className={`text-xs ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Completed
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fadeInRight">
            <div className={`p-6 rounded-2xl shadow-lg border ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Tech Stack & Tools
              </h3>
              <div className="space-y-3">
                <div>
                  <p className={`text-sm font-semibold mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Frontend
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'jQuery', 'HTML/CSS'].map(tech => (
                      <span key={tech} className={`px-2 py-1 text-xs rounded-lg ${
                        isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className={`text-sm font-semibold mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Backend
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Express.js', 'Laravel', 'CodeIgniter', 'PHP', 'REST APIs', 'WebSockets'].map(tech => (
                      <span key={tech} className={`px-2 py-1 text-xs rounded-lg ${
                        isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className={`text-sm font-semibold mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Databases & Cloud
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['MySQL', 'MongoDB', 'PostgreSQL', 'AWS (EC2, S3)', 'Docker', 'Git'].map(tech => (
                      <span key={tech} className={`px-2 py-1 text-xs rounded-lg ${
                        isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-2xl shadow-lg border ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Education & Location
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FaGraduationCap className={`mt-1 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`} />
                  <div>
                    <p className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>
                      Master of Computer Applications (MCA)
                    </p>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Kongu Engineering College, Anna University (2019–2022) – 8.1 CGPA
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaGraduationCap className={`mt-1 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`} />
                  <div>
                    <p className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>
                      Bachelor of Computer Applications (BCA)
                    </p>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Gossner College, Ranchi University (2016–2019) – 68%
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className={`mt-1 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`} />
                  <div>
                    <p className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>
                      Location
                    </p>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Jaipur, Rajasthan, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;