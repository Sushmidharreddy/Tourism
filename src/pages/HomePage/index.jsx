import React from 'react'
import Navbar from '../../components/Navbar'
import HomeFlexSlider from '../../components/HomeFlexSlider'
import OurServices from '../../components/OurServices'
import ContactUs from '../../components/ContactUs'
import Testimonials from '../../components/Testimonials'
import Partners from '../../components/Partners'

const HomePage = () => {
  return (
    <>
        <div className=''>
            <HomeFlexSlider/>
            <OurServices/>
            <ContactUs/>
            <Testimonials/>
            <Partners/>
        </div>
    </>
  )
}

export default HomePage