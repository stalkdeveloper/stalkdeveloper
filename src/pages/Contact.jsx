import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

function Contact({ isDark }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
    setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const payload = {
      access_key: 'fcf94262-17ed-42a6-9dfd-683bb2922sd91',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (data.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setIsSubmitted(false);
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className={`py-20 transition-colors duration-500 ${
      isDark ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className={`text-sm font-medium px-4 py-2 rounded-full ${
              isDark ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600 shadow-sm'
            }`}>
              📬 Get In Touch
            </span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Let's Work Together
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${
            isDark ? 'bg-gray-600' : 'bg-gray-300'
          }`}></div>
          <p className={`mt-4 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Have a project in mind? Let's discuss and bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-fadeInLeft">
            <div className={`rounded-2xl shadow-lg p-6 border ${
              isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-100'
            }`}>
              <h3 className={`text-xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className={`text-xs ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Email
                    </p>
                    <a href="mailto:sunnyk.kongu@gmail.com" className={`transition-colors ${
                      isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                    }`}>
                      sunnyk.kongu@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className={`text-xs ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Phone
                    </p>
                    <a href="tel:+919123456789" className={`transition-colors ${
                      isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                    }`}>
                      +91 9123456789
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className={`text-xs ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Location
                    </p>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                      Jaipur, Rajasthan, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`rounded-2xl shadow-lg p-6 border ${
              isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-100'
            }`}>
              <h3 className={`text-xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Connect With Me
              </h3>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/stalkdeveloper" target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
                  isDark ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}>
                  <FaLinkedin size={20} />
                </a>
                <a href="https://github.com/stalkdeveloper" target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
                  isDark ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}>
                  <FaGithub size={20} />
                </a>
                <a href="https://www.instagram.com/stalkvlog" target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
                  isDark ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}>
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`rounded-2xl shadow-lg p-6 border animate-fadeInRight ${
            isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-100'
          }`}>
            <h3 className={`text-xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                    isDark
                      ? `bg-gray-800 border-gray-700 text-white focus:ring-gray-500 ${errors.name && isSubmitted ? 'border-red-500' : ''}`
                      : `bg-white border-gray-300 text-gray-900 focus:ring-gray-400 ${errors.name && isSubmitted ? 'border-red-500' : ''}`
                  }`}
                />
                {isSubmitted && errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                    isDark
                      ? `bg-gray-800 border-gray-700 text-white focus:ring-gray-500 ${errors.email && isSubmitted ? 'border-red-500' : ''}`
                      : `bg-white border-gray-300 text-gray-900 focus:ring-gray-400 ${errors.email && isSubmitted ? 'border-red-500' : ''}`
                  }`}
                />
                {isSubmitted && errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all resize-none ${
                    isDark
                      ? `bg-gray-800 border-gray-700 text-white focus:ring-gray-500 ${errors.message && isSubmitted ? 'border-red-500' : ''}`
                      : `bg-white border-gray-300 text-gray-900 focus:ring-gray-400 ${errors.message && isSubmitted ? 'border-red-500' : ''}`
                  }`}
                />
                {isSubmitted && errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className={`w-full py-3 font-semibold rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-800 text-white hover:bg-gray-900'
                }`}
              >
                Send Message
              </button>
            </form>
            {status && (
              <p className={`mt-4 text-sm text-center ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;