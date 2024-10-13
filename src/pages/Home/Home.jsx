import React from 'react'


import ProjectScope from '../../components/Home/projectScope'
import Milestones from '../../components/Home/milestones'
import Documents from '../../components/Home/documents'
import AboutUs from '../../components/Home/aboutUs'
import Gallery from '../../components/Home/gallery'
import ContactUs from '../../components/Home/contactUs'
import Timeline from '../../components/Home/timeline'


export const Home = () => {
  return (
    <div className="">
      
      <div className="">
        <div className="">
          <ProjectScope />
        </div>
        <div className="">
          <Milestones />
        </div>
        <div className="">
          <Timeline />
        </div>
        <div className="">
          <Documents />
        </div>
        <div className="">
          <AboutUs />
        </div>
        <div className="">
          <Gallery />
        </div>
        <div className="">
          <ContactUs />
        </div>
      </div>
    </div>
  )
}
export default Home
