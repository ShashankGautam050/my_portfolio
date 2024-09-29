import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio website built with React and Tailwind CSS.',
      github: 'https://github.com/ShashankGautam050/my_portfolio',
    },
    {
      name: 'Notes App',
      description: 'NotesApp offers a seamless note-taking experience using MVVM architecture, LiveData, and Room for efficient task management and idea   jotting.',
      github: 'https://github.com/ShashankGautam050/notesapp',
    },
    {
      name: 'Unit Converter',
      description: 'An Android app to convert units for speed, mass, and temperature.',
      github: 'https://github.com/ShashankGautam050/ConverterApp',
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
