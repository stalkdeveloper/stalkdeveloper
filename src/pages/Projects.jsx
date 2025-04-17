import React from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Developed a scalable multi-vendor e-commerce system featuring dynamic product listings, shopping cart, order management, coupon systems, and secure payment gateway integration (Stripe, PayPal). Included admin and seller dashboards for full control.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT'],
  },
  {
    title: 'Casino Web App (Real-time Gaming)',
    description:
      'Built an interactive casino-style gaming platform with live game rooms, real-time betting logic, and secure wallet integration. Focused on game logic, socket communication, and smooth user experience across devices.',
    stack: ['Next.js', 'Socket.IO', 'Node.js', 'Firebase', 'Tailwind'],
  },
  {
    title: 'Business CRM / Admin Dashboards',
    description:
      'Developed multiple internal business CRMs with role-based access, sales and lead management, invoice generation, and real-time reporting features. Also built dashboards for data visualization and user management.',
    stack: ['React', 'Laravel', 'MySQL', 'Chart.js', 'JWT'],
  },
  {
    title: 'Ride-sharing / Booking App (Rapido-like)',
    description:
      'Engineered a real-time ride-booking system with user and driver modules, geo-tracking, distance-based pricing, and status management (available, booked, en route). Included Firebase push notifications and payment handling.',
    stack: ['React Native', 'Firebase', 'Google Maps API', 'Node.js'],
  },
  {
    title: 'Trading & Portfolio Tracker App',
    description:
      'Built a trading insights and portfolio management platform that syncs with market data APIs, supports watchlists, trade logs, profit/loss tracking, and personalized alerts.',
    stack: ['Next.js', 'REST APIs', 'Chart.js', 'Tailwind CSS', 'MongoDB'],
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-10 text-blue-600 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="border p-5 rounded-lg shadow hover:shadow-xl transition duration-300 ease-in-out"
            >
              <h3 className="text-lg font-semibold mb-2 text-blue-600">{project.title}</h3>
              <p className="mb-3 text-sm text-gray-700">{project.description}</p>
              <p className="mb-1 text-xs text-gray-600">
                <strong>Tech Stack:</strong> {project.stack.join(', ')}
              </p>
              <p className="text-xs italic text-gray-400">*Links withheld due to NDA / company policy</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
