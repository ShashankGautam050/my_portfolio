import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio website built with React and Tailwind CSS.',
      link: 'https://yourportfolio.com',
      github: 'https://github.com/yourusername/portfolio',
    },
    {
      name: 'Quizzy - Quiz App',
      description: 'A full-stack quiz application using Spring Boot and React.',
      link: 'https://quizzy.com',
      github: 'https://github.com/yourusername/quizzy',
    },
    {
      name: 'Unit Converter',
      description: 'An Android app to convert units for speed, mass, and temperature.',
      link: 'https://play.google.com/store/apps/details?id=com.yourapp',
      github: 'https://github.com/yourusername/unit-converter',
    },
  ];

  return (
    <section id="projects" className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex items-center justify-start space-x-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-yellow-500 underline hover:text-yellow-400"
                >
                  Live Demo
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 underline hover:text-blue-400"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
