import React from 'react';

const experienceData = [
  {
    title: 'Web Developer',
    company: 'Helpful Insight Pvt Ltd',
    duration: 'Jan 2024 – Present',
    description:
      'Contributed to multiple projects aimed at business growth, from systemizing internal processes to integrating third-party services for improved user experience and operational efficiency.',
    responsibilities: [
      'Contributed to the Sukuma project, helping businesses grow through Calendar, Business Strategy, Planning, and Culture development.',
      'Worked on Matka Dawood, a card-based betting game, implementing strategic gameplay, cron jobs for notifications, and payment system integration.',
      'Led technical integrations such as Two-Factor Authentication, Firebase, Google/Outlook Calendar, and MailerLite to enhance security and workflow automation.',
    ],
    stack: ['PHP', 'Node.js', 'Firebase', 'Google Calendar', 'MailerLite'],
  },
  {
    title: 'PHP Developer (Backend Developer)',
    company: 'Appentus Technologies Pvt Ltd',
    duration: 'Nov 2022 – Jan 2024',
    description:
      'Worked on backend services for several web applications, including platforms for logistics, e-commerce, and casinos. Focused on user management, payment systems, and third-party API integrations.',
    responsibilities: [
      'Developed modules for Ramatou Express, a product pick-and-drop platform, with user management, coupon offers, and payment processing.',
      'Worked on Web Casino, integrating third-party APIs for game management and implementing features for betting calculations and activity monitoring.',
      'Contributed to Kedas CRM and e-commerce platform, supporting multi-role access and subscription-based permissions for loan service management.',
    ],
    stack: ['PHP', 'Laravel', 'MySQL', 'API Integrations', 'Slotegrator APIs'],
  },
  {
    title: 'Developer (Intern)',
    company: 'Mallow Technologies Pvt Ltd',
    duration: 'Jul 2022 – Oct 2022',
    description:
      'Gained hands-on experience in web development during an internship, assisting with the development of multiple projects and contributing to various aspects of front-end and back-end functionalities.',
    responsibilities: [
      'Worked on smaller internal projects, collaborating with senior developers to enhance backend features and improve front-end interfaces.',
      'Focused on improving user experience through the development of interactive components and optimizing API integration for better performance.',
    ],
    stack: ['PHP', 'JavaScript', 'MySQL', 'Laravel'],
  },
];

function Experience() {
  return (
    <section id="experiences" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl font-bold mb-10 text-blue-600 text-center">Experience</h2>
        <div className="space-y-6">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="border p-4 rounded-lg shadow hover:shadow-xl transition duration-300 ease-in-out"
            >
              <h3 className="text-lg font-semibold mb-1 text-blue-600">{exp.title}</h3>
              <h4 className="text-sm font-medium mb-1 text-gray-600">{exp.company}</h4>
              <p className="mb-2 text-xs text-gray-500 italic">{exp.duration}</p>
              <p className="mb-3 text-sm text-gray-700">{exp.description}</p>
              <div className="mb-3">
                <strong className="text-sm">Responsibilities:</strong>
                <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-gray-600">
                <strong>Technologies:</strong> {exp.stack.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
