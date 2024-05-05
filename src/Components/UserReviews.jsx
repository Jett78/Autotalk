import React from 'react'
import {user} from "../db/UserData"
import Reviewcard from './Reviewcard'
import { FaRegStar } from "react-icons/fa";


const UserReviews = () => {
  return (
   <main className=' text-gray px-2 max-w-[1320px] mx-auto mt-8 ' >
     <h2 className="text-[24px] text-purple font-semibold border-b py-3">User Reviews</h2>
      <div className='flex flex-wrap gap-8 justify-center py-6 '>
      <section>
          <div className='grid gap-2'>
            {user.map((user,index) => (
              <Reviewcard key={index} user={user}/>
            ))}
          </div>
      </section>

      <section>
        <form action="#" className='grid gap-4 '>
          <div className='grid gap-2'>
             <label htmlFor="Review">Review</label>
             <textarea name="review" id="review"  className='bg-zinc-200 sm:w-[600px] w-[300px] lg:w-[650px] h-[110px] p-2 rounded-lg outline-none pl-4'></textarea>
          </div>
          <div className='grid gap-2'>
              <label htmlFor="Name">Name</label>
              <input type="text" className='bg-zinc-200 sm:w-[600px] w-[300px] lg:w-[650px] h-10 rounded-lg outline-none pl-4' />
          </div>
          <div className='grid gap-2'>
              <label htmlFor="Email">Email</label>
              <input type="email" className='bg-zinc-200 sm:w-[600px] w-[300px] lg:w-[650px] h-10 rounded-lg outline-none pl-4' />
          </div>

          <div className='grid gap-3'>
            <p>Rating</p>
            <div className='flex gap-2'>
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            </div>
               <div className='flex gap-2 sm:w-[600px] w-[300px] lg:w-[650px] '>
               <input type="checkbox" />
            <label htmlFor="checkbox" className='font-normal '>Save my name, email, and website in this browser for the next time I comment.</label>
               </div>
          </div>
          <button className='md:w-[120px] w-[110px] md:h-[43px] h-[38px] md:text-[16px] text-[14px] rounded-xl bg-purple text-white font-normal'>Post review</button>
        </form>
      </section>
      </div>
   </main>
  )
}

export default UserReviews