import React from "react";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <main>
      <div>
        <p className="px-2 sm:text-[16px] text-[12px] text-gray text-center py-[10px] font-normal ">
          Introducing 
          <span className="text-purple font-bold"> Automobile Subscription</span>
          .Now You Can Get Latest News Right At Your Finger Tip.
        </p>

        <header className="flex items-center justify-center gap-6 sm:px-[200px] px-6 bg-primary w-full h-[116px] text-gray text-[16px] border-b-rounded">
          <div className="lg:flex hidden gap-8">
            <select name="NewAuto" id="AUTO" className="bg-transparent">
              <option value="What's New In Auto">Whats's New in Auto</option>
            </select>
            <select name="DIY and Maintainance" id="DIY" className="bg-transparent">
              <option value="DIY and Maintainance Tips">
                DIY and Maintainance Tips
              </option>
            </select>
          </div>

          <figure>
            <img src="./auto 1.png" alt="logo" className="sm:min-w-[300px] sm:mx-20" />
          </figure>

          <div className="xl:flex hidden items-center gap-4 whitespace-nowrap">
            <p className="">Car Buying Goods</p>
            <select name="Motorsports" id="MotorSports" className="bg-transparent">
              <option value="Motorsports">Motorsports</option>
            </select>
            <p>EMI Calculator</p>
          </div>
          <div className="ml-4 flex items-center gap-4 text-2xl">
              <CiSearch />
              <RxHamburgerMenu />
            </div>

        </header>
      </div>
    </main>
  );
};

export default Navbar;
