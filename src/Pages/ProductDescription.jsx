import React from 'react'
import Navbar from '../Components/Navbar'
import ProductCard from '../Components/ProductCard'
import Productdetails from '../Components/Productdetails'
import { Tesla } from '../db/Data'
import Emi from '../Components/Emi'
import Banks from '../Components/Banks'

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
        <div className='mt-10 flex flex-wrap justify-center gap-5'>
          <Emi/>
          <Banks/>
        </div>
  
    </div>
   </main>
  )
}

export default ProductDescription