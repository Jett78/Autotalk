import React from 'react'
import Navbar from '../Components/Navbar'
import ProductCard from '../Components/ProductCard'
import Productdetails from '../Components/Productdetails'
import { Tesla } from '../db/Data'
import Emi from '../Components/Emi'
import Banks from '../Components/Banks'
import Autoloan from '../Components/Autoloan'
import UserReviews from '../Components/UserReviews'
import SimilarProducts from '../Components/SimilarProducts'
import News from '../Components/News'
import Subscribe from '../Components/Subscribe'
import Footer from '../Components/Footer'

const ProductDescription = () => {
  return (
   <main>
    <Navbar/>
    <div className=''>
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
        <Autoloan/>
        <UserReviews/>
        <SimilarProducts/>
        <News/>
        <Subscribe/>
        <Footer/>
    </div>   
  
   </main>
  )
}

export default ProductDescription