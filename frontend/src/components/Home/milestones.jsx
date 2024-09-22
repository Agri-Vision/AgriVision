import React from 'react'
import Technologies from '../../components/Home/technologies'
import Methodology from '../../components/Home/methodology'

const milestones = () => {
  return (
    <div className="mt-10">
      <div className="mt-[60px] text-4xl text-center mb-8 capitalize text-[color:#324d67] mb-3 font-semibold">
        <h2>Milestones</h2>
        <div className="w-20 h-1 mb-5 mx-auto bg-[#0092FB]"></div>
      </div>

       <div className="">
        <div className="">
          <Methodology />
        </div>
      </div> 


      <div className="">
        <div className="">
          <Technologies />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        
      </div>
    </div>
  )
}

export default milestones
