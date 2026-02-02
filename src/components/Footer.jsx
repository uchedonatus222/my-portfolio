import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto text-center text-gray-400">
        <div className="mb-4">
          <a href="#" className="mx-4 hover:text-indigo-400 transition-colors">LinkedIn</a>
          <a href="#" className="mx-4 hover:text-indigo-400 transition-colors">GitHub</a>
          <a href="#" className="mx-4 hover:text-indigo-400 transition-colors">Twitter</a>
        </div>
        <p>&copy; 2026 UCHE DONATUS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;