
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
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  )
}

export default App

