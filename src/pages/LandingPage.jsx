import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import StatCounter from '../sections/StatCounter'
import About from '../sections/About'
import PackageGrid from '../sections/PackageGrid'
import CaseStudies from '../sections/CaseStudies'
import Testimonials from '../sections/Testimonials'
import CTASection from '../sections/CTASection'
import Pricing from '../sections/Pricing'
import FAQ from '../sections/FAQ'
import BlogPreview from '../sections/BlogPreview'
import Footer from '../components/Footer'
import GlobalUIElements from '../components/GlobalUIElements'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
     <Hero/>
     <StatCounter/>
     <About/>
     <PackageGrid/>
     <CaseStudies/>
      <Testimonials/>
      <CTASection/>
      <Pricing/>
      <FAQ/>
      <BlogPreview/>
      <Footer/>
      <GlobalUIElements/>
    </div>
  )
}

export default LandingPage