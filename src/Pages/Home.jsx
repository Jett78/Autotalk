import React from 'react'
import Navbar from '../Components/Navbar'
import Herosection from '../Components/Herosection'
import TechInnovation from '../Components/TechInnovation'
import WhatsNew from '../Components/WhatsNew'

const Home = () => {
  return (
  <main>
    <Navbar/>
    <Herosection/>
    <TechInnovation/>
    <WhatsNew/>
  </main>
  )
}

export default Home