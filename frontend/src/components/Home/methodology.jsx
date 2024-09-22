import React, { useState } from 'react';
import './methodology.css'; // Your CSS file

import Systemdiagram from './Img/Systemdiagrams.png'; 

const Methodology = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle mouse hover
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="methodology-container mt-10">
      <div className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Methodology</h2>
        <div className="image-wrapper">
          <img
            src={Systemdiagram}
            alt="System"
            className={`transition-all duration-300 ease-in-out ${isHovered ? 'fullscreen' : 'normal'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </div>
  );
};

export default Methodology;
