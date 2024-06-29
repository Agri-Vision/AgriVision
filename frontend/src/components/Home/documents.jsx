import React from 'react'
import DocumentCard from './documentCard';
import PresentationCard from './presentationCard';

const Documents = [
  {
    title: "Topic Assessment Form",
    date: "2024/01/29",
    type: "Group",
    downloadLink: "https://drive.google.com/file/d/1m70fsjvevIE0gWS6XRDNj6xiJUfbRUgi/view?usp=sharing"
  },
  {
    title: "Project Charter",
    date: "2021/02/25",
    type: "Group",
    downloadLink: "#"
  },
  {
    title: "Project Proposal",
    date: "2021/03/22",
    type: "Individual",
    downloadLink: "#"
  },
  {
    title: "Status Documents I",
    date: "2021/07/05",
    type: "Individual",
    downloadLink: "#"
  },  
];

const Documents1 = [
  {
    title: "Status Documents II",
    date: "2021/07/05",
    type: "Individual",
    downloadLink: "#"
  },
  {
    title: "Research Paper",
    date: "2021/07/05",
    type: "Individual",
    downloadLink: "#"
  },
  {
    title: "Final Report",
    date: "2021/07/05",
    type: "Individual",
    downloadLink: "#"
  },
  {
    title: "Poster",
    date: "2021/07/05",
    type: "Individual",
    downloadLink: "#"
  },
  
];


const Presentations = [
  {
    title: "Project Proposal",
    date: "2024/05/08",
    type: "Group",
    downloadLink: "https://docs.google.com/presentation/d/1vy414W-IQSqWl6w1nIOnakQRSPIAhfN2/edit?usp=sharing&ouid=115823091121934519360&rtpof=true&sd=true"
  },
  {
    title: "Progress Presentation I",
    date: "2021/02/25",
    type: "Group",
    downloadLink: "#"
  },
  {
    title: "Progress Presentation II",
    date: "2021/03/22",
    type: "Individual",
    downloadLink: "#"
  },
  {
    title: "Final Presentation",
    date: "2021/07/05",
    type: "Individual",
    downloadLink: "#"
  }
];


const documents = () => {
  return (
    <section className="py-8 bg-gray-100">
      {/* All Documents */}
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-6">Documents</h2>
        <p className="text-center text-gray-600 mb-8">Please find all documents related to this research below.</p>

        <div className="ml-10 grid grid-cols-5 gap-2 justify-center ">
          {Documents.map((doc, index) => (
            <a
              key={index}
              href={doc.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-0.5 mb-4"
            >
              <DocumentCard
                title={doc.title}
                date={doc.date}
                type={doc.type}
                downloadLink={doc.downloadLink}
              />
            </a>
          ))}
        </div>

        <div className="ml-10 grid grid-cols-5 gap-2 justify-center ">
          {Documents1.map((doc, index) => (
            <a
              key={index}
              href={doc.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-0.5 mb-4"
            >
              <DocumentCard
                title={doc.title}
                date={doc.date}
                type={doc.type}
                downloadLink={doc.downloadLink}
              />
            </a>
          ))}
        </div>

      </div>

{/* All Presentations */}
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-6">Presentations</h2>
        <p className="text-center text-gray-600 mb-8">Please find all presentations related to this research below.</p>

        <div className="ml-10 grid grid-cols-5 gap-4 justify-center">
          {Presentations.map((doc, index) => (
            <a
              key={index}
              href={doc.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-0.5 mb-4"
            >
              <PresentationCard
                title={doc.title}
                date={doc.date}
                type={doc.type}
                downloadLink={doc.downloadLink}
              />
            </a>
          ))}
        </div>
        
      </div>
    </section>

    
  );
};



export default documents
