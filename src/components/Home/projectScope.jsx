import React from 'react';
import './projectScope.css';
import teaGrowth from './Img/teaGrowth.png';
import { FaSearch, FaChartLine, FaComments } from 'react-icons/fa';

const ProjectScope = () => {
  return (
    <div className="mt-10">
      <div className="mt-[60px] text-3xl text-center  capitalize text-[color:#324d67] mb-3 font-semibold">
        <h2> PROJECT SCOPE</h2>
        <div className="w-20 h-1 mb-5 mx-auto bg-[#669b6d]"></div>
      </div>

      {/* Main container with two columns */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Left Column - Text */}
        <div className="w-full lg:w-2/4 p-4 ml-44">

        <div className="mt-[60px] text-2xl text-left mb-8 capitalize text-[color:#324d67] mb-3 font-semibold">
        <h2>LITERATURE SURVEY</h2>
      </div>

          <p className="text-lg leading-relaxed text-justify">
            As global tea demand rises, large-scale plantations face increasing management challenges. To address this, the industry 
            has adopted precision agriculture, which utilizes IoT and aerial imaging technologies for enhanced monitoring. Thereza et 
            al. [3] developed an IoT-based smart farming system for tea plantations, using sensors to track temperature, pressure, 
            humidity, and altitude, transmitting data via LoRa to a central database for real-time monitoring. However, the study 
            indicated the need for improved automation and mobile accessibility. Gupta et al. [4] explored the integration of GPS, 
            GIS, and sensor networks to analyze soil and environmental data, improving decision-making but lacking real-time 
            monitoring and multispectral imagery, essential for assessing plant health.
          </p>

          <p className="text-lg leading-relaxed text-justify">
            Other research highlights the growing role of multispectral imagery in agriculture. Putra et al. [5] showed the potential 
            for low-cost digital cameras and sensors in monitoring plantations but emphasized the need for better infrastructure and data 
            processing. Lum et al. [6] discussed the benefits of multispectral imaging in assessing chlorophyll content and water stress, 
            though focusing on sensor capabilities rather than practical applications. Septyadi et al. [7] demonstrated the effectiveness of 
            UAV-based multispectral imaging using indices like NDVI but called for improved data integration into a unified monitoring system. 
            Phan et al. [8] examined NDVI's potential for forecasting tea yields by correlating the data with meteorological factors, though 
            the study lacked a user-friendly system for farmers.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="w-full lg:w-1/4 p-4">
          <img
            src={teaGrowth}
            alt="Tea Growth"
            className="w-full h-auto"
          />
        </div>
      </div>

{/*------------------------------------------------------------------------Research Gap----------------------------------------------------------------------------- */}

<div className=" mt-10 ml-48 mr-12">
      {/* Heading */}

      <div className="mt-[60px] text-2xl text-left  capitalize text-[color:#324d67] mb-3 font-semibold">
      <h2>RESEARCH GAP</h2>
        
      </div>
      <p className="mt-2 text-lg text-left text-gray-500">
          Following areas are the research gaps found in most of the recent researches.
        </p>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center  px-4">
        {/* Card 1 */}
        <div className="w-full lg:w-1/4 p-6 bg-white shadow-lg rounded-lg border border-green-500 h-80">
          <div className="flex justify-center mb-4">
            <FaSearch className="text-green-600 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">
            Identification & classification
          </h3>
          <p className="text-justify text-gray-600">
            There are no records of a smart solution for coconut pest and disease identification 
            and classification in Sri Lanka. Symptoms of coconut disorders show similar characteristic 
            appearance and therefore it is a challenge to provide a solution.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-full lg:w-1/4 p-6 bg-white shadow-lg rounded-lg border border-green-500 h-80">
          <div className="flex justify-center mb-4">
            <FaChartLine className="text-green-600 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">
            Severity assessment
          </h3>
          <p className="text-justify text-gray-600">
            Smart solution for identification of some coconut pest and diseases is reported in India 
            but assessment on severity of disease condition and progression level of pest damage is not attempted.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-full lg:w-1/4 p-6 bg-white shadow-lg rounded-lg border border-green-500 h-80">
          <div className="flex justify-center mb-4">
            <FaComments className="text-green-600 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">
            Information sharing
          </h3>
          <p className="text-justify text-gray-600">
            Real time communication system to speed up information sharing between coconut growers, extension 
            personals and researchers has been identified as priority need for effective pest and disease control.
          </p>
        </div>
      </div>
    </div>

    {/*------------------------------------------------------------------------Research Problem & Solution----------------------------------------------------------------------------- */}

<div className=" mt-10 ml-48 mr-12">
      {/* Heading */}

      <div className="mt-[60px] text-2xl text-left  capitalize text-[color:#324d67] mb-3 font-semibold">
      <h2>RESEARCH PROBLEM & SOLUTION</h2>
      </div>
      

      <div className="mt-[40px] text-2xl text-left  capitalize text-[color:#324d67] mb-3 font-semibold">
      <h2>Proposed Problem</h2>
      </div>

     
      <div className="flex flex-wrap justify-center  px-4">
      <p className="text-lg leading-relaxed text-justify">
            As global tea demand rises, large-scale plantations face increasing management challenges. To address this, the industry 
            has adopted precision agriculture, which utilizes IoT and aerial imaging technologies for enhanced monitoring. Thereza et 
            al. [3] developed an IoT-based smart farming system for tea plantations, using sensors to track temperature, pressure, 
            humidity, and altitude, transmitting data via LoRa to a central database for real-time monitoring. However, the study 
            indicated the need for improved automation and mobile accessibility. Gupta et al. [4] explored the integration of GPS, 
            GIS, and sensor networks to analyze soil and environmental data, improving decision-making but lacking real-time 
            monitoring and multispectral imagery, essential for assessing plant health.
          </p>
      </div>

      <div className="mt-[20px] text-2xl text-left  capitalize text-[color:#324d67] mb-3 font-semibold">
      <h2>Proposed Solution</h2>
      </div>


      {/* Main container with two columns */}
      <div className="flex flex-wrap justify-center ">
          
              {/* Right Column - Image */}
              <div className="w-full lg:w-1/4 p-4">
                <img
                  src={teaGrowth}
                  alt="Tea Growth"
                  className="w-full h-auto"
                />
              </div>

              <div className="w-full lg:w-2/4 ">

                <p className="text-lg leading-relaxed text-justify">
                  As global tea demand rises, large-scale plantations face increasing management challenges. To address this, the industry 
                  has adopted precision agriculture, which utilizes IoT and aerial imaging technologies for enhanced monitoring. Thereza et 
                  al. [3] developed an IoT-based smart farming system for tea plantations, using sensors to track temperature, pressure, 
                  humidity, and altitude, transmitting data via LoRa to a central database for real-time monitoring. However, the study 
                  indicated the need for improved automation and mobile accessibility. Gupta et al. [4] explored the integration of GPS, 
                  GIS, and sensor networks to analyze soil and environmental data, improving decision-making but lacking real-time 
                  monitoring and multispectral imagery, essential for assessing plant health.
                </p>
              </div>

              
            </div>


    </div>

{/*------------------------------------------------------------------------Research Objectives----------------------------------------------------------------------------- */}


      {/* New Section: Research Objectives */}

      <div className="mt-[80px] text-3xl text-center  capitalize text-[color:#324d67] mb-5 font-semibold">
        <h2>RESEARCH OBJECTIVES</h2>
        <div className="w-20 h-1 mb-5 mx-auto bg-[#669b6d]"></div>
      </div>
      
      {/* Container for objectives */}
      <div className="flex flex-col items-center gap-10">
        {/* Objective 1 */}
        <div className="flex flex-row items-start gap-4 p-6 bg-white shadow-md rounded-lg w-3/4 relative transition-transform transform hover:scale-105 duration-300">
          {/* Green Star */}
          <div className="w-8 h-8 bg-green-500 text-white flex justify-center items-center rounded-full">
            ★
          </div>
          {/* Text content */}
          <div>
            <h3 className="text-xl font-semibold">Research Objective</h3>
            <p className="mt-2 text-justify">
              Research Objective Description
            </p>
          </div>
        </div>

        {/* Objective 2 */}
        <div className="flex flex-row items-start gap-4 p-6 bg-white shadow-md rounded-lg w-3/4 relative transition-transform transform hover:scale-105 duration-300">
          {/* Green Star */}
          <div className="w-8 h-8 bg-green-500 text-white flex justify-center items-center rounded-full">
            ★
          </div>
          {/* Text content */}
          <div>
            <h3 className="text-xl font-semibold">Research Objective</h3>
            <p className="mt-2 text-justify">
              Research Objective Description
            </p>
          </div>
        </div>

        {/* Objective 3 */}
        <div className="flex flex-row items-start gap-4 p-6 bg-white shadow-md rounded-lg w-3/4 relative transition-transform transform hover:scale-105 duration-300">
          {/* Green Star */}
          <div className="w-8 h-8 bg-green-500 text-white flex justify-center items-center rounded-full">
            ★
          </div>
          {/* Text content */}
          <div>
            <h3 className="text-xl font-semibold">Research Objective</h3>
            <p className="mt-2 text-justify">
              Research Objective Description
            </p>
          </div>
        </div>

        {/* Objective 4 */}
        <div className="flex flex-row items-start gap-4 p-6 bg-white shadow-md rounded-lg w-3/4 relative transition-transform transform hover:scale-105 duration-300">
          {/* Green Star */}
          <div className="w-8 h-8 bg-green-500 text-white flex justify-center items-center rounded-full">
            ★
          </div>
          {/* Text content */}
          <div>
            <h3 className="text-xl font-semibold">Research Objective</h3>
            <p className="mt-2 text-justify">
              Research Objective Description
            </p>
          </div>
        </div>


      </div>





    </div>
  );
}

export default ProjectScope;
