import React from "react";
import {cars} from "../db/Data"
import {bikes} from "../db/Data"
import MoreMotorsportscard from "./MoreMotorsportscard";
import AOS from "aos";
import "aos/dist/aos.css"; 


const MoreMotorsports = () => {
  AOS.init();
  return (
    <main className="bg-lightgreen min-h-[654px] mt-6 md:py-20 py-6 " data-aos="fade-right">
      <div className=" max-w-[1320px] xl:mx-auto mx-4 ">
        <h2 className="sm:text-[24px] text-[20px] font-semibold text-purple tracking-wide">
          More in Motorsports & DIY Maintainance Tips
        </h2>
        <p className="sm:text-[16px] text-[14px] font-normal border-b border-gray text-gray mt-4 pb-6">
          See what's happening new in auto
        </p>

        <div className="flex flex-wrap xl:justify-between gap-8 justify-center  mt-10 ">
          <secton className="max-w-[580px] h-[324px] ">
            <nav className="flex items-center justify-between border-b mx-auto pb-6 ">
              <h2 className="sm:text-[24px] text-[18px] text-purple tracking-wide">
                Motorsports
              </h2>
              <a
                href="#"
                className="md:text-[16px] text-[12px] font-normal text-gray whitespace-nowrap"
              >
                View all
              </a>
            </nav>
            
            <div className="grid gap-8 py-8">
              {cars.map((info, index) => (
                <MoreMotorsportscard key={index} info={info} />
              ))}
            </div>
          </secton>

          <secton className="max-w-[538px]">
            <nav className="flex items-center gap-2 justify-between border-b pb-6 px-1">
              <h2 className="sm:text-[24px] text-[18px] text-purple tracking-wide">
                DIY & Maintainance Tips
              </h2>
              <a
                href="#"
                className="md:text-[16px] text-[12px]  font-normal text-gray whitespace-nowrap"
              >
                View all
              </a>
            </nav>

            <div className="grid gap-8 py-8">
              {bikes.map((info, index) => (
                <MoreMotorsportscard key={index} info={info} />
              ))}
            </div>
          </secton>
        </div>
      </div>
    </main>
  );
};

export default MoreMotorsports;
