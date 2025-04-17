import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }

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
      access_key: 'fcf94262-17ed-42a6-9dfd-683bb2922d91',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
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
      console.error('Error sending form:', error);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Contact</h2>
        <p className="mb-5 text-sm text-gray-700">
          Let's connect! Feel free to drop me an email or reach out on LinkedIn.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          {/* Name Field */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className={`peer border rounded px-2 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                errors.name && isSubmitted ? 'border-red-500' : 'border-slate-400'
              }`}
              value={formData.name}
              onChange={handleChange}
            />
            {/* Show error only if submitted and error exists */}
            {isSubmitted && errors.name && (
              <p className="text-red-700 font-light text-xs mt-0.5">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={`peer border rounded px-2 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                errors.email && isSubmitted ? 'border-red-500' : 'border-slate-400'
              }`}
              value={formData.email}
              onChange={handleChange}
            />
            {isSubmitted && errors.email && (
              <p className="text-red-700 font-light text-xs mt-0.5">
                {errors.email}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Message"
              className={`peer border rounded px-2 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                errors.message && isSubmitted ? 'border-red-500' : 'border-slate-400'
              }`}
              value={formData.message}
              onChange={handleChange}
            />
            {isSubmitted && errors.message && (
              <p className="text-red-700 font-light text-xs mt-0.5">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm cursor-pointer"
          >
            Send
          </button>
        </form>

        {/* Status message after submit */}
        {status && (
          <p
            className={`mt-4 text-sm ${
              status.includes('successfully') ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
}

export default Contact;
