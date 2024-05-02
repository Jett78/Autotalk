import { useState } from 'react'
import './App.css'
import Most_read_section from "./components/Most_read_section"
import Categories_section from "./components/Categories_section"
import Comparisons_section from "./components/Comparisons_section"
function App() {

  return (
    <>
      <Most_read_section />
      <Categories_section />
      <Comparisons_section />
    </>
  )
}

export default App
