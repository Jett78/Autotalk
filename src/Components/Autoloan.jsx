import React from 'react'

const Autoloan = () => {
  return (
    <main className="max-w-[1321px] xl:mx-auto mx-4 px-3 min-h-[350px] rounded-3xl mt-10 py-8  bg-darkpurple text-white  tracking-wide">
    <div className="border-b sm:mx-20">
      <h2 className="sm:text-[32px] text-[24px] font-semibold font-serif ">Interested In Auto Loan?</h2>
      <p className="py-4 font-regular sm:text-[16px] text-[14px] font-normal">We have partnered with Banks and Insurance to make your purchase smooth.</p>
    </div>

    <div className="md:flex grid md:justify-between justify-center items-center lg:px-20 md:text-[16px] text-[12px] mt-6">
     <div>
        <p className='font-normal py-4'>Choose from 100+ Banks and Insurance companies to get your Dream bike at your home.</p>
        <button className="bg-red-600 md:w-[160px] w-[110px] md:h-[43px] h-[35px] rounded-xl text-white font-normal">Apply for Loan</button>
     </div>
     
      <div className='flex flex-wrap gap-8 mt-4'>
        <img src="./banks/image 156.png" alt="bank" />
        <img src="./banks/image 158.png" alt="bank" />
        <img src="./banks/image 159.png" alt="bank" />
        <img src="./banks/image 161.png" alt="bank" />
        <img src="./banks/image 168.png" alt="bank" />
        <img src="./banks/image 156.png" alt="bank" />
        <img src="./banks/image 158.png" alt="bank" />
        <img src="./banks/image 161.png" alt="bank" />
        <img src="./banks/image 159.png" alt="bank" />
    </div>
    </div>
  </main>
  )
}

export default Autoloan
