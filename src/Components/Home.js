import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import * as THREE from 'three';

const Home = () => {
  // State to handle hover effect
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threejs-background').appendChild(renderer.domElement);

    // Create a grid of cubes
    const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const cubes = [];

    for (let i = 0; i < 100; i++) {
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.x = (Math.random() - 0.5) * 20;
      cube.position.y = (Math.random() - 0.5) * 20;
      cube.position.z = (Math.random() - 0.5) * 20;
      cubes.push(cube);
      scene.add(cube);
    }

    // Add lights to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate cubes for animation
      cubes.forEach((cube, index) => {
        // Continuous rotation
        cube.rotation.x += 0.01; // Rotate on X axis
        cube.rotation.y += 0.01; // Rotate on Y axis

        // Optional: add a floating effect
        const floatSpeed = 0.5;
        cube.position.y += Math.sin(Date.now() * 0.001 + index * floatSpeed) * 0.01; // Up and down movement

        // Keep cubes within view by resetting their position
        if (cube.position.y > 10) cube.position.y = -10;
        if (cube.position.y < -10) cube.position.y = 10;
        if (cube.position.x > 10) cube.position.x = -10;
        if (cube.position.x < -10) cube.position.x = 10;
        if (cube.position.z > 10) cube.position.z = -10;
        if (cube.position.z < -10) cube.position.z = 10;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      const background = document.getElementById('threejs-background');
      if (background) {
        background.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <div id="threejs-background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
      
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
            {['JavaScript', 'React', 'Node.js', 'MongoDB', 'Spring Boot', 'RESTful APIs'].map(skill => (
              <span key={skill} className="bg-white text-black px-4 py-2 rounded-full font-medium text-sm md:text-base shadow-md transition-transform transform hover:scale-110 hover:bg-yellow-400">
                {skill}
              </span>
            ))}
          </div>

          {/* Call-to-Action Button */}
          <Link
            to="projects" // Target the "projects" section
            smooth={true} // Enable smooth scrolling
            duration={500} // Scroll duration in milliseconds
            className="mt-8 inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full text-lg font-semibold transition-transform transform duration-300 shadow-md hover:scale-105"
          >
            View My Work
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
