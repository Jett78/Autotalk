import React from 'react'
import data from "../js/mockData.js"
import left_arrow from "../assets/left_arrow.png";
import right_arrow from "../assets/right_arrow.png";
import { Link } from "react-router-dom"

function Categories_section() {

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <>
            <div className='mx-[20px]'>
                <section className='categories mt-24 mx-auto max-w-[1320px] '>
                    <div className="container">
                        <div className="title">
                            <p className='text-purple text-xl font-medium mb-2 md:text-3xl'>Categories</p>
                            <p className='text-slate-500'>Read contents based on our categories</p>
                        </div>
                    </div>
                    <hr className='my-3' />
                    <div className="relative flex items-center mt-10">
                        <img src={left_arrow} alt="" onClick={slideLeft} className="absolute cursor-pointer" />
                        <div id="slider" className='overflow-x-scroll flex whitespace-nowrap scroll-smooth no-scrollbar '>
                            {
                                data.map((item) => {
                                    return (
                                        <>
                                            <Link to="/Autotalk/products">
                                                <div className='mr-5 items-center min-w-[210px] h-[190px] rounded-2xl p-5 border border-zinc-200 bg-zinc-100 md:bg-white'>
                                                    <img className='cat_img m-[0_0_20px_0]' src={item.img} alt="" />

                                                    <div className="flex items-center justify-center leading-snug text-lg">
                                                        <p className=' text-slate-500'>{item.title}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </>
                                    )
                                }
                                )
                            }
                        </div>
                        <img src={right_arrow} alt="" onClick={slideRight} className='cursor-pointer' />
                    </div>
                </section>
            </div >
        </>
    )
}

export default Categories_section
