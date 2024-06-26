import React, { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import TechInnovationCard from "./TechInnovationCard";
import { innovation } from "../db/Data"
import AOS from "aos";
import "aos/dist/aos.css";

const Vintage = () => {
  AOS.init();
  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const newSize = window.innerWidth < 768 ? innovation.slice(0, 2) : innovation;
      setDisplayItems(newSize);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <main className="min-h-[600px]  px-4 " data-aos="fade-right">
      <header className="flex justify-between max-w-[1320px] mx-auto  pt-10 border-b border-gray">
        <div>
          <h2 className="sm:text-[24px] text-[20px] font-semibold text-purple tracking-wide">Vintage Collection</h2>
          <p className="sm:text-[16px] text-[14px] font-normal text-gray my-4">See What happening new in auto</p>
        </div>
        <div className="md:flex hidden items-center gap-2 ">
          <a href="#" className="text-[16px] font-normal text-gray whitespace-nowrap">View all</a>
          <FiArrowUpRight />
        </div>
      </header>

      <section className="flex flex-wrap justify-center mx-auto gap-y-6 mt-10 max-w-[1370px]">
        {displayItems.map((inovdata, index) => (
          <TechInnovationCard key={index} inovdata={inovdata} />
        ))}
      </section>
    </main>
  )
}

export default Vintage