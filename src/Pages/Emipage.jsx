import React from 'react'
import Navbar from '../Components/Navbar'
import Emi from '../Components/Emi'
import Banks from '../Components/Banks'
import Autoloan from '../Components/Autoloan'

const Emipage = () => {
  return (
    <main className='md:pt-10 pt-2 mt-[2em]'>
      <div className='grid justify-center mt-[4em] '>
        <Emi />
        <Banks />
      </div>
      <Autoloan />
    </main>
  )
}

export default Emipage