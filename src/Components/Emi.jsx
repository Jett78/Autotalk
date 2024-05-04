import React from 'react'

const Emi = () => {
  return (
   <main className='max-w-[650px] mb-6 text-gray'>
    <h2 className="text-[24px] text-purple font-semibold border-b py-3">Emi Calculator</h2>
    <form action="#">
      <section className='xl:flex grid justify-between mt-2'>
         <div className='grid gap-2'>
        <label htmlFor="brand">Brand</label>
        <select name="Brand" id="brand" className='xl:w-[300px] sm:w-[500px] lg:w-[100px] border border-gray rounded-lg p-3'>
            <option value="Tesla">Tesla</option>
        </select>
        </div>
       <div className='grid gap-2'>
       <label htmlFor="model">Model</label>
        <select name="model" id="model" className='xl:w-[300px] sm:w-[500px] lg:w-[100px] border border-gray rounded-lg p-3'>
            <option value="Tesla S">Tesla S</option>
        </select>
       </div>
         </section>

         <section className='my-4 grid gap-4 border-b pb-4'>
            <div className='grid gap-1'>
                <label htmlFor="Down Payment">Down Payment</label>
                <input type="text" className='bg-zinc-200 sm:w-[500px] w-[300px] lg:w-[650px] h-10 rounded-lg outline-none pl-4' />
            </div>
            <div className='grid gap-1'>
                <label htmlFor="interest">Bank Interest rate</label>
                <input type="text" className='bg-zinc-200 sm:w-[500px] w-[300px] lg:w-[650px] h-10 rounded-lg outline-none pl-4' />
            </div>
            <div className='grid gap-1'>
            <label htmlFor="loand-duration">Loan duration(Years)</label>
        <select name="model" id="model" className='sm:w-[500px] w-[300px] lg:w-[650px] border border-gray rounded-lg p-3'>
            <option value="1 Year">1 Year</option>
        </select>
            </div>
         </section>

         <section className='grid gap-4 border-b pb-4'>
             <div className='flex justify-between '>
                <p>Total Loan Amount</p>
                <p>Nrs.25,00,000</p>
             </div>
             <div className='flex justify-between '>
                <p>Payable Amount</p>
                <p>Nrs.35,00,000</p>
             </div>
             <div className='flex justify-between '>
                <p>You will pay extra</p>
                <p>Nrs.5,000</p>
             </div>
         </section>

         <footer className='md:w-[454px] w-[300px] h-[115px] border mx-auto mt-4 flex justify-center items-center '>
                  <div className='border-r pr-8'>
                    <h2 className='md:text-[36px] text-[24px]'>EMI</h2>
                    <p className='font-normal'>Per Month</p>
                  </div>

                  <h2 className='md:text-[36px] text-[24px] font-bold pl-8'>Nrs.40,000</h2>
         </footer>
    </form>
   </main>
  )
}

export default Emi