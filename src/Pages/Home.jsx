import React from 'react'
import Navbar from '../Components/Navbar'
import Herosection from '../Components/Herosection'
import TechInnovation from '../Components/TechInnovation'
import WhatsNew from '../Components/WhatsNew'
import Vintage from '../Components/Vintage'
import Customization from '../Components/Customization'
import Automotive from '../Components/Automotive'

const Home = () => {
  return (
  <main>
    <Navbar/>
    <Herosection/>
    <TechInnovation/>
    <WhatsNew/>
    <Vintage/>
    <Customization/>
    <Automotive/>
  </main>
  )
}

export default Home