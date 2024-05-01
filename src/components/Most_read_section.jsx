import React from 'react'
import image_58 from '../assets/image 58.png'
import image_83 from '../assets/image 83.png'
import image_52 from '../assets/image 52.png'
import image_59 from '../assets/image 59.png'
import image_54 from '../assets/image 54.png'
import user from '../assets/user.png'

function Most_read_section() {
    return (
        <>
            <div>
                <section className="most-read mt-24">
                    <div className="container">
                        <div className="title">
                            <p className='text-primary text-xl font-medium mb-2 md:text-3xl'>Most Read</p>
                            <p className='text-slate-500'>See what people are reading most</p>
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
                        <div className="lower-section mt-5 md:mt-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                                <div className="sm:border border-slate-200 rounded-xl">
                                    <div className="md:shrink-0">
                                        <img className="h-full w-full object-contain md:h-full  md:w-full" src={image_52} alt="" />
                                    </div>
                                    <div className="mt-3 sm:p-2 md:p-5">
                                        <div className=" text-slate-600 font-medium tracking-wider mb-3 md:text-lg">2023 Porsche Panamera launched in India, priced from Rs 1.68 crore</div>
                                        <div className="flex ... text-slate-700 leading-snug text-xs gap-2 md:text-sm md:gap-3">
                                            <p className='flex'><img src={user} alt="" className='relative bottom-1 md:bottom-0.5 mr-1' /> Admin</p>
                                            <p>.</p>
                                            <p>4-wheeler</p>
                                            <p>.</p>
                                            <p>Apr 23, 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 sm:border border-slate-200 rounded-xl sm:mt-0">
                                    <div className="md:shrink-0">
                                        <img className="h-full w-full object-contain md:h-full  md:w-full" src={image_59} alt="" />
                                    </div>
                                    <div className="mt-3 sm:p-2 md:p-5">
                                        <div className="text-slate-600 font-medium tracking-wider mb-3 md:text-lg">Ferrari SF90 XX Stradale makes debut at Casa Ferrari Abu Dhabi</div>
                                        <div className="flex ... text-slate-700 leading-snug text-xs gap-2 md:text-sm md:gap-3">
                                            <p className='flex'><img src={user} alt="" className='relative bottom-1 md:bottom-0.5 mr-1' /> Admin</p>
                                            <p>.</p>
                                            <p>4-wheeler</p>
                                            <p>.</p>
                                            <p>Apr 23, 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 sm:border border-slate-200 rounded-xl sm:mt-0">
                                    <div className="md:shrink-0">
                                        <img className="h-full w-full object-contain md:h-full  md:w-full" src={image_54} alt="" />
                                    </div>
                                    <div className="mt-3 sm:p-2 md:p-5">
                                        <div className=" text-slate-600 font-medium tracking-wider mb-3 md:text-lg">New Kia Sonnet facelift unveil on Dec. 14, here are more details</div>
                                        <div className="flex text-slate-700 leading-snug text-xs gap-2 md:text-sm md:gap-3">
                                            <p className='flex'><img src={user} alt="" className='relative bottom-1 md:bottom-0.5 mr-1' /> Admin</p>
                                            <p>.</p>
                                            <p>4-wheeler</p>
                                            <p>.</p>
                                            <p>Apr 23, 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section >
            </div >
        </>
    )
}

export default Most_read_section
