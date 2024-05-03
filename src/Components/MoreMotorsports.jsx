import React from "react";
import WhatsNewCard from "./WhatsNewCard";
import {cars} from "../db/Data"
import {bikes} from "../db/Data"

const MoreMotorsports = () => {
  return (
    <main className="bg-lightgreen h-[654px] ">
      <div className=" max-w-[1320px] md:mx-auto mx-4 py-[80px]">
        <h2 className="sm:text-[24px] text-[20px] font-semibold text-purple tracking-wide">
          More in Motorsports & DIY Maintainance Tips
        </h2>
        <p className="sm:text-[16px] text-[14px] font-normal border-b border-gray text-gray mt-4 pb-6">
          See what's happening new in auto
        </p>

        <div className="flex flex-wrap lg:justify-between gap-4 justify-center  mt-10">
          <secton className="max-w-[380px] h-[324px] bg-red-200 ">
            <nav className="flex items-center justify-between border-b mx-auto pb-6 ">
              <h2 className="sm:text-[24px] text-[20px] text-purple tracking-wide">
                4-Wheeler
              </h2>
              <a
                href="#"
                className="md:text-[16px] text-[12px] font-normal text-gray whitespace-nowrap"
              >
                View all
              </a>
            </nav>
            
            <div className="grid gap-6 py-8">
              {cars.map((info, index) => (
                <WhatsNewCard key={index} info={info} />
              ))}
            </div>
          </secton>

          <secton className="w-[380px]">
            <nav className="flex items-center justify-between border-b pb-6 px-1">
              <h2 className="sm:text-[24px] text-[20px] text-purple tracking-wide">
                2-Wheeler
              </h2>
              <a
                href="#"
                className="text-[16px] font-normal text-gray whitespace-nowrap"
              >
                View all
              </a>
            </nav>

            <div className="grid gap-6 py-8">
              {bikes.map((info, index) => (
                <WhatsNewCard key={index} info={info} />
              ))}
            </div>
          </secton>
        </div>
      </div>
    </main>
  );
};

export default MoreMotorsports;
