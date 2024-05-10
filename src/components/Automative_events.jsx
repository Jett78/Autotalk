import React from "react";
import { innovation } from "../db/Data";
import TechInnovationCard from "./TechInnovationCard";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Automative_events = () => {
  const onlyfour = innovation.slice(0, 4);
  return (
    <main className="min-h-[750px] bg-lightgreen px-2 py-20 text-gray my-4">
      <div className="flex flex-wrap gap-8 justify-center ">
        <div>
          <h2 className="text-[24px] text-purple font-semibold pb-4 mb-6">See what happening new in Auto</h2>
          <section className="flex flex-wrap  gap-y-6 justify-center  max-w-[950px]">
            {onlyfour.map((inovdata, index) => (
              <TechInnovationCard key={index} inovdata={inovdata} />
            ))}
          </section>
        </div>

        <section className="grid 2xl:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-8">
          <form
            action="#"
            className="grid gap-2 max-w-[361px] h-[330px] bg-white rounded-lg p-4 shadow-lg"
          >
            <div className="grid gap-2">
              <h2 className="text-[18px]">Automotive Events</h2>
              <p className="text-[14px] font-normal">Stay up to date with the latest news via email.We hate spam!</p>
            </div>
            <div className="grid gap-2 ">
              <label htmlFor="Email">Email</label>
              <input type="text" className=" bg-zinc-200 h-10 rounded-lg outline-none pl-4"
              />
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" />
              <p className="text-[14px] font-normal">I have read and agree to the terms</p>
            </div>
            <button className="bg-purple text-white font-normal w-[120px] h-[40px] rounded-xl">Subscribe</button>
          </form>

          <div className="p-2 mt-4">
            <h2>Discover More</h2>
            <div className="grid grid-cols-3 gap-4 text-[14px] font-normal mt-4">
              <button className="bg-white rounded-lg h-10 border"> 4 Wheeler</button>
              <button className="bg-white rounded-lg h-10 border">2 Wheeler</button>
              <button className="bg-white rounded-lg h-10 border">Scooters</button>
              <button className="bg-white rounded-lg h-10 border">Bikes</button>
              <button className="bg-white rounded-lg h-10 border">Comparisons</button>
              <button className="bg-white rounded-lg h-10 border">Scooters</button>
            </div>

            <div className="grid gap-5 mt-6">
              <h2>Get in Touch</h2>
              <button className="bg-white flex gap-4 items-center pl-4 h-10 border rounded-lg text-purple">
                <FaFacebook className="text-xl" />
                Facebook
              </button>

              <button className="bg-white flex gap-4 items-center pl-4 h-10 border rounded-lg text-purple">
                <FaLinkedin className="text-xl" />
                LinkedIn
              </button>

              <button className="bg-white flex gap-4 items-center pl-4 h-10 border rounded-lg text-purple">
                <FaTwitter className="text-xl" />
                Twitter
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Automative_events;
