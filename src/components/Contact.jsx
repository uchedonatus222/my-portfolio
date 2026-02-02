import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Get in <span className="text-cyan-400 text-glow">Touch</span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-800/20 backdrop-blur-xl rounded-2xl shadow-lg p-8 md:p-12">
          
          {/* Contact Information */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Contact Info</h3>
            <p className="text-lg text-gray-300 mb-2">
              Have a project in mind or just want to say hello? Feel free to reach out.
            </p>
            <div className="mt-4 space-y-4">
              <p className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:uche.donatus@example.com" className="text-gray-300 hover:text-cyan-400 transition-colors">donatusuche222@gmail.com</a>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"></path></svg>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">LinkedIn Profile</a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form>
            <div className="mb-5">
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
            </div>
            <div className="mb-5">
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
            </div>
            <div className="mb-5">
              <textarea 
                placeholder="Your Message"
                rows="5" 
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-cyan-500/20
                           transform transition-all duration-300 hover:bg-cyan-600 hover:scale-105 hover:shadow-cyan-500/40"
              >
                Send Message
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;