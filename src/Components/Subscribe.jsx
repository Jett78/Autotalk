import React from "react";

const Subscribe = () => {
  return (
    <main className="max-w-[1321px] sm:mx-auto px-2 h-[440px] rounded-3xl mt-10 py-8  bg-darkpurple text-white text-center tracking-wide">
      <div className="border-b mx-20">
        <h2 className="text-[32px] font-semibold font-serif ">Subscribe our Newsletter!</h2>
        <p className="py-4 font-regular text-[16px]">Never miss an update</p>
      </div>
      <p className="w-[650px] mx-auto pt-10">We publish a Bi-weekly newsletter covering our top stories and special shots. You can subscribe our newsletter to get exclusive and early excess to our resources.</p>

      <div className="flex md:justify-between justify-center items-center md:text-[16px] text-[12px] ">
        <img src="./cars/blackcar.png" alt="" className="lg:w-[270px] w-40 hidden sm:block  transform scale-x-[-1]"/>
        <form action="#">
           <div className="bg-white md:w-[441px] w-[300px] h-[55px] flex items-center justify-between px-4 rounded-xl">
            <input type="text" placeholder="Enter your email address" className="font-light outline-none border-none text-black"/>
            <button className="bg-red-600 md:w-[112px] w-[92px] md:h-[43px] h-[35px] rounded-xl text-white">Subscribe</button>
           </div>
        </form>
        <img src="./cars/redcar.png" alt="" className="lg:w-[270px] w-40 hidden sm:block " />
      </div>
    </main>
  );
};

export default Subscribe;
