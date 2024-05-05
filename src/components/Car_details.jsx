import React from 'react'
import container from "../assets/container.png"
import fb from "../assets/fb.png"
import insta from "../assets/insta.png"
import twitter from "../assets/twitter.png"
import msg from "../assets/msg.png"
import views from "../assets/views.png"
import search from "../assets/search.png"
import ffb from "../assets/ffb.png"
import finsta from "../assets/finsta.png"
import ftwitter from "../assets/ftwitter.png"
import left_arrow_2 from "../assets/left_arrow_2.png"
import right_arrow_2 from "../assets/right_arrow_2.png"

function Car_details() {
    return (
        <>
            <div>
                <section className='details mt-24'>
                    <div className="banner">
                        <img src={container} alt="" />
                    </div>
                </section>
                <section className='md:grid grid-cols-14 gap-[36px] mt-10'>
                    <div className="media flex justify-between md:block">
                        <ul className='flex space-y-0 space-x-4 md:block md:space-y-4 md:space-x-0'>
                            <li><img src={fb} alt="" /></li>
                            <li><img src={insta} alt="" /></li>
                            <li><img src={twitter} alt="" /></li>
                        </ul>
                        <div className="views mt-[-14px] md:my-5 relative right-3">
                            <img src={views} alt="" />
                        </div>
                        <div className="msg">
                            <img src={msg} alt="" />
                        </div>
                    </div>
                    <div className="info md:col-span-9">
                        <p className="">
                            <span className='text-primary font-semibold h-0 md:text-[36px] inline-block'>P</span>orsche has launched the new third-gen Panamera sedan in India, just a day after the global unveil of the new car. The price range for the new Panamera starts at Rs 1.68 crore (ex-showroom). However, the brand has only listed the standard Panamera on its India website which comes with a V6 engine powering only the rear wheels.
                            Still immediately recognizable as a Panamera, the low-slung profile continues with this one. The front now comes withnew headlamps with new LED signature lighting. The long bonnet comes with two raised lines, to channel air. The central air intake is quite bigger and extends from the lower bumper to almost the lip. These new changes give the 2023 Porsche Panamera a refreshed and new look, helpful to differentiate it from the older car.

                            The 2023 Porsche Panamera comes with a heavily modernised cabin, with elements lifted from the new Cayenne and Taycan. The instrument panel is a 12.6-inch unit from the Cayenne, while the 12.3-inch infotainment display is from the Taycan. A third 10.9-inch display can be opted for, for the co-driver to check data or use media.

                            Other changes include a new steering, gear-lever on the steering column, and new and improved feel for the bits inside the cabin. Like the Taycan, the airflow from the C-shaped aircon vents can only be adjusted via the infotainment display. Again, a number of these features are an optional extra on the base Panamera. Porsche has addressed the space in the rear, by changing the geometry of the layout and adding comfier seats. These seats are electrically adjustable. There is a display at the rear to control the aircon, seats and media.

                            Internationally the Panamera is making headlines for its new hybrid powertrain. Offered with the Panamera Turbo E-Hybrid this system develops 680bhp and 930Nm of torque, dispatching a 0 to 100kmph sprint in just 3.2 seconds. This is courtesy of a new and more powerful electric motor which is integrated into the new dual-clutch transmission. The motor comes with 108bhp and also gets oil-cooling for better efficiency. This draws power from a 25.9kWh battery pack.

                            Porsche will offer two V6 Hybrids and two V8 Hybrids with the Panamera, but for India - the brand has brought in the standard V6 car for now, with no confirmation regarding the launch of Hybrids in India. Power output from this engine has not been revealed by Porsche.

                            Also offered with the new Panamera are two new suspension systems - semi-active and fully-active. The semi-active system uses a two chamber air spring setup which reacts to undulations very fast and are aided by shock absorbers which are independently controlled for rebound and compression. The fully active suspension uses a single chamber air spring, which draws power from the hybrid system and is superior compared to the semi-active system in terms of comfort.

                            Internationally the Panamera is making headlines for its new hybrid powertrain. Offered with the Panamera Turbo E-Hybrid this system develops 680bhp and 930Nm of torque, dispatching a 0 to 100kmph sprint in just 3.2 seconds. This is courtesy of a new and more powerful electric motor which is integrated into the new dual-clutch transmission. The motor comes with 108bhp and also gets oil-cooling for better efficiency. This draws power from a 25.9kWh battery pack.

                            Porsche will offer two V6 Hybrids and two V8 Hybrids with the Panamera, but for India - the brand has brought in the standard V6 car for now, with no confirmation regarding the launch of Hybrids in India. Power output from this engine has not been revealed by Porsche.

                            Also offered with the new Panamera are two new suspension systems - semi-active and fully-active. The semi-active system uses a two chamber air spring setup which reacts to undulations very fast and are aided by shock absorbers which are independently controlled for rebound and compression. The fully active suspension uses a single chamber air spring, which draws power from the hybrid system and is superior compared to the semi-active system in terms of comfort.
                        </p>
                        <div className="cate flex flex-wrap gap-5 mt-10">
                            <button className='py-[10px] px-[14px] text-primary text-sm rounded-xl bg-green-100'>Corporate</button>
                            <button className='py-[10px] px-[14px] text-primary text-sm rounded-xl bg-green-100'>Startup</button>
                            <button className='py-[10px] px-[14px] text-primary text-sm rounded-xl bg-green-100'>Business</button>
                            <button className='py-[10px] px-[14px] text-primary text-sm rounded-xl bg-green-100'>Wallet</button>
                            <button className='py-[10px] px-[14px] text-primary text-sm rounded-xl bg-green-100'>Fonepay</button>
                        </div>
                        <div className="pre_next flex justify-between mt-10">
                            <button className='py-[10px] px-[14px] text-gray-600 text-sm rounded-xl bg-gray-100 flex items-center gap-2'> <img src={left_arrow_2} alt="" /> Previous</button>
                            <button className='py-[10px] px-[14px] text-primary text-sm rounded-xl bg-blue-50 flex items-center gap-2'> Next Post<img src={right_arrow_2} alt="" /> </button>
                        </div>
                    </div>
                    <div className="search_subs mt-10 md:col-span-4 md:mt-0">
                        <div className='grid grid-row-4 gap-10'>
                            <div className="search w-full md:h-[120px] border border-slate-200 rounded-lg p-5 pb-10">
                                <p className='text-primary text-xl font-medium mb-2 md:text-l'>Search</p>
                                <form action="#">
                                    <div className="bg-gray-100 h-[44px] flex items-center justify-between px-4 rounded-xl">
                                        <input type="text" placeholder="Search..." className="font-light outline-none border-none bg-gray-100 rounded-lg" />
                                        <button className=" "><img src={search} alt="" /></button>
                                    </div>
                                </form>
                            </div>
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
                                    <button className='bg-primary py-[14px] px-5 text-white rounded-lg'>
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            <div className="disc">
                                <p className='text-primary text-xl font-medium mb-2 md:text-l'>Discover More</p>
                                <div className="flex flex-wrap gap-5 my-5 w-[260px]">
                                    <button className='py-[10px] px-[14px] text-gray-600 rounded-lg border border-gray-300'>4 Wheeler</button>
                                    <button className='py-[10px] px-[14px] text-gray-600 rounded-lg border border-gray-300'>Bikes</button>
                                    <button className='py-[10px] px-[14px] text-gray-600 rounded-lg border border-gray-300'>Scooters</button>
                                    <button className='py-[10px] px-[14px] text-gray-600 rounded-lg border border-gray-300'>Comparisons</button>
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

export default Car_details
