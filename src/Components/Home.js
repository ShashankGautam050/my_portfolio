import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaDownload } from 'react-icons/fa';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.section
        id="home"
        className="flex items-center justify-center min-h-screen py-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white px-4 sm:px-8 md:px-12 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="text-center max-w-4xl mx-auto space-y-6 relative z-10">
          {/* Header */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? (
              <motion.span
                className="inline-block"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                👋
              </motion.span>
            ) : (
              'Hi'
            )}
            , I&apos;m
            <span className="text-yellow-300 hover:text-white transition-colors duration-300">
              {' '}
              Shashank Gautam
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-100 hover:text-yellow-300 transition-colors duration-300">
            Associate Software Developer (iOS) @{' '}
            <span className="text-yellow-300">Ksquaretech Consulting</span>
            <br />
            <span className="text-sm sm:text-base text-gray-300">(Sept 2024 – Present)</span>
            <br />
            Building sleek, high-performance iOS apps with Swift & SwiftUI. <br />
            Exploring full-stack technologies: React, Node.js, and more.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {[
              'Swift',
              'SwiftUI',
              'React',
              'JavaScript',
              'Node.js',
              'MongoDB',
              'Spring Boot',
              'REST APIs',
              'Git & GitHub',
            ].map((skill) => (
              <span
                key={skill}
                className="bg-white text-black px-4 py-2 rounded-full font-medium text-sm md:text-base shadow hover:scale-110 hover:bg-yellow-300 transition-transform duration-200"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-6 mt-8 flex-wrap">
           <a
  href="/FAANGPath_Simple_Template.pdf"
  download="Shashank_Gautam_Resume.pdf" // this controls the downloaded file name
 className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-3 rounded-full transition-all duration-300 shadow-lg"
>
  <FaDownload /> Download Resume
</a>

            <a
              href="https://www.linkedin.com/in/shashank-gautam-27852722a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white text-white hover:bg-white hover:text-black font-semibold px-5 py-3 rounded-full transition-all duration-300"
            >
              <FaLinkedin /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
