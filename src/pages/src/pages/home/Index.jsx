import React from 'react'
import Hero from './hero/Hero'
import Service from './service/Service'
import About from './about/About'
import Tab from './tabs/Tab'
import Portfolio from './portfolio/Portfolio'
import Blog from './blog/Blog'
import Testimonial from './testimonial/Testimonial'
// import Pricing from './pricing/Pricing'

function Index() {
  return (
    <>
      <Hero/>
      <Service/>
      <About/>
      <Tab/>
      <Portfolio/>
      <Testimonial/>
      <Blog/>
      {/* <Pricing/> */}
    </>
  )
}

export default Index
