import React from 'react'
import { FaEnvelope, FaLinkedin} from 'react-icons/fa';

import vishan from './Img/VishanJayasinghearachchi.jpeg'
import kapilad from './Img/kapilad.jpg'
import dinuka from './Img/dinuka.jpeg'
import milendra from './Img/milendra.jpeg'
import rivindu from './Img/rivindu.jpeg'
import prathila from './Img/prathila.jpeg'

const aboutUs = () => {
  return (
    <div className="mt-10 mb-10" id="aboutUs">
      <div className=" min-h-screen flex flex-wrap items-center justify-around">
        <div className="container mx-auto" >

        <h2 className="text-3xl font-bold text-center mb-2">ABOUT US</h2>
        <p className="text-center text-gray-600 mb-8">Meet Our Team</p>

        {/* <div className="flex flex-wrap justify-center"> */}
        <div className="ml-60 grid grid-cols-5 gap-4 justify-center"> 

{/* Vishan */}
        <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4 border border-gray-200 transition-transform transform hover:scale-105 duration-500">
    <div className="relative overflow-hidden h-64 bg-gray-100">
      <img className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-500" src={vishan} alt="Profile" />
      <div className="absolute bottom-0 left-0 bg-red-500 text-white px-2 py-1 text-sm font-bold">Supervisor</div>
    </div>
    <div className="p-6 text-left">
      <h3 className="text-gray-600 font-semibold text-lg mb-2">Mr.Vishan Jayasinghearachchi</h3>
      <p className="text-gray-600 text-sm">Sri Lanka Institute of Information Technology (SLIIT)</p>
      <p className="text-gray-600 text-sm"><strong>Department: </strong>Software Engineering</p>
      <div className="mt-2 flex  text-blue-600 ">
      <a href="mailto:vishan.j@sliit.lk"><FaEnvelope className="text-2xl"/></a>
      <a href="https://www.linkedin.com/in/vishanj/"><FaLinkedin className="ml-5 text-2xl"/></a>
      </div>
    </div>
  </div>

  {/* Dr.Kapila */}
  <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4 border border-gray-200 transition-transform transform hover:scale-105 duration-500">
    <div className="relative overflow-hidden h-64 bg-gray-100">
      <img className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-500" src={kapilad} alt="Profile" />
      <div className="absolute bottom-0 left-0 bg-red-500 text-white px-2 py-1 text-sm font-bold">Co-Supervisor</div>
    </div>
    <div className="p-6 text-left">
      <h3 className="text-gray-600 font-semibold text-lg mb-2">Dr.Kapila Dissanayaka</h3>
      <p className="text-gray-600 text-sm">Sri Lanka Institute of Information Technology (SLIIT)</p>
      <p className="text-gray-600 text-sm"><strong>Department: </strong>Software Engineering</p>
      <div className="mt-2 flex  text-blue-600 ">
      <a href="mailto:kapila.d@sliit.lk"><FaEnvelope className="text-2xl"/></a>
      <a href="https://www.linkedin.com/in/kapila-d-dissanayaka/"><FaLinkedin className="ml-5 text-2xl"/></a>
      </div>
    </div>
  </div>

          </div>

{/* Members */}

<div className="ml-60 justify-center grid grid-cols-5 gap-4 ">
{/* Dinuka */}
        <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4 border border-gray-200 transition-transform transform hover:scale-105 duration-500">
    <div className="relative overflow-hidden h-64 bg-gray-100">
      <img className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-500" src={dinuka} alt="Profile" />
      <div className="absolute bottom-0 left-0 bg-red-500 text-white px-2 py-1 text-sm font-bold">Group Leader</div>
    </div>
    <div className="p-6 text-left">
      <h3 className="text-gray-600 font-semibold text-lg mb-2">Dinuka Kariyawasam</h3>
      <p className="text-gray-600 text-sm">Sri Lanka Institute of Information Technology (SLIIT)</p>
      <p className="text-gray-600 text-sm"><strong>Department: </strong>Software Engineering</p>
      <div className="mt-2 flex  text-blue-600 ">
      <a href="mailto:dvkariyawasam@gmail.com"><FaEnvelope className="text-2xl"/></a>
      <a href="https://www.linkedin.com/in/dinuka-kariyawasam-46248725b/"><FaLinkedin className="ml-5 text-2xl"/></a>
      </div>
    </div>
  </div>

  {/* Prathila */}
  <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4 border border-gray-200 transition-transform transform hover:scale-105 duration-500">
    <div className="relative overflow-hidden h-64 bg-gray-100">
      <img className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-500" src={prathila} alt="Profile" />
      <div className="absolute bottom-0 left-0 bg-red-500 text-white px-2 py-1 text-sm font-bold">Member</div>
    </div>
    <div className="p-6 text-left">
      <h3 className="text-gray-600 font-semibold text-lg mb-2">Prathila Kahandagamge</h3>
      <p className="text-gray-600 text-sm">Sri Lanka Institute of Information Technology (SLIIT)</p>
      <p className="text-gray-600 text-sm"><strong>Department: </strong>Software Engineering</p>
      <div className="mt-2 flex  text-blue-600 ">
      <a href="mailto:prathila01@gmail.com"><FaEnvelope className="text-2xl"/></a>
      <a href="https://www.linkedin.com/in/prathila-kahandagamage-70a495b3/"><FaLinkedin className="ml-5 text-2xl"/></a>
      </div>
    </div>
  </div>

  {/* Milendra */}
  <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4 border border-gray-200 transition-transform transform hover:scale-105 duration-500">
    <div className="relative overflow-hidden h-64 bg-gray-100">
      <img className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-500" src={milendra} alt="Profile" />
      <div className="absolute bottom-0 left-0 bg-red-500 text-white px-2 py-1 text-sm font-bold">Member</div>
    </div>
    <div className="p-6 text-left">
      <h3 className="text-gray-600 font-semibold text-lg mb-2">Joel Milendra</h3>
      <p className="text-gray-600 text-sm">Sri Lanka Institute of Information Technology (SLIIT)</p>
      <p className="text-gray-600 text-sm"><strong>Department: </strong>Software Engineering</p>
      <div className="mt-2 flex  text-blue-600 ">
      <a href="mailto:joelmilendra@gmail.com"><FaEnvelope className="text-2xl"/></a>
      <a href="https://www.linkedin.com/in/joel-milendra-055761247/"><FaLinkedin className="ml-5 text-2xl"/></a>
      </div>
    </div>
  </div>

  {/* Rivindu */}
  <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4 border border-gray-200 transition-transform transform hover:scale-105 duration-500">
    <div className="relative overflow-hidden h-64 bg-gray-100">
      <img className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-500" src={rivindu} alt="Profile" />
      <div className="absolute bottom-0 left-0 bg-red-500 text-white px-2 py-1 text-sm font-bold">Member</div>
    </div>
    <div className="p-6 text-left">
      <h3 className="text-gray-600 font-semibold text-lg mb-2">Rivindu Fernando</h3>
      <p className="text-gray-600 text-sm">Sri Lanka Institute of Information Technology (SLIIT)</p>
      <p className="text-gray-600 text-sm"><strong>Department: </strong>Software Engineering</p>
      <div className="mt-2 flex  text-blue-600 ">
      <a href="mailto:fernandorivindu2@gmail.com"><FaEnvelope className="text-2xl"/></a>
      <a href="https://www.linkedin.com/in/rivindu-fernando-516825246/"><FaLinkedin className="ml-5 text-2xl"/></a>
      </div>
    </div>
  </div>
          </div>

          </div>
          </div>
    </div>
  )
}

export default aboutUs
