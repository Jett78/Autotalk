import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import Lower_section from "./Lower_section"

function Recent_news() {
    return (
        <>
            <div>
                <section className="recent mt-20 mx-auto max-w-[1320px]">
                    <div className="container flex justify-between">
                        <div className="title">
                            <p className='text-purple text-xl font-medium font-playfair mb-2 md:text-3xl'>Recent News</p>
                            <p className='text-slate-500'>See what happening new in auto</p>
                        </div>
                        <div className="md:flex hidden items-center gap-2 ">
                            <a href="#" className="text-[16px] font-normal whitespace-nowrap text-slate-600">View all</a>
                            <FiArrowUpRight className='text-slate-600 w-6 h-6' />
                        </div>
                    </div>
                    <hr className='my-3 ' />
                    <Lower_section />
                </section>
            </div>
        </>
    )
}

export default Recent_news
