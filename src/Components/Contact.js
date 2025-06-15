import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'your_service_id',      // 🔁 Replace this with your actual EmailJS service ID
        'your_template_id',     // 🔁 Replace this with your actual EmailJS template ID
        formData,
        'your_public_key'       // 🔁 Replace this with your actual EmailJS public key
      )
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setError(null);
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setError('Something went wrong. Please try again later.');
      });
  };

  return (
    <motion.section
      id="contact"
      className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4 sm:px-8 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="max-w-lg mx-auto text-center p-6 rounded-lg bg-gray-800 bg-opacity-70 shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Me</h2>
        <p className="mb-6 text-lg">I'd love to hear from you! Please fill out the form below.</p>

        {submitted && (
          <div className="bg-green-500 p-4 mb-4 rounded-md">
            <p>✅ Message sent! I’ll get back to you soon.</p>
          </div>
        )}

        {error && (
          <div className="bg-red-500 p-4 mb-4 rounded-md">
            <p>⚠️ {error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="px-4 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full text-lg font-medium transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
