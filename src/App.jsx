import React from 'react'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ProductDescription from './Pages/ProductDescription'
import Emipage from './Pages/Emipage'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <main>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/ProductDescription" element={<ProductDescription/>}></Route>
        <Route path="/Emipage" element={<Emipage/>}></Route>
       </Routes>
     </BrowserRouter>
     <Footer/>
    </main>
  )
}

export default App