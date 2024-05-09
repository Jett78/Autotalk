import React from 'react'
import Herosection from '../Components/Herosection'
import TechInnovation from '../Components/TechInnovation'
import WhatsNew from '../Components/WhatsNew'
import Vintage from '../Components/Vintage'
import Customization from '../Components/Customization'
import Automotive from '../Components/Automotive'
import MoreMotorsports from '../Components/MoreMotorsports'



const Home = () => {
  return (
  <main>   
 
    <Herosection/>
    <TechInnovation/>
    <WhatsNew/>
    <MoreMotorsports/>
    <Vintage/>
    <Customization/>
    <Automotive/>
  </main>
  )
}

export default Home