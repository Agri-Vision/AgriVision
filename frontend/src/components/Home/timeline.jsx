import React from 'react';

const Timeline = () => {
  const timelineData = [
    {
      date: 'March 2021',
      title: 'Proposal Presentation & Report',
      description: 'A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.',
      marks: 12,
      progress: '12%', 
    },
    {
      date: 'June 2021',
      title: 'Progress Presentation I',
      description: 'Progress Presentation I reviews the 50% completetion status of the project. This reveals any gaps or inconsistencies in the design/requirements.',
      marks: 15,
      progress: '27%', 
    },
    {
      date: 'July 2021',
      title: 'Research Paper',
      description: 'Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge.',
      marks: 10,
      progress: '37%', 
    },
    {
      date: 'September 2021',
      title: 'Progress Presentation II',
      description: 'Progress Presentation II reviews the 90% completetion status demonstration of the project. Along with a Poster presesntation which describes the project as a whole.',
      marks: 18,
      progress: '55%', 
    },
    {
      date: 'September 2021',
      title: 'Website',
      description: 'The Website helps to promote our research project and reveals all details related to the project.',
      marks: 2,
      progress: '57%', 
    },
    {
      date: 'September 2021',
      title: 'Logbook',
      description: 'Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2.',
      marks: 4,
      progress: '61%', 
    },
    {
      date: 'September 2021',
      title: 'Final Report',
      description: 'Final Report evalutes the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.',
      marks: 19,
      progress: '80%', 
    },
    {
      date: 'September 2021',
      title: 'Final Presentation & Viva',
      description: 'Viva is held individually to assess each members contribution to the project.',
      marks: 20,
      progress: '100%', 
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-left">Milestones - Timeline in Brief</h2>
        
        <div className="relative border-l-2 border-gray-300 pl-10">
         
          <div className="absolute top-0 left-0 w-6 h-6 bg-[#5c8843] rounded-full -ml-3"></div>

          {timelineData.map((item, index) => (
            <div key={index} className="mb-8 relative">
              
              <div className="absolute w-4 h-4 bg-[#5c8843] rounded-full -left-12 top-2"></div>

             
              <div className="ml-8"> 
                {/* Date */}
                <div className="text-xl text-left">
                  <span className="bg-[#5c8843] text-white rounded-md px-2 py-1 text-base font-bold">
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mt-2 text-left">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-left">{item.description}</p>

                {/* Marks Allocated */}
                <p className="mt-1 text-gray-500 text-left">
                  <span className="font-semibold">Marks Allocated:</span> {item.marks} %
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 h-1 rounded-full mt-2 text-left">
                  <div
                    className="h-1 rounded-full"
                    style={{ width: item.progress, backgroundColor: '#5c8843' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
