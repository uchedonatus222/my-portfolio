import React from 'react';
import project1Image from '../assets/project1.png';
import project2Image from '../assets/profile3.jpg';
import project3Image from '../assets/profile4.jpg';

const projects = [
  {
    title: 'Project One',
    description: 'A modern and sleek web application for task management.',
    imageUrl: project1Image,
    link: 'https://www.behance.net/gallery/131606645/Task-Management-Web-App',
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform with a focus on user experience.',
    imageUrl: project2Image,
    link: 'https://www.18thdigitech.com/blog/importance-of-user-experience-design-in-ecommerce/',
  },
  {
    title: 'Project Three',
    description: 'A portfolio website for a creative professional.',
    imageUrl: project3Image,
    link: 'https://medium.com/@56pixels/100-best-portfolio-website-templates-4dab6387f00f',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-cyan-400 text-glow">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800/30 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-400/20"
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  className="inline-block bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors font-semibold"
                >
                  View Project
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