import React from 'react'
import Filter from '../Components/Filter'
import { similarcars } from '../db/Data'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import News from '../Components/News';
import Subscribe from '../Components/Subscribe';

const Products = () => {
  return (
    <main>
        <div className=' text-gray px-2  mt-[4em] sm:pt-10 pt-6 '>
            <nav className='max-w-[1320px] mx-auto flex gap-6 border-b py-2 text-xl text-purple font-normal mt-10'>
                <h2 className='hover:font-semibold cursor-pointer'>Tab 01</h2>
                <h2 className='hover:font-semibold cursor-pointer'>Tab 02</h2>
            </nav>

            <div className='sm:flex grid-cols-1 justify-center md:gap-6 my-4'>
                <section className='max-w-[315px]  p-2 md:border-r border-b grid justify-center border-zinc-300'>
                   <Filter/>
                 </section>

                <section className='max-w-[985px] p-2 grid justify-center'>
                    <div className='grid md:justify-end justify-center gap-2'>
                        <p className='font-normal text-sm'>Sort by</p>
                        <select name="popularity" id="popularity" className='font-normal w-[200px] border border-gray rounded-lg p-2'>
                            <option value="Popularity">Popularity</option>
                        </select>
                    </div>

                    <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 justify-center gap-2 gap-y-8 my-8 '>
                    {similarcars.map((same,index) => (
                    <div key={index} same={same} className='max-w-[300px] border border-zinc-300 shadow-sm'>
                         <figure>
                            <img src={same.img} alt="carpic" />
                         </figure>
                         <section className='bg-white text-gray  p-2 grid gap-1'>
                            <h2 className='md:text-[16px]'>{same.title}</h2>
                            <p className='text-[14px]'>{same.brand}</p>
                            <div className='flex justify-between items-center'>
                            <h2 className='md:text-[18px] font-semibold'>Rs.{same.price} Lakhs</h2>
                            <MdOutlineKeyboardArrowRight  className='text-2xl cursor-pointer'/>
                            </div>
                         </section>
                    </div>
                 ))}
                    </div>
                </section>
            </div>
            <News/> 
            <Subscribe/>
        </div>
    </main>
  )
}

export default Products