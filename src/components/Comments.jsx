import React from 'react'
import cmnts_user from "../assets/cmnts_user.png"

function Comments() {
    return (
        <>
            <div className="comment mt-10">
                <section>
                    <div className="user_card border mb-10 border-slate-300 rounded-xl p-5 flex items-center gap-[10px] w-full md:w-[475px]">
                        <img src={cmnts_user} alt="" />
                        <div className="detail">
                            <p className='text-gray-600 mb-[6px]'>Admin</p>
                            <p className='text-slate-500 text-sm'>Admin is a grater writer and photo vlogger. He is interested in writing and travelling a lot.</p>
                        </div>
                    </div>
                    <div className="cmnt_section">
                        <form action="">
                            <div className="cmnt">
                                <p className='text-gray-500 mb-[6px]'>Comment</p>
                                <textarea name="" id="" cols="30" rows="10" className='bg-gray-100 w-full'></textarea>
                            </div>
                            <div className="name_email md:grid grid-cols-2 gap-5 mt-5">
                                <div className="name">
                                    <p className='text-gray-500 mb-[6px]'>Name</p>
                                    <input type="text" className='bg-gray-100 h-[49px] w-full' />
                                </div>
                                <div className="name">
                                    <p className='text-gray-500 mb-[6px]'>Email</p>
                                    <input type="email" className='bg-gray-100 h-[49px] w-full' />
                                </div>
                            </div>
                            <div className="chk flex mt-5">
                                <label htmlFor="" className=''>
                                    <input type="checkbox" className='mr-[6px] w-6 h-6 bg-gray-500' />
                                    <span className='absolute text-gray-600 '>Save my name, email, and website in this browser for the next time I comment.</span>
                                </label>
                            </div>
                            <div className="post_btn mt-5">
                                <button className='bg-primary py-[14px] px-5 text-white rounded-xl'>
                                    Post Comment
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Comments
