import React from 'react'
import { FaCircleUser } from "react-icons/fa6";


const TechInnovationCard = ({inovdata}) => {
    const{img,title,name,type,date} = inovdata;
  return (
    <div className='w-[427px] h-[329px] mx-3'>
      <figure>
        <img src={img} alt="carimages" className='h-[200px]' />
      </figure>
     <section className='bg-white rounded-b-xl px-6 py-4 shadow-lg'>
     <h2 className='sm:text-[18px] text-[16px] font-normal text-gray '>{title}</h2>
      <div className='sm:text-[14px] text-[12px] flex items-center justify-start gap-4 pt-2 text-gray'>
      <p className='flex items-center gap-1'><FaCircleUser className='text-xl' />{name}</p>
        <p>{type}</p>
        <p>{date}</p>
      </div>
     </section>
    </div>
  )
}

export default TechInnovationCard