import React from 'react'
import DocumentCard from './documentCard';
import PresentationCard from './presentationCard';

const Documents = [
  {
    title: "Topic Assessment Form",
    date: "2024/01/29",
    type: "Group",
    downloadLink: "https://drive.google.com/file/d/1RiJd2ehlzHqzSccshj-pcJ2LLqC9al3s/view?usp=sharing"
  },
  {
    title: "Project Charter",
    date: "2024/02/19",
    type: "Group",
    downloadLink: "https://drive.google.com/file/d/1RiJd2ehlzHqzSccshj-pcJ2LLqC9al3s/view?usp=sharing"
  },
  {
    title: "Project Proposal",
    date: "2024/02/21",
    type: "Individual",
    downloadLink: "https://drive.google.com/drive/folders/1vbk3o1bqEcPxCWP-dpok1T7jy6pVT1hq?usp=sharing"
  },
  {
    title: "Status Documents I",
    date: "2024/05/06",
    type: "Individual",
    downloadLink: "https://drive.google.com/drive/folders/1ZumknSXjJuNRLACndVxQrDLvNhDsmdb0?usp=sharing"
  },  
];

const Documents1 = [
  {
    title: "Status Documents II",
    date: "2024/09/11",
    type: "Individual",
    downloadLink: "https://drive.google.com/drive/folders/11V8Zp7GPtTL7rbPtOY2MHmg8OPa7_uUV?usp=sharing"
  },
  {
    title: "Research Paper",
    date: "2024/06/14",
    type: "Group",
    downloadLink: "https://drive.google.com/file/d/1His5BDzN4tAMdLjSVyP2pfZiJ-_43TWU/view?usp=sharing"
  },
  {
    title: "Final Reports",
    date: "2024/12/02",
    type: "Individual",
    downloadLink: "https://drive.google.com/drive/folders/17iXLE5DM6S0SKp6iInrVOkD-nNlzgsfZ?usp=sharing"
  },
  {
    title: "Poster",
    date: "2024/12/02",
    type: "Group",
    downloadLink: "https://drive.google.com/drive/folders/1y3zijXsU3JJ6KHA5LgZwQ8bCND63ew-I?usp=sharing"
  },
  
];

const Presentations = [
  {
    title: "Project Proposal",
    date: "2024/05/08",
    type: "Group",
    downloadLink: "https://docs.google.com/presentation/d/1M0td-uIuEl3e_ECqbeBbIo3geawJ7XG7/edit?usp=sharing&ouid=103416773477533432749&rtpof=true&sd=true"
  },
  {
    title: "Progress Presentation I",
    date: "2024/05/06",
    type: "Group",
    downloadLink: "https://docs.google.com/presentation/d/1PDEOcQYPLG0NjfytaezrKay3agYW-bvH/edit?usp=sharing&ouid=103416773477533432749&rtpof=true&sd=true"
  },
  {
    title: "Progress Presentation II",
    date: "2024/09/11",
    type: "Group",
    downloadLink: "https://docs.google.com/presentation/d/1qdjTqQUClUiPXUC9yM6Kosm7aEm-K8MJ/edit?usp=sharing&ouid=103416773477533432749&rtpof=true&sd=true"
  },
  {
    title: "Final Presentation",
    date: "2024/10/30",
    type: "Group",
    downloadLink: "#"
  }
];

const documents = () => {
  return (
    <section className="py-8 bg-gray-100">
      {/* All Documents */}
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-4 mt-10" id="documents">DOCUMENTS</h2>
        <p className="text-center text-gray-600 mb-8">Please find all documents related to this research below.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 justify-items-center items-center">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 justify-items-center items-center">
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
      <div className="container mx-auto px-2 mt-16">
        <h2 className="text-3xl font-bold text-center mb-4" id="presentations">PRESENTATIONS</h2>
        <p className="text-center text-gray-600 mb-8">Please find all presentations related to this research below.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 justify-items-center items-center">

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

export default documents;
