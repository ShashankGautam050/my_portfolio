import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaUserGraduate, FaHandsHelping, FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <motion.section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300 py-12 px-4 md:px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        {/* Title Section */}
        <h2 className="text-5xl font-extrabold text-gray-900 mb-12 tracking-wide text-center">
          About Me
        </h2>

        {/* About Content */}
        <div className="max-w-5xl bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <FaLaptopCode className="text-6xl text-indigo-500 mb-4 mx-auto" />
            <p className="text-xl text-gray-800 mb-4">
              Hi, I'm <span className="font-semibold">Shashank Gautam</span>, an <span className="font-semibold">Associate Software Engineer</span> with a passion for developing efficient and scalable software solutions. I have experience in full-stack development and specialize in technologies like <span className="font-semibold">JavaScript, React, Node.js, Spring Boot</span>, and <span className="font-semibold">MongoDB</span>. I enjoy solving complex problems and continuously improving my skills to build impactful software applications.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
            {/* Skillset Section */}
            <div className="flex flex-col items-center">
              <FaUserGraduate className="text-5xl text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Lifelong Learner</h3>
              <p className="text-gray-700 text-center px-4 md:px-0">
                I am passionate about learning new programming languages and frameworks, staying up-to-date with the latest industry trends to deliver innovative software solutions.
              </p>
            </div>

            {/* Collaboration Section */}
            <div className="flex flex-col items-center">
              <FaHandsHelping className="text-5xl text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Team Player</h3>
              <p className="text-gray-700 text-center px-4 md:px-0">
                I am a proactive team player who enjoys collaborating with others to create high-quality software and enhance productivity through efficient teamwork.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <motion.button
            onClick={toggleModal}
            className="mt-12 inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </motion.button>
        </div>
      </motion.section>

      {/* Modal for Social Media Handles */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Connect with Me</h3>
            <p className="text-gray-700 mb-6">You can find me on the following platforms:</p>
            <div className="flex justify-around items-center mb-6">
              <a href="https://www.linkedin.com/in/shashank-gautam-27852722a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-500 hover:text-blue-700">
                <FaLinkedin />
              </a>
              <a href="https://github.com/ShashankGautam050" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-800 hover:text-gray-900">
                <FaGithub />
              </a>
              <a href="mailto:your-email@example.com" className="text-3xl text-red-500 hover:text-red-700">
                <FaEnvelope />
              </a>
              <a href="https://www.instagram.com/shashank_gautam0505?igsh=YzE0YXY4MG5kY21s" target="_blank" rel="noopener noreferrer" className="text-3xl text-pink-500 hover:text-pink-700">
                <FaInstagram />
              </a>
            </div>
            <button
              onClick={toggleModal}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
