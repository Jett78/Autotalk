import React from 'react'
import Navbar from '../Components/Navbar'
import Herosection from '../Components/Herosection'
import TechInnovation from '../Components/TechInnovation'
import WhatsNew from '../Components/WhatsNew'
import Vintage from '../Components/Vintage'
import Customization from '../Components/Customization'
import Automotive from '../Components/Automotive'
import MoreMotorsports from '../Components/MoreMotorsports'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Home = () => {
  return (
  <main>
    <Header/>
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