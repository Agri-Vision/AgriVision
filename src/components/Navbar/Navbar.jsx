import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../Navbar/Web Logo 08.png';
import backgroundVideo from './background.mp4';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

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

  const handleDropdownClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleLinkClick = () => {
    // Set the dropdown to false to hide it after a link is clicked
    setIsDropdownVisible(false);
  };

  return (
    <div>
      <nav className={`fixed top-0 left-0 w-full flex justify-between items-center p-6 transition duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-transparent'} z-50`}>
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-20 w-25" />
        </div>
        <div className="flex space-x-6">
          <a href="#home" className="text-white hover:text-green-500 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-green-500 transition duration-300">Home</a>
          <div className="relative group">
            <button onClick={handleDropdownClick} className="text-white hover:text-green-500 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-green-500 transition duration-300 focus:outline-none">
              Domain
            </button>
            {isDropdownVisible && (
              <div className="absolute bg-white text-gray-700 py-2 mt-2 w-56 shadow-lg">
                <a href="#literatureSurvey" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100">Literature Survey</a>
                <a href="#researchGap" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100">Research Gap</a>
                <a href="#researchProblem" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100">Research Problem</a>
                <a href="#researchObjectives" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100">Research Objectives</a>
                <a href="#methodology" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100">Methodology</a>
                <a href="#technologies" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100">Technologies and Tools</a>
              </div>
            )}
          </div>
          <a href="#milestones" className="text-white hover:text-green-500 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-green-500 transition duration-300">Milestones</a>
          <a href="#documents" className="text-white hover:text-green-500 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-green-500 transition duration-300">Documents</a>
          <a href="#presentations" className="text-white hover:text-green-500 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-green-500 transition duration-300">Presentations</a>
          <a href="#aboutUs" className="text-white hover:text-green-500 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-green-500 transition duration-300">About Us</a>
          <a href="#gallery" className="text-white hover:text-green-500 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-green-500 transition duration-300">Gallery</a>
          <a href="#contactUs" className="text-white hover:text-green-500 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-green-500 transition duration-300">Contact Us</a>
        </div>
      </nav>
      <div className="relative h-screen w-full bg-cover bg-center" id="home">
        <video className="absolute inset-0 w-full h-full object-cover z-0" src={backgroundVideo} autoPlay loop muted playsInline></video>
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div> {/* Increased opacity for better contrast */}
        <div className="flex flex-col items-center justify-center h-full text-center px-4 z-20">
          <h1 className="text-white text-4xl md:text-xl lg:text-4xl font-bold mb-4 z-10">ADVANCED TEA PLANTATION MONITORING SYSTEM USING MULTISPECTRAL DRONE IMAGERY AND IOT</h1>
          <p className="text-white text-lg md:text-xl lg:text-xl max-w-4xl mx-auto z-10 text-justify">
          "AgriVision offers an all-in-one solution for plantation owners and managers, 
            combining advanced drone imaging, IoT data, and AI-driven insights. Optimize your resources, increase productivity, and boost profitability with real-time field analytics
             tailored for precision agriculture. Empower your business with AgriVision's cutting-edge technology to stay ahead in the competitive agricultural industry."
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-white rounded-t-full z-20"></div>
      </div>
    </div>
  );
};

export default NavBar;
