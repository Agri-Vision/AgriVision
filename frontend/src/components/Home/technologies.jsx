import React from 'react';
import './technologies.css'

import reactLogo from './Img/react.png'; 
import pythonLogo from './Img/python.png'; 

const technologies = () => {
  return (
    <div className="mt-10">
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-8">Technologies Used</h2>
        <div className="grid grid-cols-3 gap-4"> 

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
                <img src={reactLogo} alt="React" className="w-28 h-28" />
              </div>
              <div className="flip-card-back bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
              <span className="mt-13 text-center text-black font-bold text-xl">React</span>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
                <img src={pythonLogo} alt="React" className="w-28 h-28" />
              </div>
              <div className="flip-card-back bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
              <span className="mt-13 text-center text-black font-bold text-xl">Python</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default technologies;

