import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to an API or email)
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Clear form after submission
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
            <p>Thank you for your message! I'll get back to you soon.</p>
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
            className="px-4 py-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="px-4 py-2 rounded-md border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
