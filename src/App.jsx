import { useState } from 'react'
import './App.css'
import Most_read_section from "./components/Most_read_section"
import Categories_section from "./components/Categories_section"
import Comparisons_section from "./components/Comparisons_section"
import Car_details from "./components/Car_details"
import Automative_events from "./components/Automative_events"
import Navibar from "./components/Navibar"

function App() {

  return (
    <>
      <Navibar />
      <Most_read_section />
      <Categories_section />
      <Comparisons_section />
      <Car_details />
      <Automative_events />

    </>
  )
}

export default App
