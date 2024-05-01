import React from 'react'

const Herosection = () => {
  return (
   <main className='bg-primary h-[700px] mb-20 w-full border-b-xl'>
    <div>
     <h2 className='font-semibold md:text-[42px] text-3xl text-purple text-center mx-auto max-w-[1096px] md:pt-16 pt-0 tracking-wide leading-[145%]'>Get Latest updates on what's going On AutoEcosystem in Nepal</h2>
     <p className='py-4 text-[16px] text-gray text-center mx-auto max-w-[1096px]  tracking-wide'>We cover trending and latest news on Cars & Bikes and publish it on <span className='text-purple font-semibold'>Technews.today</span> on a daily basis. All resources published here are fact-checked and proof read so you can enjoy and get updates on what happening here at Nepal.</p>
     <figure>
        <img src="./div.png" alt="herosection" className='mx-auto' />
     </figure>
    </div>
   </main>
  )
}

export default Herosection