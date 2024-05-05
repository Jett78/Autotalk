import React from 'react'
import Navbar from '../Components/Navbar'
import Emi from '../Components/Emi'
import Banks from '../Components/Banks'
import Autoloan from '../Components/Autoloan'

const Emipage = () => {
  return (
   <main>
    <Navbar/>
    <div className='grid justify-center'>
        <Emi/>
        <Banks/>
    </div>
    <Autoloan/>
   </main>
  )
}

export default Emipage