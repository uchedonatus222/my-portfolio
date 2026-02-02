import React from 'react';
import profileImage from '../assets/profile2.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-cyan-400 text-glow">About</span> Me
        </h2>

        {/* Glassmorphism Card */}
        <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
          
          {/* Image */}
          <div className="md:w-1/3 flex justify-center">
            <img 
              src={profileImage} // TODO: Replace with your actual image
              alt="" 
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-cyan-400 shadow-cyan-400/20 shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              I'm a passionate and results-driven web developer with a flair for creating modern, responsive, and user-friendly web applications. With a strong foundation in front-end technologies, I specialize in bringing ideas to life with clean and efficient code.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My goal is to build things that are not only beautiful and intuitive but also performant and accessible to everyone. When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;