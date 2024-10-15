import React from 'react';
import { FaFilePdf } from 'react-icons/fa'; 

const DocumentCard = ({ title, date, type, downloadLink }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mx-2 mb-4 w-72 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex flex-col items-center mb-4">
        <FaFilePdf className="text-red-500 h-12 w-12 mb-2" />
        <h3 className="text-lg font-semibold text-center">{title}</h3>
      </div>
      <p className="text-gray-600 text-center mb-2">Submitted on {date}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-500">{type}</span>
        <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300">Download</a>
      </div>
    </div>
  );
};

export default DocumentCard;

