import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Github Ultimate : Master Git and Github - Begineer to Expert',
      organization: 'Udemy',
      date: 'September 2024',
      link: 'https://www.linkedin.com/posts/shashank-gautam-27852722a_github-ultimate-master-git-and-github-beginner-activity-7238102275603226624-Xj_H?utm_source=share&utm_medium=member_ios', // Add your certificate link
    },
    {
      title: 'Android Jetpack Compose - From Zero to Hero',
      organization: 'Udemy',
      date: 'July 2024',
      link: 'https://www.linkedin.com/posts/shashank-gautam-27852722a_androiddevelopment-jetpackcompose-certification-activity-7215593585818095616-W-WO?utm_source=share&utm_medium=member_ios',
    },
  ];

  return (
    <section id="certifications" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-1">{cert.organization}</p>
              <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 mt-4 inline-block"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
