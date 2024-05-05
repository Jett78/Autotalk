import React from 'react'
import image_58 from '../assets/image 58.png'
import image_83 from '../assets/image 83.png'
import user from '../assets/user.png'
import { FiArrowUpRight } from "react-icons/fi";
import Lower_section from "./Lower_section"

function Comparisons_section() {
    return (
        <>
            <div>
                <section className="comparison_section mt-24">
                    <div className="container flex justify-between">
                        <div className="title">
                            <p className='text-primary text-xl font-medium mb-2 md:text-3xl'>Comparisons</p>
                            <p className='text-slate-500'>See what happening new in auto</p>
                        </div>
                        <div className="md:flex hidden items-center gap-2 ">
                            <a href="#" className="text-[16px] font-normal text-gray whitespace-nowrap text-slate-600">View all</a>
                            <FiArrowUpRight className='text-slate-600 w-6 h-6' />
                        </div>
                    </div>
                    <hr className='my-3' />
                    <section className='inner-section mt-10'>
                        <div className='gap-5 lg:flex'>
                            <div className="max-w-2xl bg-secondary border border-slate-200 rounded-xl overflow-hidden md:max-w-5xl">
                                <div className="p-5 lg:flex">
                                    <div className="mb-5 md:mr-10">
                                        <div className="text-slate-500 text-xs mb-4 md:text-base">4 wheelers</div>
                                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black md:text-2xl">Tata Motors veteran set to be Electra EV's first CTO</a>
                                        <p className="mt-2 block text-slate-500 text-xs md:text-sm">The Ratan Tata promoted EV powertrain solutions provider is learnt to be beefing up its engineering and technology teams as part of something that this company has never been entitled for but they have been doing for the sake of the world and company at the end of the day. It is always about humanity at the end so every what tata motors does is bring forward innovation...</p>
                                    </div>
                                    <div className="md:shrink-0">
                                        <img className="h-full w-full object-contain md:h-full xl:w-full" src={image_58} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <div className="md:shrink-0">
                                    <img className="h-full w-full object-contain md:h-full  md:w-full" src={image_83} alt="" />
                                </div>
                                <div className="mt-2">
                                    <div className="text-md text-slate-600 font-medium tracking-wider my-3 mt-12">2023 Honda CB350 launched in India, price starts at Rs 1,99,900 </div>
                                    <div className="flex text-slate-700 leading-snug gap-2 text-sm">
                                        <p className='flex'><img src={user} alt="" className='relative bottom-0.5 mr-1' /> Admin</p>
                                        <p>.</p>
                                        <p>2-wheeler</p>
                                        <p>.</p>
                                        <p>Apr 23, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Lower_section />
                    </section>
                </section >
            </div>
        </>
    )
}

export default Comparisons_section
