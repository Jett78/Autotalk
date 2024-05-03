import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import TechInnovationCard from "./TechInnovationCard";
import {innovation} from "../db/Data"

const Customization = () => {
  return (
    <main className="min-h-[900px] px-4 pt-8">
      <header className="flex justify-between max-w-[1320px] mx-auto border-b border-gray">
        <div>
          <h2 className="sm:text-[24px] text-[20px] font-semibold text-purple tracking-wide">Customization and Modifications</h2>
          <p className="sm:text-[16px] text-[14px] font-normal text-gray my-4">See What happening new in auto</p>
        </div>
        <div className="md:flex hidden items-center gap-2 ">
          <a href="#" className="text-[16px] font-normal text-gray whitespace-nowrap">View all</a>
          <FiArrowUpRight />
        </div>
      </header>

      <section className="flex flex-wrap justify-center gap-y-6  mt-10">
        {innovation.map((inovdata,index) => (
            <TechInnovationCard key={index} inovdata={inovdata}/>
        ))}
      </section>
    </main>
  )
}

export default Customization