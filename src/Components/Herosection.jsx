import React from "react";
import Navbar from "./Navbar";

const Herosection = () => {
  return (
    <main className="bg-primary max-h-[750px] w-full ">
      <div>
        <Navbar />
       <div className="md:py-16 py-6">
       <h2 className="font-semibold sm:text-[42px] px-4 text-xl  text-purple text-center mx-auto max-w-[1096px] tracking-wide leading-[145%]">
          Get Latest updates on what's going on AutoEcosystem in Nepal
        </h2>
        <p className="py-4 px-1 sm:text-[16px] text-[14px] text-gray text-center mx-auto max-w-[1096px]  tracking-wide font-normal">
          We cover trending and latest news on Cars & Bikes and publish it on{" "}
          <span className="text-purple font-semibold">Technews.today</span> on a
          daily basis. All resources published here are fact-checked and proof
          read so you can enjoy and get updates on what happening here at Nepal.
        </p>
        <figure>
          <img src="./div.png" alt="herosection" className="mx-auto" />
        </figure>
       </div>
      </div>
    </main>
  );
};

export default Herosection;
