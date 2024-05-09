
import './App.css'
import React from 'react'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDescription from './Pages/ProductDescription'
import Emipage from './Pages/Emipage'
import Products from './Pages/Products'
import Header from './Components/Header'
import { useState } from 'react'
import Menu_categories from "./Components/Menu_categories"
import Car_details from "./Components/Car_details"
import Automative_events from "./Components/Automative_events"
import Navibar from "./Components/Navibar"

const App = () => {
  const [condition, setCondition] = useState(false)
  const [open, setopen] = useState(false)

  return (
    <main >
      <Menu_categories open={open} setopen={setopen} />
      <div className={`routes ${open ? 'hidden' : 'block'}`}>
        <Header />
        <BrowserRouter>
          <Navibar setCondition={setCondition} setopen={setopen} open={open} />
          <Routes>
            <Route path="/Autotalk/" element={<Home />}></Route>
            {/* <Route path="/Autotalk/Menu_categories" element={<Menu_categories />}></Route> */}
            <Route path="/Autotalk/Products" element={<Products />}></Route>
            <Route path="/Autotalk/ProductDescription" element={<ProductDescription />}></Route>
            <Route path="/Autotalk/Emipage" element={<Emipage />}></Route>
            <Route path="/Autotalk/4-Wheeler" element={<Car_details />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </main>
  )
}

export default App

