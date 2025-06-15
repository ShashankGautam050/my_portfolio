      import React from 'react';

      const Projects = () => {
        const projects = [
          {
            name: 'Portfolio Website',
            description: 'A personal portfolio website built with React and Tailwind CSS.',
            type: 'web',
            link: 'https://github.com/ShashankGautam050/my_portfolio',
          },
          {
            name: 'Get Crew - Oil and Gas Jobs',
            description: "The world's only app specially designed for Oil & Gas crew to find the next job.",
            type: 'app',
            link: 'https://apps.apple.com/in/app/get-crew-oil-gas-jobs/id1528286788', // Replace with actual App Store link
          },
          {
            name: 'PropEase',
            description: 'PropEase is your all-in-one real estate companion, simplifying buying, selling, and managing properties with ease from your phone.',
            type: 'app',
            link: 'https://apps.apple.com/in/app/propease-app/id6740812565',
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
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline hover:text-blue-400"
                      >
                        {project.type === 'app' ? 'Go to App' : 'Go to Website'}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      };

      export default Projects;
