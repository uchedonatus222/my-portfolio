import React from 'react';

const skills = [
  'React', 
  'JavaScript (ES6+)', 
  'Tailwind CSS', 
  'HTML5 & CSS3', 
  'Vite',
  'Node.js', 
  'Express', 
  'MongoDB', 
  'Figma', 
  'Git & GitHub'
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-cyan-400 text-glow">Skills</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-gray-800/30 backdrop-blur-sm text-cyan-300 py-3 px-6 rounded-full text-base font-medium
                           border border-gray-700 shadow-lg
                           transform transition-all duration-300 hover:scale-105 hover:bg-cyan-400/20 hover:text-white hover:shadow-cyan-400/30"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;