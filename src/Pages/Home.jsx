import React from 'react'
import Herosection from '../Components/Herosection'
import TechInnovation from '../Components/TechInnovation'
import WhatsNew from '../Components/WhatsNew'
import Vintage from '../Components/Vintage'
import Customization from '../Components/Customization'
import Automotive from '../Components/Automotive'
import MoreMotorsports from '../Components/MoreMotorsports'
import Most_read_section from '../components/Most_read_section'
import Categories_section from '../components/Categories_section'
import Comparisons_section from '../components/Comparisons_section'
import Automative_events from '../components/Automative_events'
import Recent_news from '../components/Recent_news'
import Car_details from '../components/Car_details'

const Home = () => {
  return (
    <main>
      <Herosection />
      <Most_read_section />
      <Categories_section />
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
