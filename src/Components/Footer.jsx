import React from "react";
import { CiFacebook } from "react-icons/ci";
import { PiYoutubeLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <main className="bg-darkpurple min-h-[600px] py-12 px-2 text-white list-none mt-8 ">
      <h2 className="text-center text-4xl font-semibold tracking-wider sm:block hidden">
        Autotalk.<span className="text-orange-400">Today</span>
      </h2>
      <div className="flex flex-wrap md:justify-center justify-left sm:gap-20 gap-8 sm:py-10">
        <section>
          <h2 className="text-2xl font-semibold sm:text-left text-center">
            Autotalk.<span className="text-orange-400">Today</span>
          </h2>
          <p className="w-[250px] font-normal py-8">
            You are just one step away from transforming your digital design
            crafting experience with Stratis UI Kit
          </p>
        </section>

        <section>
          <li>Navigation</li>
          <div className="grid gap-4 text-zinc-200 pt-6 font-normal">
            <li>What's new in Auto</li>
            <li>Tech and Innovation</li>
            <li>Comparisons</li>
            <li>Vintage Collections</li>
          </div>
        </section>

        <section>
          <li>Navigation</li>
          <div className="grid gap-4 text-zinc-200 pt-6 font-normal">
            <li>Customization and Modification</li>
            <li>Automotive Events</li>
            <li>Motorsports</li>
            <li>DIY and Maintainance Tips</li>
            <li>Automotive Lifestyle</li>
            <li>Car Buying Guides</li>
          </div>
        </section>

        <section>
          <section>
            <li>About</li>
            <div className="grid gap-4 text-zinc-200 pt-6 font-normal">
              <li>Our Story</li>
              <li>Contact Us</li>
            </div>
          </section>
          <li className="mt-8">Get Regular Updates</li>
          <div className="grid gap-4 text-zinc-200 pt-6 font-normal">
            <li className="flex items-center gap-2">
              <CiFacebook className="text-2xl" />
              Facebook
            </li>
            <li className="flex items-center gap-2">
              <PiYoutubeLogo className="text-2xl" />
              Youtube
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram className="text-2xl" />
              Instagram
            </li>
          </div>
        </section>
      </div>
      <footer className="flex flex-wrap justify-between mx-auto border-t pt-6 max-w-[1400px] sm:mt-0 mt-8">
        <p className="sm:text-[16px] text-[20px] font-normal mx-10 text-center pb-4">
          2023 Company.All Rights Reserved
        </p>
        <div className="flex gap-4 sm:text-[16px] text-[12px] font-normal whitespace-nowrap ">
          <p>Terms and Conditions</p>
          <p>Cookies</p>
          <p>Privacy Policies</p>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
