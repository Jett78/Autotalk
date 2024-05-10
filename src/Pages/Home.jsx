import React from 'react'
import Herosection from '../Components/Herosection'
import TechInnovation from '../Components/TechInnovation'
import WhatsNew from '../Components/WhatsNew'
import Vintage from '../Components/Vintage'
import Customization from '../Components/Customization'
import Automotive from '../Components/Automotive'
import MoreMotorsports from '../Components/MoreMotorsports'
import Comparisons_section from '../Components/Comparisons_section'
import Automative_events from '../Components/Automative_events'


const Home = () => {
  return (
    <main>
      <Herosection />
      <TechInnovation />
      <WhatsNew />
      <Comparisons_section />
      <MoreMotorsports />
      <Vintage />
      <Customization />
      <Automative_events />
      <Automotive />
    </main>
  )
}

export default Home
