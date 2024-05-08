import React from 'react'

const MoreMotorsportscard = ({info}) => {
  return (
  <main>
     <section className='flex gap-4 max-w-[538px] h-[100px] '>
        <img src={info.img} alt="car" className='max-w-[100px] rounded-lg object-cover' />
         <div>
            <h2 className='sm:text-[16px] text-[14px] font-normal'>{info.title}</h2>
            <div className='sm:flex hidden gap-4 font-normal sm:text-[14px] text-[12px] text-gray py-4'>
                <p>{info.desc}</p>
            </div>
            <div className='sm:hidden flex gap-4 font-normal sm:text-[14px] text-[12px] text-gray py-4'>
            <p>{info.type}</p>
            <p>{info.date}</p>
            </div>
         </div>
    </section>
  </main>
  )
}

export default MoreMotorsportscard