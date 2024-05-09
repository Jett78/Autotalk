import React from 'react'
import { CiSearch } from "react-icons/ci";
import { ImCancelCircle } from "react-icons/im";


const Hamburgermenu = ({isOpen,setIsOpen}) => {
  return (
    <main className={`bottom-0 w-full min-h-screen bg-purple mt-8 fixed z-50 ${isOpen?"block":"hidden"}`}>
        <div className='max-w-[1300px] mx-auto p-2 md:mt-20 mt-4 text-white'>
            <div className='flex justify-between '>
                <img src="./auto 1.png" alt="img" className='w-40'/>

                <div className='flex gap-6 text-3xl '>
                <CiSearch className='cursor-pointer' />
                <ImCancelCircle  onClick={() => setIsOpen(!isOpen)} />
                </div>
            </div>
            <h2 className='text-center text-2xl border-b py-4'>Categories</h2>
            <div className='flex flex-wrap gap-6 justify-between  text-zinc-300 mt-6 md:text-xl font-normal'>
                <section className='grid md:gap-12 gap-4'>
                    <h2>Auto tech and Innovation</h2>
                    <h2>Automotive Lifestyles</h2>
                    <h2>Xar Buying Guides</h2>
                </section>
                <section className='grid md:gap-12 gap-4'>
                    <h2>Comparisons</h2>
                    <h2>Automotive Events</h2>
                    <h2>Motorsports</h2>
                    <h2>4 wheeler</h2>
                </section>
                <section className='grid md:gap-12 gap-4'>
                    <h2>Vintage Collection</h2>
                    <h2>Customization and Modifications</h2>
                    <h2>DIY and Maintainance Tips</h2>
                    <h2>Bikes</h2>
                </section>
            </div>

            <footer>
                <div className='flex  border-b justify-between'>
                    <img src="./cars/redcar.png" alt="car" className='w-60 h-40 md:block hidden' />
                    <img src="./cars/blackcar.png" alt="car" className='w-60 h-40 md:block hidden' />
                </div>
                <div>
                    <p className='text-center font-normal'>2023 Comapny|All Rights Resesrved</p>
                </div>
            </footer>
        </div>
        </main>
  )
}

export default Hamburgermenu