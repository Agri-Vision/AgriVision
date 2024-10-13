import React from 'react';
import './technologies.css'

import reactLogo from './Img/react.png'; 
import pythonLogo from './Img/python.png'; 
import springBootLogo from './Img/springBoot.png'; 
import googleColab from './Img/googleColab.png'; 
import postman from './Img/postman.png'; 
import webODM from './Img/webODM.png'; 
import postgresql from './Img/postgresql.png';
import arduino from './Img/arduino.png'; 
import github from './Img/github.png';  
import flask from './Img/flask.png';  
import googleMapAPI from './Img/googleMapAPI.png'; 
import docker from './Img/docker.png'; 
import asgardeo from './Img/asgardeo.png'; 
import tensorflow from './Img/tensorflow.png'; 

const technologies = () => {
  return (
    <div className="mt-10" id="technologies">
      <div className="p-8">
        <h2 className="text-3xl  text-[color:#324d67] font-bold mb-11 mt-10">TECHNOLOGIES AND TOOLS USED</h2>
        <div className="grid grid-cols-6 gap-4 mr-48 ml-48"> 

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
                <img src={springBootLogo} alt="React" className="w-28 h-28" />
              </div>
              <div className="flip-card-back bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
              <span className="mt-13 text-center text-black font-bold text-xl">Spring Boot</span>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
                <img src={googleColab} alt="React" className="w-28 h-28" />
              </div>
              <div className="flip-card-back bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
              <span className="mt-13 text-center text-black font-bold text-xl">Google Colab</span>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
                <img src={postman} alt="React" className="w-28 h-28" />
              </div>
              <div className="flip-card-back bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
              <span className="mt-13 text-center text-black font-bold text-xl">Postman</span>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
                <img src={webODM} alt="React" className="w-28 h-28" />
              </div>
              <div className="flip-card-back bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
              <span className="mt-13 text-center text-black font-bold text-xl">WebODM</span>
              </div>
            </div>
          </div>

          
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
                <img src={postgresql} alt="React" className="w-28 h-28" />
              </div>
              <div className="flip-card-back bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
              <span className="mt-13 text-center text-black font-bold text-xl">PostgreSQL</span>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
                <img src={arduino} alt="React" className="w-28 h-28" />
              </div>
              <div className="flip-card-back bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
              <span className="mt-13 text-center text-black font-bold text-xl">Arduino </span>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
                <img src={github} alt="React" className="w-28 h-28" />
              </div>
              <div className="flip-card-back bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
              <span className="mt-13 text-center text-black font-bold text-xl">Github</span>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
                <img src={tensorflow} alt="React" className="w-28 h-28" />
              </div>
              <div className="flip-card-back bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
              <span className="mt-13 text-center text-black font-bold text-xl">Tensorflow</span>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
                <img src={docker} alt="React" className="w-28 h-28" />
              </div>
              <div className="flip-card-back bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
              <span className="mt-13 text-center text-black font-bold text-xl">Docker</span>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
                <img src={flask} alt="React" className="w-28 h-28" />
              </div>
              <div className="flip-card-back bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
              <span className="mt-13 text-center text-black font-bold text-xl">Flask</span>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
                <img src={googleMapAPI} alt="React" className="w-28 h-28" />
              </div>
              <div className="flip-card-back bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
              <span className="mt-13 text-center text-black font-bold text-xl">Google Map API</span>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
                <img src={asgardeo} alt="React" className="w-28 h-28" />
              </div>
              <div className="flip-card-back bg-white p-2 rounded-lg flex flex-col items-center justify-center shadow-md">
              <span className="mt-13 text-center text-black font-bold text-xl">Asgardeo by WSO2</span>
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

