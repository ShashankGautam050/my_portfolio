import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Home = () => {
  // State to handle hover effect
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <motion.section
        id="home"
        className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-4 sm:px-8 md:px-12 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="text-center max-w-4xl mx-auto space-y-6 relative z-10">
          {/* Introduction with Hover Effect */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight relative"
            onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on hover
            onMouseLeave={() => setIsHovered(false)} // Set isHovered to false when not hovered
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
            <span className="text-yellow-300 hover:text-white transition-colors duration-300"> Shashank Gautam</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed hover:text-yellow-300 transition-colors duration-300">
            I&apos;m an <span className="text-yellow-300 hover:text-white transition-colors duration-300">Associate Software Engineer</span> passionate about building efficient and scalable software solutions. I specialize in:
          </p>
          
          {/* Keywords/Skills */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {['JavaScript', 'React', 'Node.js', 'MongoDB', 'Spring Boot', 'RESTful APIs','Kotlin','Android'].map(skill => (
              <span key={skill} className="bg-white text-black px-4 py-2 rounded-full font-medium text-sm md:text-base shadow-md transition-transform transform hover:scale-110 hover:bg-yellow-400">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
