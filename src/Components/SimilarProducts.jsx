import React from 'react'
import { similarcars } from '../db/Data'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const SimilarProducts = () => {
  return (
    <main className='min-h-[750px] bg-lightgreen px-2'>
              <h2 className="text-[24px] text-purple font-semibold border-b pt-10 pb-4">Similar Products</h2>
              <div className='flex flex-wrap justify-center gap-4 gap-y-8 my-8 '>
                 {similarcars.map((same,index) => (
                    <div key={index} same={same} className='w-[310px] shadow-lg rounded-xl'>
                         <figure>
                            <img src={same.img} alt="carpic" />
                         </figure>
                         <section className='bg-white text-gray p-4 grid gap-2'>
                            <h2 className='text-[18px]'>{same.title}</h2>
                            <p className='text-[14px]'>{same.brand}</p>
                            <div className='flex justify-between items-center'>
                            <h2 className='text-[20px] font-semibold'>Rs.{same.price} Lakhs</h2>
                            <MdOutlineKeyboardArrowRight  className='text-2xl cursor-pointer'/>
                            </div>
                         </section>
                    </div>
                 ))}
              </div>
    </main>
  )
}

export default SimilarProducts