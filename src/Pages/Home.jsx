import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Vision from '../components/Vision'
import Mission from '../components/Mission'
import AboutUs from '../components/AboutUs'

const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Services/>
      <Vision/>
      <Mission/>
      {/* <AboutUs/> */}
    </div>
  )
}

export default Home