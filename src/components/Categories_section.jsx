import React from 'react'
import data from "../js/mockData.js"
import left_arrow from "../assets/left_arrow.png";
import right_arrow from "../assets/right_arrow.png";

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
            <div>
                <section className='categories mt-24'>
                    <div className="container">
                        <div className="title">
                            <p className='text-primary text-xl font-medium mb-2 md:text-3xl'>Categories</p>
                            <p className='text-slate-500'>Read contents based on our categories</p>
                        </div>
                    </div>
                    <hr className='my-3' />
                    <div className="relative flex items-center mt-10">
                        <img src={left_arrow} alt="" onClick={slideLeft} className="absolute" />
                        <div id="slider" className='w-full h-full overflow-x-scroll flex whitespace-nowrap scroll-smooth no-scrollbar'>
                            {
                                data.map((item) => {
                                    return (
                                        <>
                                            <div className='mr-5 border border-[#dddadb]-800 items-center rounded-lg p-5'>
                                                <img className='cat_img m-[0_0_20px_0] w-[100px] h-[100px]' src={item.img} alt="" />

                                                <div className="flex text-slate-700 leading-snug text-lg">
                                                    <p>{item.title}</p>
                                                </div>
                                            </div>
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
