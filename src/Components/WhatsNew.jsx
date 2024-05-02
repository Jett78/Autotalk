import React from 'react'
import WhatsNewCard from './WhatsNewCard'
import Subscribe from './Subscribe'

const cars = [
    {
        img:"./cars/image 59.png",
        title:"Ferrari SF90 XX Stradale makes debut at Casa Ferrari Abu Dhabi",
        type:"4-wheeler",
        date:"Apr 23,2023",
    },
    {
        img:"./cars/image 52.png",
        title:"New Kia Sonnet facelift unveil on Dec. 14, here are more details",
        type:"4-wheeler",
        date:"Apr 23,2023",
    },
]
const bikes = [
    {
        img:"./bikes/bike1.png",
        title:"2023 Royal Enfield Himalayan launched, prices start at Rs 2.69 lakh",
        type:"2-wheeler",
        date:"Apr 23,2023",
    },
    {
        img:"./bikes/bike2.png",
        title:"Orxa Mantis electric motorcycle launched, priced at Rs 3.6 lakh",
        type:"2-wheeler",
        date:"Apr 23,2023",
    },
]
const scooters = [
    {
        img:"./scooters/scooter1.png",
        title:"'Massive discount on Ola S1 X+, here are complete details",
        type:"2-wheeler",
        date:"Apr 23,2023",
    },
    {
        img:"./scooters/scooter2.png",
        title:"Bajaj Chetak electric scooter: Price, features & specifications",
        type:"2-wheeler",
        date:"Apr 23,2023",
    },
]

const WhatsNew = () => {
  return (
   <main  className="min-h-[1018px] max-w-[1320px] mx-auto px-4 ">
    <div className='border-b border-gray'>
        <h2 className="sm:text-[24px] text-[20px] font-semibold text-purple tracking-wide">What's New in Auto</h2>
        <p className="sm:text-[16px] text-[14px] font-normal text-gray my-4">See what's happening new in auto</p>
    </div>
  
  <div className='flex flex-wrap lg:justify-between gap-4 justify-center  mt-10'>

    <secton className="max-w-[380px] h-[324px] ">
        <nav className='flex items-center justify-between border-b mx-auto pb-6 '>
            <h2 className="sm:text-[24px] text-[20px] text-purple tracking-wide">4-Wheeler</h2>
            <a href="#" className="md:text-[16px] text-[12px] font-normal text-gray whitespace-nowrap">View all</a>
        </nav>
        <div className='grid gap-6 py-8'>
            {cars.map((info,index)=> (
                <WhatsNewCard key={index} info={info}/>
            ))}
        </div>
    </secton>

    <secton className="w-[380px]">
        <nav className='flex items-center justify-between border-b pb-6 px-1'>
            <h2 className="sm:text-[24px] text-[20px] text-purple tracking-wide">2-Wheeler</h2>
            <a href="#" className="text-[16px] font-normal text-gray whitespace-nowrap">View all</a>
        </nav>
        <div className='grid gap-6 py-8'>
            {bikes.map((info,index)=> (
                <WhatsNewCard key={index} info={info}/>
            ))}
        </div>
    </secton>

    <secton className="w-[380px]">
         <nav className='flex items-center justify-between border-b pb-6 px-1'>
            <h2 className="sm:text-[24px] text-[20px] text-purple tracking-wide">2-Wheeler</h2>
            <a href="#" className="text-[16px] font-normal text-gray whitespace-nowrap">View all</a>
         </nav>
         <div className='grid gap-6 py-8'>
            {scooters.map((info,index)=> (
                <WhatsNewCard key={index} info={info}/>
            ))}
        </div>
    </secton>

    <Subscribe/>
  </div>
   </main>
  )
}

export default WhatsNew