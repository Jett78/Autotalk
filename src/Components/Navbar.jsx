import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down
      const scrolled = window.scrollY;

      // Set isScrolled state based on scroll position
      setIsScrolled(scrolled > 0);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className={`fixed w-full bg-zinc-200 shadow-sm z-50 ${ isScrolled ? "mt-[-65px]" : "mt-[0px]"}`} >
        <nav className="flex items-center xl:justify-center justify-between md:gap-6 gap-20 px-4 bg-transparent w-full max-h-[110px] md:py-8 py-6 text-gray text-[14px] font-normal">
          <div className="lg:flex hidden gap-8">
            <select
              name="NewAuto"
              id="AUTO"
              className="bg-transparent outline-none cursor-pointer"
            >
              <option value="What's New In Auto">Whats's New in Auto</option>
            </select>
            <select
              name="DIY and Maintainance"
              id="DIY"
              className="bg-transparent outline-none cursor-pointer"
            >
              <option value="DIY and Maintainance Tips">
                DIY and Maintainance Tips
              </option>
            </select>
          </div>

          <figure>
            <Link to={"/"}>
              <img src="./auto 1.png" alt="logo" className="sm:w-[300px]" />
            </Link>
          </figure>

          <div className="xl:flex hidden items-center gap-4 whitespace-nowrap">
            <Link to="/products">
              <p className="">Car Buying Goods</p>
            </Link>
            <select
              name="Motorsports"
              id="MotorSports"
              className="bg-transparent outline-none cursor-pointer"
            >
              <option value="Motorsports">Motorsports</option>
            </select>
            <Link to="/Emipage">
              <p className="cursor-pointer">EMI Calculator</p>
            </Link>
          </div>
          <div className="ml-4 flex items-center gap-4 text-2xl cursor-pointer">
            <CiSearch />
            <RxHamburgerMenu />
          </div>
        </nav>
      </main>
    </>
  );
};

export default Navbar;
