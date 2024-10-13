import React from 'react';
import './projectScope.css';
import teaGrowth from './Img/teaGrowth.png';
import WebApplication from './Img/WebSite.png';
import { FaSearch, FaChartLine, FaComments, FaLightbulb, FaLeaf, FaTree, FaCog, FaRocket, FaFlask } from 'react-icons/fa';


const ProjectScope = () => {
  return (
    <div className="mt-10" id="domain">
      <div className="mt-[60px] text-3xl text-center  capitalize text-[color:#324d67] mb-3 font-semibold">
        <h2> Domain</h2>
        <div className="w-20 h-1 mb-5 mx-auto bg-[#669b6d]"></div>
      </div>

      {/* Main container with two columns */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Left Column - Text */}
        <div className="w-full lg:w-2/4 p-4 ml-44">

        <div className="mt-[60px] text-2xl text-left mb-8 capitalize text-[color:#324d67] mb-3 font-semibold" id="literatureSurvey">
        <h2>LITERATURE SURVEY</h2>
      </div>

          <p className="text-lg leading-relaxed text-justify">
          Precision agriculture has emerged as a crucial tool in modern farming, utilizing advanced technologies such as multispectral imaging, 
          IoT, and machine learning to enhance crop management and yield estimation. Research by Barman (2020) demonstrated the use of Landsat-7 
          ETM+ imagery and GIS for assessing tea bush health and estimating yield in India [1]. This study highlighted how spectral data can differentiate
           between healthy and unhealthy tea bushes, enabling early interventions and more accurate yield predictions. However, it also pointed out limitations
            in correlating remote sensing data with on-the-ground conditions, suggesting a need for more precise methodologies. Similarly, a hybrid approach 
            developed by researchers from Pakistan combined the FAO AquaCrop simulation model with machine learning algorithms such as XGBoost to 
            predict tea yields based on data from weather, soil, crop, and agro-management [2]. While this method improved yield prediction accuracy, 
            it lacked integration with real-time data and ground-truth validation, underscoring the need for more comprehensive systems that can utilize
             a broader range of data sources.
          </p>

          <p className="text-lg leading-relaxed text-justify">
          Furthermore, research from Wayamba University in Sri Lanka applied multispectral drone imagery to estimate rice yields before harvest, 
          showcasing the potential of UAV-based imaging over traditional manual methods [3]. This study demonstrated the effectiveness of multispectral 
          data in stress detection and yield prediction, but its application was limited to rice crops. The use of such technology in tea plantations, 
          especially for detecting plant stress and diseases like brown blight, remains underexplored. While indices such as NDVI and RENDVI have been 
          proven effective in analyzing plant health and detecting stress in other crops, their application for tea-specific issues requires further 
          investigation. These gaps in the existing research present a significant opportunity to develop integrated systems that combine multispectral 
          imaging, IoT data, and machine learning to address the unique challenges of tea plantations.
          </p>
          <p className="text-sm leading-relaxed text-justify">
          [1] Barman, T. (Year). Tea Bush Health Determination and Yield Estimation. Study using Landsat-7 ETM+ remote sensing data and GIS, Tea Board of India.<br></br>
          [2] [Research Study from Pakistan] A Hybrid Approach to Tea Crop Yield Prediction Using Simulation Models and Machine Learning.<br></br>
          [3] Wayamba University of Sri Lanka (Year). Estimating Rice Crop Parameters During the 'Yala' Season in Sri Lanka Using UAV Multispectral Indices.

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

      <div className="mt-[60px] text-2xl text-left  capitalize text-[color:#324d67] mb-3 font-semibold" id="researchGap">
      <h2>RESEARCH GAP</h2>
        
      </div>
      <p className="mt-2 text-lg text-left text-gray-500">
          Following areas are the research gaps found in most of the recent researches.
        </p>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center  px-4">
        {/* Card 1 */}
        <div className="w-full lg:w-1/4 p-6 bg-white shadow-lg rounded-lg border border-green-500 h-[320px]">
          
          <h3 className="text-xl font-semibold text-center mb-2">
          Tea Yield Prediction
          <div className="w-20 h-1 mb-5 mx-auto bg-[#669b6d]"></div>
          </h3>
          <p className="text-justify text-gray-600">
          Limited research has focused specifically on tea yield prediction. The use of multispectral drone imagery for yield estimation
           in tea plantations remains underexplored, leaving a gap in efficient methods to predict tea yields using advanced imaging techniques​
          </p>
        </div>

        {/* Card 2 */}
        <div className=" w-full lg:w-1/4 p-6 bg-white shadow-lg rounded-lg border border-green-500 h-[320px]">
          
          <h3 className="text-xl font-semibold text-center mb-2">
          Plant Stress Detection
          <div className="w-20 h-1 mb-5 mx-auto bg-[#669b6d]"></div>
          </h3>
          <p className="text-justify text-gray-600">
          Early detection of stress in tea plants is vital for maintaining yield. Current systems rely on limited imaging techniques, and there is a need for 
          methods that combine multispectral imaging with real-time environmental data for more accurate stress detection​
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-full lg:w-1/4 p-6 bg-white shadow-lg rounded-lg border border-green-500 h-[320px]">
          
          <h3 className="text-xl font-semibold text-center mb-2">
          Disease Identification
          <div className="w-20 h-1 mb-5 mx-auto bg-[#669b6d]"></div>
          </h3>
          <p className="text-justify text-gray-600">
          Despite advancements in remote sensing for disease detection, there are few practical systems specifically targeting tea diseases like brown blight. 
          Drone-based multispectral imagery for early disease detection in tea plantations is still underutilized​
          </p>
        </div>
        {/* Card 4 */}
        <div className="w-full lg:w-1/4 p-6 bg-white shadow-lg rounded-lg border border-green-500 h-[320px]">
          
          <h3 className="text-xl font-semibold text-center mb-2">
          Multispectral Image Processing
          <div className="w-20 h-1 mb-5 mx-auto bg-[#669b6d]"></div>
          </h3>
          <p className="text-justify text-gray-600">
          While multispectral imaging is effective in capturing plant health data, current systems lack advanced processing techniques to fully utilize this data.
           There is a need for more sophisticated algorithms to process multispectral images for yield, stress, and disease analysis
          </p>
        </div>
      </div>
    </div>

    {/*------------------------------------------------------------------------Research Problem & Solution----------------------------------------------------------------------------- */}

<div className=" mt-10 ml-48 mr-12">
      {/* Heading */}

      <div className="mt-[60px] text-2xl text-left  capitalize text-[color:#324d67] mb-3 font-semibold" id="researchProblem">
      <h2>RESEARCH PROBLEM & SOLUTION</h2>
      </div>
      

      <div className="mt-[40px] text-2xl text-left  capitalize text-[color:#324d67] mb-3 font-semibold">
      <h2>Proposed Problem</h2>
      </div>

     
      <div className="flex flex-wrap justify-center  px-4">
      <p className="text-lg leading-relaxed text-justify">
      Sri Lanka, despite being one of the largest producers of tea globally, has seen a decline in productivity over the past decade. 
      The primary issue lies in the difficulties faced by tea plantation managers in monitoring large-scale plantations efficiently, 
      which are often located in geographically challenging areas. The lack of accurate, real-time data on crop health, environmental stress, 
      and disease presence leads to poor resource allocation and suboptimal management, directly impacting the yield and profitability of the tea industry. 
      Moreover, early detection of stress and diseases in tea plants remains a significant challenge, further exacerbating the issue.
          </p>
      </div>

      <div className="mt-[20px] text-2xl text-left  capitalize text-[color:#324d67] mb-3 font-semibold">
      <h2>Proposed Solution</h2>
      </div>


      {/* Main container with two columns */}
      <div className="flex flex-wrap justify-center ">
          
              {/* Right Column - Image */}
              <div className="w-full lg:w-2/4 p-4">
                <img
                  src={WebApplication}
                  alt="Web Application UI"
                  className="w-full h-auto"
                />
              </div>

              <div className="w-full lg:w-2/4 ">

                <p className="text-lg leading-relaxed text-justify mt-[35px] ml-8">
                The proposed solution is to develop a comprehensive tea plantation monitoring system that integrates multispectral drone imagery, 
                IoT sensors, and machine learning models. This system will enable real-time monitoring of tea plantations, providing plantation managers with 
                actionable insights for early stress detection, yield estimation, and disease identification. By leveraging data from multiple sources, including 
                multispectral imaging for plant health analysis and IoT devices for environmental monitoring, the solution aims to optimize resource use, improve decision-making, 
                and enhance the overall productivity and sustainability of tea plantations.
                </p>
              </div>

              
            </div>


    </div>

{/*------------------------------------------------------------------------Research Objectives----------------------------------------------------------------------------- */}


      {/* New Section: Research Objectives */}

      <div className="mt-[80px] text-3xl text-center  capitalize text-[color:#324d67] mb-5 font-semibold" id="researchObjectives">
        <h2>RESEARCH OBJECTIVES</h2>
        <div className="w-20 h-1 mb-5 mx-auto bg-[#669b6d]"></div>
      </div>
      
      {/* Container for objectives */}
      <div className="flex flex-col items-center gap-10">
        {/* Objective 1 */}
        <div className="flex flex-row items-start gap-4 p-6 bg-white shadow-md rounded-lg w-3/4 relative transition-transform transform hover:scale-105 duration-300 border border-gray-300">
          {/* Green Star */}
          <div className="w-8 h-8 bg-green-500 text-white flex justify-center items-center rounded-full">
            
          </div>
          {/* Text content */}
          <div>
            <h3 className="text-xl font-semibold  text-[color:#324d67]">COLLECT AND ANALYZE MULTISPECTRAL IMAGES AND IOT DATA</h3>
            <p className="mt-2 text-justify">
            The first objective is to gather high-resolution multispectral images using drones and integrate this data with real-time environmental data collected through IoT devices placed throughout the tea plantation. The IoT sensors monitor critical environmental parameters such as soil moisture, temperature, humidity, and UV radiation. By combining these two data sources, the system aims to provide a comprehensive view of the plantation’s health, allowing for more accurate analysis and decision-making regarding the overall condition of the crops.
             </p>
          </div>
          {/* Green Star */}
          <div className="w-8 h-8 bg-green-500 text-white flex justify-center items-center rounded-full">
            
          </div>
        </div>

        {/* Objective 2 */}
<div className="flex flex-row items-start gap-4 p-6 bg-white shadow-md rounded-lg w-3/4 relative transition-transform transform hover:scale-105 duration-300 border border-gray-300">
  {/* Green Star */}
  <div className="w-8 h-8 bg-green-500 text-white flex justify-center items-center rounded-full">
    
  </div>
  {/* Text content */}
  <div>
    <h3 className="text-xl font-semibold text-[color:#324d67]">TEA YIELD PREDICTION USING NDVI</h3>
    <p className="mt-2 text-justify">
      The second objective involves utilizing the NDVI derived from multispectral images to estimate the yield potential of tea plantations. By monitoring the vigor and health of the tea plants over time and correlating this with environmental conditions, the system will provide early yield estimates. This will allow plantation managers to optimize resource allocation, plan for harvests more efficiently, and predict production levels well in advance, contributing to better overall plantation management and profitability.
    </p>
  </div>
  {/* Green Star */}
  <div className="w-8 h-8 bg-green-500 text-white flex justify-center items-center rounded-full">
    
  </div>
</div>


        {/* Objective 3 */}
        <div className="flex flex-row items-start gap-4 p-6 bg-white shadow-md rounded-lg w-3/4 relative transition-transform transform hover:scale-105 duration-300 border border-gray-30">
          {/* Green Star */}
          <div className="w-8 h-8 bg-green-500 text-white flex justify-center items-center rounded-full">
            
          </div>
          {/* Text content */}
          <div>
            <h3 className="text-xl font-semibold  text-[color:#324d67]">DEVELOP STRESS DETECTION SYSTEM</h3>
            <p className="mt-2 text-justify">
            The third objective focuses on creating a system that leverages the multispectral data in combination with the IoT sensor readings to detect early signs of stress in tea plants. By analyzing specific vegetation indices such as NDVI (Normalized Difference Vegetation Index) and RENDVI (Red-Edge NDVI), along with environmental factors like soil moisture and temperature, the system will be able to provide real-time insights into the stress levels of plants. This will help plantation managers take timely action to mitigate the impact of environmental or biological stressors on crop health and yield.
            </p>
          </div>
          {/* Green Star */}
          <div className="w-8 h-8 bg-green-500 text-white flex justify-center items-center rounded-full">
            
          </div>
        </div>

        {/* Objective 4 */}
        <div className="flex flex-row items-start gap-4 p-6 bg-white shadow-md rounded-lg w-3/4 relative transition-transform transform hover:scale-105 duration-300 border border-gray-300">
          {/* Green Star */}
          <div className="w-8 h-8 bg-green-500 text-white flex justify-center items-center rounded-full">
            
          </div>
          {/* Text content */}
          <div>
            <h3 className="text-xl font-semibold  text-[color:#324d67]">DISEASE DETECTION AND IDENTIFICATION</h3>
            <p className="mt-2 text-justify">
            The fourth objective is to implement machine learning models that can accurately identify diseases such as brown blight in tea plants. Using the spectral data obtained from the drone-captured multispectral images, the system will train models to detect specific patterns associated with various diseases. Early identification of diseases will enable plantation managers to implement timely interventions, thereby minimizing the spread of infections and reducing the potential loss of crops due to untreated diseases.
            </p>
          </div>
          {/* Green Star */}
          <div className="w-8 h-8 bg-green-500 text-white flex justify-center items-center rounded-full">
            
          </div>
        </div>
        {/* Objective 4 */}
        <div className="flex flex-row items-start gap-4 p-6 bg-white shadow-md rounded-lg w-3/4 relative transition-transform transform hover:scale-105 duration-300 border border-gray-300">
          {/* Green Star */}
          <div className="w-8 h-8 bg-green-500 text-white flex justify-center items-center rounded-full">
            
          </div>
          {/* Text content */}
          <div>
            <h3 className="text-xl font-semibold  text-[color:#324d67]">VISUALIZATION AND WEB APPLICATION</h3>
            <p className="mt-2 text-justify">
            The final objective is to develop a web-based platform that provides an interactive visualization of the analyzed data, including yield predictions, stress maps, and disease detection results. The platform will be user-friendly and accessible to plantation managers and stakeholders, allowing them to monitor their plantations remotely in real-time. The visualized data will help stakeholders make informed decisions regarding resource allocation, plantation management, and overall strategy to maximize productivity and sustainability.
            </p>
          </div>
          {/* Green Star */}
          <div className="w-8 h-8 bg-green-500 text-white flex justify-center items-center rounded-full">
            
          </div>
        </div>


      </div>





    </div>
  );
}

export default ProjectScope;
