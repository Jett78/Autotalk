import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import TechInnovationCard from "./TechInnovationCard";


const innovation = [
    {
        img:"./cars/image 52.png",
        title:"New Kia Sonnet facelift unveil on Dec. 14, here are more details",
        name:"Admin",
        type:"4-wheeler",
        date:"Apr 23,2023",
    },
    {
        img:"./cars/image 54.png",
        title:"2023 Porsche Panamera launched in India, priced from Rs 1.68 crore",
        name:"Admin",
        type:"4-wheeler",
        date:"Apr 23,2023",
    },
    {
        img:"./cars/image 59.png",
        title:"Scorpio drives demand for Mahindra SUVs with highest monthly bookings in Q2",
        name:"Admin",
        type:"4-wheeler",
        date:"Apr 23,2023",
    },
    {
        img:"./cars/image 63.png",
        title:"Ferrari SF90 XX Stradale makes debut at Casa Ferrari Abu Dhabi",
        name:"Admin",
        type:"4-wheeler",
        date:"Apr 23,2023",
    },
    {
        img:"./cars/image 64.png",
        title:"New Kia Sonnet facelift unveil on Dec. 14, here are more details",
        name:"Admin",
        type:"4-wheeler",
        date:"Apr 23,2023",
    },
    {
        img:"./cars/image 65.png",
        title:"2023 Porsche Panamera launched in India, priced from Rs 1.68 crore",
        name:"Admin",
        type:"4-wheeler",
        date:"Apr 23,2023",
    },
]

const TechInnovation = () => {
  return (
    <main className="min-h-[1018px] bg-primary">
      <header className="px-4 flex justify-between max-w-[1320px] mx-auto md:pt-[100px] pt-10 border-b border-gray">
        <div >
          <h2 className="sm:text-[24px] text-[20px] font-semibold text-purple tracking-wide">Tech and Innovation</h2>
          <p className="sm:text-[16px] text-[14px] font-normal text-gray my-4">See What happening new in auto</p>
        </div>
        <div className="md:flex hidden items-center gap-2 ">
          <a href="#" className="text-[16px] font-normal text-gray whitespace-nowrap">View all</a>
          <FiArrowUpRight />
        </div>
      </header>

      <section className="flex flex-wrap justify-center gap-y-10 mt-10">
        {innovation.map((inovdata,index) => (
            <TechInnovationCard key={index} inovdata={inovdata}/>
        ))}
      </section>
    </main>
  );
};

export default TechInnovation;
