import React from 'react'
import Navbar from '../Components/Navbar'
import ProductCard from '../Components/ProductCard'
import Productdetails from '../Components/Productdetails'
import { Tesla } from '../db/Data'

const ProductDescription = () => {
  return (
   <main>
    <Navbar/>
    <div className='max-w-[1320px] h-[555px] mx-auto'>
        <div>
        {Tesla.map((tesla,index) => (
           <div key={index}>
             <ProductCard  tesla={tesla}/>
             <Productdetails tesla={tesla}/>
           </div>
        ))}
        </div>
  
    </div>
   </main>
  )
}

export default ProductDescription