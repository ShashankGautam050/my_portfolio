import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="text-6xl font-bold text-indigo-600"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        whileHover={{
          scale: 1.2, // Scale up on hover
          rotate: [0, 10, -10, 0], // Wobble effect on hover
          transition: { duration: 0.5, repeat: Infinity } // Repeat wobble animation
        }}
      >
        S
      </motion.div>
      <motion.div
        className="text-6xl font-bold text-green-600"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: -360 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        whileHover={{
          scale: 1.2, // Scale up on hover
          rotate: [0, -10, 10, 0], // Wobble effect on hover
          transition: { duration: 0.5, repeat: Infinity } // Repeat wobble animation
        }}
      >
        G
      </motion.div>
    </div>
  );
};

export default AnimatedLogo;
