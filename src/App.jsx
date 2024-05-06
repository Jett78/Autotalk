import React from 'react'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ProductDescription from './Pages/ProductDescription'
import Emipage from './Pages/Emipage'
import Products from './Pages/Products'
import Header from './Components/Header'

const App = () => {
  return (
    <main>
  <Header/>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/ProductDescription" element={<ProductDescription/>}></Route>
        <Route path="/Emipage" element={<Emipage/>}></Route>
       </Routes>
     </BrowserRouter>
     <Footer/>
    </main>
  )
}

export default App