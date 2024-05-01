import React from "react";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <main>
      <div>
        <p className="px-2 text-[16px] text-gray text-center py-[10px] font-normal ">
          Introducing 
          <span className="text-purple font-bold"> Automobile Subscription</span>
          .Now You Can Get Latest News Right At Your Finger Tip.
        </p>

        <header className="flex items-center justify-center px-[200px] bg-primary h-[116px] text-gray text-[16px] border-b">
          <div className="md:flex hidden gap-8">
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
            <img src="./auto 1.png" alt="logo" className="min-w-[300px]" />
          </figure>

          <div className="flex items-center gap-2">
            <p>Car Buying Goods</p>
            <select name="Motorsports" id="MotorSports" className="bg-transparent">
              <option value="Motorsports">Motorsports</option>
            </select>
            <p>EMI Calculator</p>
            <div className="flex items-center gap-2">
              <CiSearch />
              <RxHamburgerMenu />
            </div>
          </div>

        </header>
      </div>
    </main>
  );
};

export default Navbar;
