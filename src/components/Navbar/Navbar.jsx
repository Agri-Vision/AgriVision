import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../Navbar/Web Logo 08.png'; 
import backgroundVideo from './background.mp4'; // Add your video file path

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`fixed top-0 left-0 w-full flex justify-between items-center p-6 transition duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-transparent'} z-50`}>
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-20 w-25" />
        </div>
        <div className="flex space-x-6">
          <a href="#home" className="text-white hover:text-green-500 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-green-500 transition duration-300">Home</a>
          <a href="#projectScope" className="text-white hover:text-green-500 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-green-500 transition duration-300">Project Scope</a>
          <a href="#milestones" className="text-white hover:text-green-500 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-green-500 transition duration-300">Milestones</a>
          <div className="relative group">
            <a href="#documents" className="text-white hover:text-green-500 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-green-500 transition duration-300">Documents</a>
            <div className="absolute hidden group-hover:block bg-white text-gray-700 py-2 mt-2 w-32 shadow-lg">
              <a href="#doc1" className="block px-4 py-2 hover:bg-gray-100">Doc 1</a>
              <a href="#doc2" className="block px-4 py-2 hover:bg-gray-100">Doc 2</a>
            </div>
          </div>
          <a href="#aboutUs" className="text-white hover:text-green-500 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-green-500 transition duration-300">About Us</a>
          <a href="#contactUs" className="text-white hover:text-green-500 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-green-500 transition duration-300">Contact Us</a>
        </div>
      </nav>
      <div className="relative h-screen w-full bg-cover bg-center">
        <video className="absolute inset-0 w-full h-full object-cover z-0" src={backgroundVideo} autoPlay loop muted playsInline></video>
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div> {/* Increased opacity for better contrast */}
        <div className="flex flex-col items-center justify-center h-full text-center px-4 z-20">
          <h1 className="text-white text-4xl md:text-5xl lg:text-4xl font-bold mb-4  z-10">THE MOST POWERFUL FIELD ANALYTICS TOOL FOR PRECISION AGRICULTURE</h1>
          <p className="text-white text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto  z-10">Description</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-white rounded-t-full z-20"></div>
      </div>
    </div>
  );
};

export default NavBar;
