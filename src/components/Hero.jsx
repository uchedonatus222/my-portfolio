import React from 'react';
import profileImage from '../assets/profile.jpg'; 

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-4">
        {/* Image */}
        <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
          <img 
            src={profileImage} 
            alt="Uche Donatus" 
            className="w-full h-full rounded-full object-cover border-4 border-cyan-400 shadow-lg shadow-cyan-400/20 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl" 
          />
        </div>
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 text-glow">
            <span className="text-cyan-400 block">Hello, I'm</span>
            Uche Donatus
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300">A Creative Frontend Developer</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;