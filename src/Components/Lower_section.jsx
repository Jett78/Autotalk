import React from 'react'
import image_52 from '../assets/image 52.png'
import image_59 from '../assets/image 59.png'
import image_54 from '../assets/image 54.png'
import user from '../assets/user.png'
import { Link } from "react-router-dom";

function Lower_section() {
    return (
        <>
            <div className="lower-section mt-5 md:mt-10 ">
                <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/Autotalk/4-Wheeler">
                        <div className="mt-10 rounded-xl sm:mt-0 md:w-[427px] h-[329px]">
                            <div className="md:shrink-0">
                                <img className="h-full w-full object-contain md:h-full  md:w-full" src={image_52} alt="" />
                            </div>
                            <div className="px-6 py-4 shadow-lg">
                                <div className=" sm:text-[16px] text-[14px] text-gray ">2023 Porsche Panamera launched in India, priced from Rs 1.68 crore</div>
                                <div className="sm:text-[14px] text-[10px] font-normal flex items-center justify-start gap-4 pt-2 text-gray ">
                                    <p className='flex items-center gap-1'><img src={user} alt="" /> Admin</p>
                                    <p>4-wheeler</p>
                                    <p>Apr 23, 2023</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <div className="mt-10  rounded-xl sm:mt-24 md:w-[427px] h-[329px] md:mt-0">
                        <div className="md:shrink-0">
                            <img className="h-full w-full object-contain md:h-full  md:w-full" src={image_59} alt="" />
                        </div>
                        <div className="px-6 py-4 shadow-lg">
                            <div className=" sm:text-[16px] text-[14px] text-gray ">Ferrari SF90 XX Stradale makes debut at Casa Ferrari Abu Dhabi</div>
                            <div className="sm:text-[14px] text-[10px] font-normal flex items-center justify-start gap-4 pt-2 text-gray ">
                                <p className='flex items-center gap-1'><img src={user} alt="" /> Admin</p>
                                <p>4-wheeler</p>
                                <p>Apr 23, 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 hidden md:block rounded-xl sm:mt-24 md:w-[427px] h-[329px] md:mt-0">
                        <div className="md:shrink-0">
                            <img className="h-full w-full object-contain md:h-full  md:w-full" src={image_54} alt="" />
                        </div>
                        <div className="px-6 py-4 shadow-lg">
                            <div className=" sm:text-[16px] text-[14px] text-gray ">New Kia Sonnet facelift unveil on Dec. 14, here are more details</div>
                            <div className="sm:text-[14px] text-[10px] font-normal flex items-center justify-start gap-4 pt-2 text-gray ">
                                <p className='flex items-center gap-1'><img src={user} alt="" /> Admin</p>
                                <p>4-wheeler</p>
                                <p>Apr 23, 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Lower_section
