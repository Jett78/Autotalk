
import './App.css'
import React from 'react'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDescription from './Pages/ProductDescription'
import Emipage from './Pages/Emipage'
import Products from './Pages/Products'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import { useState } from 'react'
import Most_read_section from "./Components/Most_read_section"
import Categories_section from "./Components/Categories_section"
import Comparisons_section from "./Components/Comparisons_section"
import Car_details from "./Components/Car_details"
import Automative_events from "./Components/Automative_events"
import Navibar from "./Components/Navibar"

const App = () => {
  const [condition, setCondition] = useState(false)

  return (
    <main>
      <Header />
      <BrowserRouter>
        <Navibar setCondition={setCondition} />
        <Routes>
          <Route path="/Autotalk/" element={<Home />}></Route>
          <Route path="/Autotalk/Products" element={<Products />}></Route>
          <Route path="/Autotalk/ProductDescription" element={<ProductDescription />}></Route>
          <Route path="/Autotalk/Emipage" element={<Emipage />}></Route>
          <Route path="/Autotalk/4-Wheeler" element={<Car_details />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  )
}

export default App

