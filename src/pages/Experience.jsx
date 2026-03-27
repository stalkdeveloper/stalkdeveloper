import React, { useState } from 'react';
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaTrophy, FaCode, FaRocket, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Experience({ isDark }) {
  const [expandedId, setExpandedId] = useState(null);

  const experienceData = [
    {
      id: 1,
      title: 'MERN Stack Developer',
      company: 'Helpful Insight Private Limited',
      duration: 'Jan 2024 – Present',
      location: 'Jaipur, India',
      description: 'Leading full-stack development for multiple high-traffic platforms, focusing on scalable architecture and real-time systems. Transitioned from Web Developer to MERN Stack Developer, specializing in modern JavaScript technologies.',
      responsibilities: [
        'Developed OLX-style marketplace platform with scalable REST APIs supporting thousands of concurrent users',
        'Built multi-vendor e-commerce platform with RBAC and advanced product catalog system handling 10K+ listings',
        'Integrated Binance and Bybit APIs with WebSockets for real-time trading automation (40% efficiency improvement)',
        'Engineered real-time gaming system processing 1,000+ daily payments with event-driven architecture',
        'Optimized database queries and reduced API response times through indexing strategies'
      ],
      achievements: [
        'Reduced API response times by 45%',
        'Handled 1,000+ daily transactions',
        'Improved trading efficiency by 40%',
        'Successfully transitioned to MERN stack development'
      ],
      stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'WebSockets', 'AWS', 'Docker'],
      icon: '💻'
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Appentus Technologies Private Limited',
      duration: 'Nov 2022 – Jan 2024',
      location: 'Jaipur, India',
      description: 'Developed scalable backend services for logistics, CRM, and gaming platforms with focus on performance and security.',
      responsibilities: [
        'Developed logistics platform handling 1,000+ daily transactions with order tracking and payment integration',
        'Designed multi-tenant CRM with subscription-based feature control and role-based access',
        'Integrated third-party gaming APIs with real-time transaction processing',
        'Implemented database optimization strategies improving query performance'
      ],
      achievements: [
        '45% reduction in API response times',
        'Successfully integrated multiple third-party APIs',
        'Implemented secure multi-tenant architecture'
      ],
      stack: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Redis', 'Git'],
      icon: '⚙️'
    },
    {
      id: 3,
      title: 'Developer Intern',
      company: 'Mallow Technologies Private Limited',
      duration: 'Jul 2022 – Oct 2022',
      location: 'Karur, Tamil Nadu',
      description: 'Gained hands-on experience in production-level Laravel applications following MVC architecture and best practices.',
      responsibilities: [
        'Contributed to Laravel-based production applications',
        'Implemented clean coding practices and MVC architecture',
        'Collaborated with senior developers on feature development',
        'Participated in code reviews and testing'
      ],
      achievements: [
        'Successfully delivered multiple features on time',
        'Received recognition for code quality'
      ],
      stack: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
      icon: '🎓'
    },
    {
      id: 4,
      title: 'Freelance Full-Stack Developer',
      company: 'Self-Employed',
      duration: 'Jan 2021 – Present',
      location: 'Remote',
      description: 'Delivered custom web solutions for international clients, managing end-to-end project lifecycle from requirements gathering to deployment.',
      responsibilities: [
        'Built and deployed 20+ web applications for diverse industries including e-commerce, healthcare, and education',
        'Managed client communication and project timelines ensuring 100% client satisfaction',
        'Implemented responsive designs and optimized for mobile devices',
        'Provided post-launch support and maintenance'
      ],
      achievements: [
        'Completed 20+ successful projects',
        'Maintained 5-star client rating',
        'Delivered projects 30% ahead of schedule'
      ],
      stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Firebase', 'Vercel'],
      icon: '🚀'
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experiences" className={`py-8 transition-colors duration-500 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className={`text-sm font-medium px-4 py-2 rounded-full ${
              isDark ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600 shadow-sm'
            }`}>
              💼 Professional Journey
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Work Experience
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${
            isDark ? 'bg-gray-700' : 'bg-gray-300'
          }`}></div>
          <p className={`mt-6 max-w-2xl mx-auto text-lg ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            4+ years of building scalable applications with modern technologies
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experienceData.map((exp, idx) => (
            <div
              key={exp.id}
              className={`rounded-2xl transition-all duration-300 hover:shadow-xl animate-fadeInUp ${
                isDark 
                  ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' 
                  : 'bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Header Section */}
              <div className={`p-6 border-b ${
                isDark ? 'border-gray-700' : 'border-gray-100'
              }`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${
                      isDark ? 'bg-gray-700' : 'bg-gray-100'
                    }`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-1 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exp.title}
                      </h3>
                      <p className={`font-medium ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm ${
                      isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <FaCalendarAlt size={12} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm ${
                      isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <FaBuilding size={12} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className={`text-base leading-relaxed mb-6 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className={`mb-6 p-4 rounded-xl ${
                  isDark ? 'bg-gray-700/30' : 'bg-gray-50'
                }`}>
                  <div className="flex items-center gap-2 mb-3">
                    <FaTrophy className={isDark ? 'text-gray-400' : 'text-gray-600'} />
                    <h4 className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>
                      Key Achievements
                    </h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className={`flex items-center gap-2 text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <span className="text-green-500">✓</span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expand/Collapse Button */}
                <button
                  onClick={() => toggleExpand(exp.id)}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <FaCode size={12} />
                  <span>{expandedId === exp.id ? 'Show less details' : 'Show more details'}</span>
                  {expandedId === exp.id ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                </button>

                {/* Expandable Content */}
                {expandedId === exp.id && (
                  <div className="mt-6 space-y-6 animate-fadeIn">
                    {/* Responsibilities */}
                    <div>
                      <h4 className={`font-semibold mb-3 flex items-center gap-2 ${
                        isDark ? 'text-white' : 'text-gray-800'
                      }`}>
                        <FaBriefcase size={14} />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className={`flex items-start gap-2 text-sm ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className={`font-semibold mb-3 flex items-center gap-2 ${
                        isDark ? 'text-white' : 'text-gray-800'
                      }`}>
                        <FaRocket size={14} />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.stack.map((tech, i) => (
                          <span key={i} className={`px-3 py-1.5 text-sm rounded-lg transition-all duration-300 ${
                            isDark 
                              ? 'bg-gray-700 text-gray-300' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section - Clean Design */}
        <div className={`mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          <div className={`text-center p-6 rounded-xl ${
            isDark ? 'bg-gray-800' : 'bg-white shadow-sm'
          }`}>
            <div className="text-3xl font-bold mb-2">4+</div>
            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Years Experience</div>
          </div>
          <div className={`text-center p-6 rounded-xl ${
            isDark ? 'bg-gray-800' : 'bg-white shadow-sm'
          }`}>
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Projects Delivered</div>
          </div>
          <div className={`text-center p-6 rounded-xl ${
            isDark ? 'bg-gray-800' : 'bg-white shadow-sm'
          }`}>
            <div className="text-3xl font-bold mb-2">45%</div>
            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Performance Gain</div>
          </div>
          <div className={`text-center p-6 rounded-xl ${
            isDark ? 'bg-gray-800' : 'bg-white shadow-sm'
          }`}>
            <div className="text-3xl font-bold mb-2">20+</div>
            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;