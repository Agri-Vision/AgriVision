import React from 'react';
import { FaEnvelope, FaLinkedin} from 'react-icons/fa';

const profileCard = ({ name, role, institute, department, imgSrc, linkedIn, email}) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4 border border-gray-200 transition-transform transform hover:scale-105 duration-500">
    <div className="relative overflow-hidden h-64 bg-gray-100">
      <img className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-500" src={imgSrc} alt="Profile" />
      <div className="absolute bottom-0 left-0 bg-red-500 text-white px-2 py-1 text-sm font-bold">{role}</div>
    </div>
    <div className="p-6 text-left">
      <h3 className="text-gray-600 font-semibold text-lg mb-2">{name}</h3>
      <p className="text-gray-600 text-sm">{institute}</p>
      {department && <p className="text-gray-600 text-sm"><strong>Department: </strong>{department}</p>}
      <div className="mt-2 flex  text-blue-600 ">
      <a href={email}><FaEnvelope className="text-2xl"/></a>
      <a href={linkedIn}><FaLinkedin className="text-2xl"/></a>
      </div>
    </div>
  </div>
  );
};

export default profileCard;
