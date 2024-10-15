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
    <div className="methodology-container mt-10 justify-center items-center" id="methodology">
      <div className="mt-[60px] text-2xl text-center mb-8 capitalize text-[color:#324d67] mb-3 font-semibold">
        <h2 className="text-3xl font-bold mb-8">  METHODOLOGY</h2>
        <div className="image-wrapper">
          <img
            src={Systemdiagram}
            alt="System"
            className={`transition-all duration-300 ease-in-out ${isHovered ? 'fullscreen' : 'normal'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>

        <div className="flex flex-wrap justify-center px-40 mt-10">
      <p className="text-lg text-justify">
      The tea plantation monitoring system integrates multispectral drone imagery, IoT sensors, and machine learning models to provide 
      real-time insights for yield estimation, stress detection, and disease identification. The system begins by collecting data from two 
      primary sources: drones equipped with multispectral cameras capture images across multiple spectral bands, while IoT devices monitor 
      environmental factors such as soil moisture, temperature, humidity, UV radiation, and altitude. The collected images are processed using 
      an image analysis tool to calculate key vegetation indices like NDVI and RENDVI, which are critical for assessing plant health. Simultaneously, 
      the environmental data from IoT devices is integrated with the processed images, enabling the system to analyze the correlation between plant health 
      and environmental conditions.
      
          </p>

          <p className="text-lg text-justify">
          Once the data is processed, it is fed into a machine learning model to predict yield, detect plant stress, and identify potential diseases such as 
          brown blight. The system stores this information in PostgreSQL and MongoDB databases, making it accessible for further analysis. A web-based platform is 
          used to visualize the results, displaying geospatial maps, time-series charts, and predictive analytics. This interface allows plantation managers to monitor 
          the health of their crops in real time and make informed decisions. A scheduler automates data collection and processing tasks, ensuring that the system continuously 
          provides up-to-date insights on plantation health, helping to optimize resource allocation and improve overall productivity.
      
          </p>
      </div>
      </div>
    </div>
  );
};

export default Methodology;
