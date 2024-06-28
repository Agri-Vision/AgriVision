import React from 'react'
import Video from '../../Assets/v1.mp4'

import ProjectScope from '../../components/Home/projectScope'
import Milestones from '../../components/Home/milestones'
import Documents from '../../components/Home/documents'
import AboutUs from '../../components/Home/aboutUs'
import ContactUs from '../../components/Home/contactUs'
import ProfileCard from '../../components/Home/profileCard'


// import './home.css'

export const Home = () => {
  return (
    <div className="">
      {/* <div className="relative inset-0 overflow-hidden w-screen">
        <video
          className="w-screen object-cover"
          style={{ height: '750px' }}
          autoPlay
          muted
          loop
          src={Video}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-white">Explore Sri Lanka</h1>
          <p className="text-lg font-medium text-white mt-2">
            Experience Sri Lanka's cultural heritage with sustainable travel
            options
          </p>
        </div>
      </div> */}
      <div className="">
        <div className="">
          <ProjectScope />
        </div>
        <div className="">
          <Milestones />
        </div>
        <div className="">
          <Documents />
        </div>
        <div className="">
          <AboutUs />
        </div>
        <div className="">
          <ContactUs />
        </div>
      </div>
    </div>
  )
}
export default Home
