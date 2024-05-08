import React from 'react'

const WhatsNewCard = ({info}) => {
  return (
   <main>
    <section className='flex gap-4 max-w-[380px] h-[100px] '>
        <img src={info.img} alt="car" className='max-w-[100px] rounded-lg object-cover' />
         <div>
            <h2 className='sm:text-[16px] text-[14px] font-normal'>{info.title}</h2>
            <div className='flex font-normal gap-4 sm:text-[14px] text-[12px] text-gray py-4'>
                <p>{info.type}</p>
                <p>{info.date}</p>
            </div>
         </div>
    </section>
   </main>
)
}

export default WhatsNewCard