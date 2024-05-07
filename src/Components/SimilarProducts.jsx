import {useState,useEffect} from 'react'
import { similarcars } from '../db/Data'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const SimilarProducts = () => {
   const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const newSize = window.innerWidth < 768 ? similarcars.slice(0, 2) : similarcars;
      setDisplayItems(newSize);
    };

    handleResize(); 

    window.addEventListener("resize", handleResize); 

    return () => window.removeEventListener("resize", handleResize); 
  }, []); 
  return (
    <main className='min-h-[750px]  bg-lightgreen px-2'>
                <div className='max-w-[1320px] mx-auto '>
                <h2 className="text-[24px] text-purple font-semibold border-b pt-10 pb-4">Similar Products</h2>
              <div className='flex flex-wrap justify-center gap-4 gap-y-8 my-8 '>
                 {displayItems.map((same,index) => (
                    <div key={index} same={same} className='max-w-[300px] shadow-lg rounded-xl'>
                         <figure>
                            <img src={same.img} alt="carpic" />
                         </figure>
                         <section className='bg-white text-gray p-4 grid gap-2'>
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
                </div>
    </main>
  )
}

export default SimilarProducts