import React from "react";


const Herosection = () => {
  return (
    <main className="hero_section bg-sky-100 max-h-[750px] w-full p-4 mt-[2em] ">
      <div className="md:mt-20 mt-6 py-4">
        <h2 className="animate-slideleft font-semibold md:text-[42px] px-4 text-xl  text-purple text-center mx-auto max-w-[1096px] tracking-wide leading-[145%]">
          Get Latest updates on what's going on AutoEcosystem in Nepal
        </h2>
        <p className="animate-slideright py-4 px-1 md:text-[16px] text-[14px] text-gray text-center mx-auto max-w-[1096px]  tracking-wide font-normal">
          We cover trending and latest news on Cars & Bikes and publish it on{" "}
          <span className="text-purple font-semibold">Technews.today</span> on a
          daily basis. All resources published here are fact-checked and proof
          read so you can enjoy and get updates on what happening here at Nepal.
        </p>
        <figure>
          <img src="./div.png" alt="herosection" className="mx-auto animate-slideleft" />
        </figure>
      </div>
    </main>
  );
};

export default Herosection;
