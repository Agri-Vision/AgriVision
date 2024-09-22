import React from 'react';
import './projectScope.css'; // If custom styles are needed, add them here

const ProjectScope = () => {
  return (
    <div className="mt-10">
      <div className="mt-[60px] text-4xl text-center mb-8 capitalize text-[color:#324d67] mb-3 font-semibold">
        <h2>Research Objectives</h2>
        <div className="w-20 h-1 mb-5 mx-auto bg-[#0092FB]"></div>
      </div>

      {/* Container for objectives with line connection */}
      <div className="relative flex flex-col items-center gap-10">

        {/* Vertical Line connecting the objectives */}
        <div className="absolute left-12 top-0 h-full w-1 bg-green-600 z-0"></div>

        {/* Objective 1 */}
        <div className="flex flex-row items-center gap-4 p-6 bg-white shadow-md rounded-lg w-3/4 relative z-10">
          {/* Green Circle */}
          <div className="w-8 h-8 bg-green-500 text-white flex justify-center items-center rounded-full">
            ★
          </div>
          {/* Text content */}
          <div>
            <h3 className="text-xl font-semibold">Classification of Weligama Coconut Leaf Wilt Disease</h3>
            <p className="mt-2 text-justify">
              The first objective is to classify Weligama Coconut Leaf Wilt Disease (WCLWD) to provide a solution for distinguishing WCLWD uneven yellowing from other diseases...
            </p>
          </div>
        </div>

        {/* Objective 2 */}
        <div className="flex flex-row items-center gap-4 p-6 bg-white shadow-md rounded-lg w-3/4 relative z-10">
          {/* Green Circle */}
          <div className="w-8 h-8 bg-green-500 text-white flex justify-center items-center rounded-full">
            ★
          </div>
          {/* Text content */}
          <div>
            <h3 className="text-xl font-semibold">Classification of Coconut Caterpillar Infestation</h3>
            <p className="mt-2 text-justify">
              The second objective of this study is to develop a solution to identify the coconut caterpillar infestation (CCI) while differentiating its symptoms from other conditions...
            </p>
          </div>
        </div>

        {/* Objective 3 */}
        <div className="flex flex-row items-center gap-4 p-6 bg-white shadow-md rounded-lg w-3/4 relative z-10">
          {/* Green Circle */}
          <div className="w-8 h-8 bg-green-500 text-white flex justify-center items-center rounded-full">
            ★
          </div>
          {/* Text content */}
          <div>
            <h3 className="text-xl font-semibold">Differentiating Magnesium Deficiency, Coconut Leaf Scorching, and Identify Water Resources</h3>
            <p className="mt-2 text-justify">
              The third objective is identifying the pattern of yellowing associated with Mg deficiency, identifying LSD on coconut leaves, and checking if there is a water resource within 100m...
            </p>
          </div>
        </div>

        {/* Objective 4 */}
        <div className="flex flex-row items-center gap-4 p-6 bg-white shadow-md rounded-lg w-3/4 relative z-10">
          {/* Green Circle */}
          <div className="w-8 h-8 bg-green-500 text-white flex justify-center items-center rounded-full">
            ★
          </div>
          {/* Text content */}
          <div>
            <h3 className="text-xl font-semibold">Crowdsourcing for Information Sharing</h3>
            <p className="mt-2 text-justify">
              The fourth objective is to provide a convenient approach to the farmers and industry professionals to utilize the optimal use of the platform...
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectScope;
