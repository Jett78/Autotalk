import React from 'react'
import { IoStarSharp } from "react-icons/io5";

const Reviewcard = ({user}) => {
  const{img,name,desc,star} = user;
  return (
   <main className='flex gap-4 max-w-[630px] '>
      <section>
        <img src={img} alt="" className='min-w-20' />
      </section>
      <section className='grid gap-1'>
      <div className="flex gap-2 text-yellow-400 text-xl">
              {Array.from({ length: user.stars }).map((_, i) => (
                <IoStarSharp key={i} />
              ))}
            </div>
        <p>{star}</p>
        <h2>{name}</h2>
        <p className='font-normal text-[14px] max-w-[480px] leading-8'>{desc}</p>
      </section>
   </main>
  )
}

export default Reviewcard