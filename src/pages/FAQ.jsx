import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const faqs = [
  {
    question: 'What technologies do you specialize in?',
    answer:
      'MERN stack, PHP (Laravel, CodeIgniter), Python (Django), MySQL, MongoDB, REST APIs — I build full, scalable solutions.',
  },
  {
    question: 'Do you work on both frontend and backend?',
    answer:
      'Yes. From dynamic React/Next.js UIs to backend logic, APIs, auth systems, and deployment — I cover it all.',
  },
  {
    question: 'Have you built e-commerce platforms?',
    answer:
      'I’ve built custom e-commerce platforms using Laravel, integrated carts, payment gateways, and product management dashboards.',
  },
  {
    question: 'Are you open to freelance or remote roles?',
    answer:
      'Absolutely. I’m open to freelance gigs, part-time contracts, or remote positions — as long as it’s a good fit.',
  },
  {
    question: 'Can you integrate third-party services or APIs?',
    answer:
      'Yes — I’ve integrated a wide range of third-party services including Stripe, PayPal, Wave Payments for secure transactions; Firebase, Google APIs (Maps, Auth, Calendar), ChatGPT, and MailerLite for CRM and communication workflows. Every integration is handled with a focus on security, reliability, and a seamless user experience.',
  },
  {
    question: 'Have you implemented Two-Factor Authentication (2FA)?',
    answer:
      'Yes, I’ve implemented 2FA using email, SMS, and authenticator apps (like Google Authenticator or Authy), typically through services like Firebase, Twilio, or custom logic with time-based one-time passwords (TOTP). It’s a key part of the authentication flow for apps requiring added security.',
  }  
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-3">
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center text-left text-sm text-gray-800 font-medium hover:text-blue-600 transition-colors"
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <HiChevronUp className="text-blue-600" size={20} />
                ) : (
                  <HiChevronDown className="text-gray-500" size={20} />
                )}
              </button>
              <div
                className={`mt-2 text-gray-600 text-xs transition-all duration-200 ease-in-out ${
                  activeIndex === index ? 'block' : 'hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
