import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center p-4 text-white">
        <h2 className="text-xl text-cyan-400 font-light tracking-wider text-glow">My Portfolio</h2>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#about" className="text-lg font-medium text-gray-300 hover:text-cyan-400 hover:text-glow transition-all duration-300">About</a></li>
            <li><a href="#skills" className="text-lg font-medium text-gray-300 hover:text-cyan-400 hover:text-glow transition-all duration-300">Skills</a></li>
            <li><a href="#experience" className="text-lg font-medium text-gray-300 hover:text-cyan-400 hover:text-glow transition-all duration-300">Experience</a></li>
            <li><a href="#projects" className="text-lg font-medium text-gray-300 hover:text-cyan-400 hover:text-glow transition-all duration-300">Projects</a></li>
            <li><a href="#contact" className="text-lg font-medium text-gray-300 hover:text-cyan-400 hover:text-glow transition-all duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

