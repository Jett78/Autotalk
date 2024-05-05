import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import image_58 from '../assets/image 58.png'
import image_83 from '../assets/image 83.png'
import image_52 from '../assets/image 52.png'
import image_59 from '../assets/image 59.png'
import image_54 from '../assets/image 54.png'
import image_64 from '../assets/image 64.png'
import image_63 from '../assets/image 63.png'
import image_65 from '../assets/image 65.png'
import user from '../assets/user.png'
import ffb from "../assets/ffb.png"
import finsta from "../assets/finsta.png"
import ftwitter from "../assets/ftwitter.png"
import { useState } from 'react';
import { useEffect } from 'react';


function Automative_events() {

    const data = [
        {
            id: 1,
            name: "Ferrari SF90 XX Stradale makes debut at Casa Ferrari Abu Dhabi",
            img: image_59
        },
        {
            id: 2,
            name: "2023 Porsche Panamera launched in India, priced from Rs 1.68 crore ",
            img: image_64
        },
        {
            id: 3,
            name: "Scorpio drives demand for Mahindra SUVs with highest monthly bookings in Q2",
            img: image_63
        },
        {
            id: 4,
            name: "New Kia Sonnet facelift unveil on Dec. 14, here are more details",
            img: image_65
        },
    ]

    const [displayItems, setDisplayItems] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            const newSize = window.innerWidth < 768 ? data.slice(2, 4) : data;
            setDisplayItems(newSize);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className=''>
                <section className="comparison_section mt-24 grid grid-cols-1 gap-y-5 xl:grid-cols-6 xl:gap-10">
                    <div className="left_section md:col-span-4">
                        <div className="container flex justify-between">
                            <div className="title">
                                <p className='text-primary text-xl font-medium mb-2 md:text-3xl'>Automotive Events</p>
                                <p className='text-slate-500'>See what happening new in auto</p>
                            </div>
                            <div className="md:flex hidden items-center gap-2 ">
                                <a href="#" className="text-[16px] font-normal text-gray whitespace-nowrap text-slate-600">View all</a>
                                <FiArrowUpRight className='text-slate-600 w-6 h-6' />
                            </div>
                        </div>
                        <hr className='my-3' />

                        <div className="lower-section mt-5 md:mt-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-5 ">
                                {displayItems.map((item, index) => {
                                    return (
                                        <div key={index} className="sm:border border-slate-200 rounded-xl sm:mt-0 md:w-[427px]">
                                            <div className="md:shrink-0">
                                                <img className="h-full w-full object-contain md:h-full  md:w-full" src={item.img} alt="" />
                                            </div>
                                            <div className="px-6 py-4">
                                                <div className=" text-slate-600 font-medium tracking-wider mb-3 md:text-lg">{item.name}</div>
                                                <div className="text-slate-700 sm:text-[14px] text-[12px] flex items-center justify-start gap-4 ">
                                                    <p className='flex items-center gap-1'><img src={user} alt="" /> Admin</p>
                                                    <p>.</p>
                                                    <p>4-wheeler</p>
                                                    <p>.</p>
                                                    <p>Apr 23, 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="right_section mt-10 md:col-span-2 md:mt-0">
                        <div className='grid grid-row-3 gap-10'>
                            <div className="subs w-full border border-slate-200 rounded-lg p-5">
                                <p className='text-primary text-xl font-medium mb-2 md:text-l'>Subscribe to our Newsletter</p>
                                <p className='text-slate-500'>Stay up to date with the latest news via email. We hate spam!</p>
                                <div className="email my-5">
                                    <label htmlFor="" className='text-gray-600 font-medium'>Email</label>
                                    <input type="email" className='rounded-md p-4 bg-gray-100 w-full h-[49px] mt-[6px]' />
                                </div>
                                <div className="chk flex ">
                                    <label htmlFor="" className=''>
                                        <input type="checkbox" className='mr-[6px] w-6 h-6 bg-gray-500' />
                                        <span className='absolute text-gray-600'>I have read and agree to the terms.</span>
                                    </label>
                                </div>
                                <div className="subs_btn mt-5">
                                    <button className='bg-primary py-[14px] px-5 text-white rounded-xl'>
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            <div className="disc">
                                <p className='text-primary text-xl font-medium mb-2 md:text-l'>Discover More</p>
                                <div className="flex flex-wrap gap-5 my-5">
                                    <button className='py-[10px] px-[14px] text-gray-600 rounded-lg border border-gray-300'>4 Wheeler</button>
                                    <button className='py-[10px] px-[14px] text-gray-600 rounded-lg border border-gray-300'>4 Wheeler</button>
                                    <button className='py-[10px] px-[14px] text-gray-600 rounded-lg border border-gray-300'>Bikes</button>
                                    <button className='py-[10px] px-[14px] text-gray-600 rounded-lg border border-gray-300'>Scooters</button>
                                    <button className='py-[10px] px-[14px] text-gray-600 rounded-lg border border-gray-300'>Comparisons</button>
                                    <button className='py-[10px] px-[14px] text-gray-600 rounded-lg border border-gray-300'>Scooters</button>
                                </div>
                            </div>
                            <div className="touch">
                                <p className='text-primary text-xl font-medium mb-5 md:text-l'>Get in Touch</p>
                                <div className='flex flex-wrap gap-y-5'>
                                    <button className='text-primary py-[10px] px-[14px] rounded-lg border border-gray-300 w-full text-left flex items-center'>
                                        <img src={ffb} alt="" />
                                        <span className='absolute pl-8'>Facebook</span>
                                    </button>
                                    <button className='text-primary py-[10px] px-[14px] rounded-lg border border-gray-300 w-full text-left flex items-center'>
                                        <img src={finsta} alt="" />
                                        <span className='absolute pl-8'>LinkedIn</span>
                                    </button>
                                    <button className='text-primary py-[10px] px-[14px] rounded-lg border border-gray-300 w-full text-left flex items-center'>
                                        <img src={ftwitter} alt="" />
                                        <span className='absolute pl-8'>Twitter</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Automative_events