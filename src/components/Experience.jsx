import React from 'react';

const experiences = [
  {
    year: '2022 - Present',
    title: 'Senior Frontend Developer',
    company: 'Innovatech Solutions',
    description: 'Leading the development of cutting-edge web applications using React, Next.js, and modern frontend technologies.',
  },
  {
    year: '2020 - 2022',
    title: 'Frontend Developer',
    company: 'Creative Minds Agency',
    description: 'Developed and maintained responsive websites and e-commerce solutions for a diverse range of clients.',
  },
  {
    year: '2018 - 2020',
    title: 'Junior Web Developer',
    company: 'Tech Starters Inc.',
    description: 'Assisted in building and testing user interfaces, gaining foundational skills in HTML, CSS, and JavaScript.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-20">
          Work <span className="text-cyan-400 text-glow">Experience</span>
        </h2>
        <div className="relative">
          {/* The vertical timeline bar */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`mb-16 flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className={`bg-gray-800/30 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-700 transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-400/20 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <p className="text-cyan-400 font-semibold mb-1">{exp.year}</p>
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-gray-400 italic mb-3">{exp.company}</p>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
              {/* The timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full z-10 border-4 border-gray-900"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;