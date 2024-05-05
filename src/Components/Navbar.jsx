import React from "react";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <main>
      <nav className="flex items-center justify-center gap-6 px-4  bg-transparent w-full h-[110px] text-gray text-[14px] font-normal md:border-b border-b-none">
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
           <Link to={'/'}><img src="./auto 1.png" alt="logo" className="sm:min-w-[300px] sm:mx-20" /></Link>
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

        </nav>
    </main>
  );
};

export default Navbar;
