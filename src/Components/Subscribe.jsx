import React from "react";

const Subscribe = () => {
  return (
    <main className="max-w-[1200px] xl:mx-auto mx-4 px-2 max-h-[440px] rounded-3xl mt-10 py-8  bg-purple text-white text-center tracking-wide">
      <div className="border-b sm:mx-20">
        <h2 className="sm:text-[32px] text-[24px] font-semibold font-serif ">Subscribe our Newsletter!</h2>
        <p className="py-4 font-regular sm:text-[16px] text-[14px] ">Never miss an update</p>
      </div>
      <p className="max-w-[650px] font-normal text-[12px] mx-auto pt-10">We publish a Bi-weekly newsletter covering our top stories and special shots. You can subscribe our newsletter to get exclusive and early excess to our resources.</p>

      <div className="flex md:justify-between justify-center items-center md:text-[16px] text-[12px] mt-6">
        <img src="./cars/blackcar.png" alt="car" className="md:w-[270px] w-40 hidden sm:block  transform scale-x-[-1]" />
        <form action="#">
          <div className="bg-white md:w-[441px] w-[280px] h-[55px] flex items-center justify-between px-4 rounded-xl">
            <input type="text" placeholder="Enter your email address" className="w-full font-light outline-none border-none text-black" />
            <button className="bg-red-600 md:w-[125px] w-[110px] md:h-[43px] h-[35px] rounded-xl text-white">Subscribe</button>
          </div>
        </form>
        <img src="./cars/redcar.png" alt="car" className="md:w-[270px] lg:block hidden  " />
      </div>
    </main>
  );
};

export default Subscribe;
