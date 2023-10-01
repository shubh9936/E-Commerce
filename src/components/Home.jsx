import React from 'react'
import HeroSection from './HeroSection'
import Services from './Services'
import Trusted from './Trusted'
import FeatureProduct from './FeatureProduct'
 
 
const Home = () => {
  return (
    <div>
    
     
      <HeroSection title="Online Shop"/>
      <FeatureProduct/>
      <Services/>
      <Trusted/>
    </div>
  )
}

export default Home