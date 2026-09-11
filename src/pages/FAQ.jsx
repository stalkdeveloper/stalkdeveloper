import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

function FAQ({ isDark }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in MERN stack (MongoDB, Express.js, React, Node.js), along with Laravel, PHP, MySQL, and modern frontend technologies like Tailwind CSS. I also have experience with Next.js, TypeScript, and various cloud platforms like AWS.',
    },
    {
      question: 'What is your current role?',
      answer: 'I am currently working as a MERN Stack Developer at Helpful Insight Private Limited, developing scalable web applications and real-time systems. I also work as a freelance developer and founder of uShortify.',
    },
    {
      question: 'What kind of projects have you built?',
      answer: 'I have built e-commerce platforms, real-time gaming systems, business CRMs, ride-sharing applications, trading platforms, marketplace solutions, logistics platforms, and many more web applications.',
    },
    {
      question: 'Do you work on both frontend and backend?',
      answer: 'Yes! I am a full-stack developer with strong expertise in both frontend (React, Next.js, Tailwind CSS) and backend (Node.js, Laravel, Express, PHP). I can handle the entire development lifecycle from database design to deployment.',
    },
    {
      question: 'Are you open to freelance or remote opportunities?',
      answer: 'Absolutely! I am open to freelance projects, part-time contracts, and full-time remote positions. I love collaborating with clients from around the world and bringing their ideas to life.',
    },
    {
      question: 'What third-party integrations have you worked with?',
      answer: 'I have integrated payment gateways (Stripe, PayPal, Razorpay), trading APIs (Binance, Bybit), Firebase, Google Maps API, Google Analytics, WebSockets, and various social media APIs.',
    },
    {
      question: 'What is your development process?',
      answer: 'My development process includes: 1) Requirements gathering and analysis, 2) Architecture and database design, 3) Development with regular updates, 4) Testing and QA, 5) Deployment and monitoring, 6) Post-launch support and maintenance.',
    },
    {
      question: 'How do you ensure code quality?',
      answer: 'I follow best practices including code reviews, testing (unit and integration), continuous integration, version control with Git, and following coding standards and design patterns.',
    },
    {
      question: 'What is uShortify?',
      answer: 'uShortify is a link management platform for shortening, branding, and tracking links. It includes custom aliases, live click tracking, QR codes, advanced analytics, password protection, link expiration, and team collaboration.',
    },
    {
      question: 'How can I contact you for a project?',
      answer: 'You can reach out through the contact form on this website, email me at sunnyk.kongu@gmail.com, or connect with me on LinkedIn. I typically respond within 24 hours.',
    }
  ];

  return (
    <section id="faq" className={`py-8 transition-colors duration-500 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className={`text-sm font-medium px-4 py-2 rounded-full ${
              isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
            }`}>
              ❓ Frequently Asked Questions
            </span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Got Questions?
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${
            isDark ? 'bg-gray-600' : 'bg-gray-300'
          }`}></div>
          <p className={`mt-4 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Everything you need to know about my work and services
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-md border overflow-hidden transition-all duration-300 animate-fadeInUp ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
              }`}
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-opacity-50 transition-colors"
              >
                <span className={`text-base font-semibold ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <HiChevronUp className={isDark ? 'text-gray-400 flex-shrink-0' : 'text-gray-600 flex-shrink-0'} size={20} />
                ) : (
                  <HiChevronDown className={isDark ? 'text-gray-500 flex-shrink-0' : 'text-gray-400 flex-shrink-0'} size={20} />
                )}
              </button>
              <div className={`transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;