import React from 'react'
import Navbar from '../Components/Navbar'
import Emi from '../Components/Emi'
import Banks from '../Components/Banks'
import Autoloan from '../Components/Autoloan'

const Emipage = () => {
  return (
   <main>
    <div className='grid justify-center mt-[8em] '>
        <Emi/>
        <Banks/>
    </div>
    <Autoloan/>
   </main>
  )
}

export default Emipage