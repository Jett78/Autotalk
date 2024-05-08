import React from 'react'

const Productdetails = ({tesla}) => {
    const{brand,model,releasedate,engine,milage,Transmission,brakes,seat,weigth,battery,range} = tesla;
  return (
    <main className='xl:px-0 px-4 max-w-[1320px] mx-auto '>
        <h2 className="text-[24px] text-purple font-semibold border-b py-3">Details</h2>
         {/* first row tables */}
         <div className='flex flex-wrap justify-center gap-4 text-gray'>
            <section>
                <h3 className='py-4'>Product Information</h3>
                <table className='tableborder  sm:w-[500px] w-[300px] lg:w-[650px] '>
                    <tr className='tableborder'>
                        <td className='p-4'>Brand</td>
                        <td>{brand}</td>
                    </tr>
                    <tr className='tableborder'>
                        <td className='p-4'>Model</td>
                        <td>{model}</td>
                    </tr>
                    <tr className='tableborder '>
                        <td className='p-4'>Release Date</td>
                        <td>{releasedate}</td>
                    </tr>
                </table>
            </section>
            <section>
                <h3 className='py-4'>Power and Performance</h3>
                <table className='tableborder  sm:w-[500px] w-[300px] lg:w-[650px]'>
                    <tr className='tableborder'>
                        <td className='p-4'>Engine Capacity</td>
                        <td>{engine} bhp</td>
                    </tr>
                    <tr className='tableborder'>
                        <td className='p-4'>Milage</td>
                        <td>{milage} km/hr</td>
                    </tr>
                    <tr className='tableborder'>
                        <td className='p-4'>Transmission</td>
                        <td>{Transmission}</td>
                    </tr>
                </table>
            </section>
        </div>

        {/* second row tables */}
        <div className='flex flex-wrap justify-center gap-4 mt-6 text-gray'>  
            <section>
                <h3 className='py-4'>Key Highlights</h3>
                <table className='tableborder  sm:w-[500px] w-[300px] lg:w-[650px]'>
                    <tr className='tableborder '>
                        <td className='p-4'>Brakes</td>
                        <td>{brakes}</td>
                    </tr>
                    <tr className='tableborder '>
                        <td className='p-4'>Battery</td>
                        <td>{battery}</td>
                    </tr>
                    <tr className='tableborder'>
                        <td className='p-4'>Range</td>
                        <td>{range}</td>
                    </tr>
                </table>
            </section>
            <section>
                <h3 className='py-4'>Key Highlights</h3>
                <table className='tableborder  sm:w-[500px] w-[300px] lg:w-[650px]'>
                    <tr className='tableborder'>
                        <td className='p-4'>Seat Capacity</td>
                        <td>{seat}</td>
                    </tr>
                    <tr className='tableborder'>
                        <td className='p-4'>Kerb Weigth</td>
                        <td>{weigth} Kg</td>
                    </tr>
                    <tr className='tableborder'>
                        <td className='p-4'>Battery</td>
                        <td>{battery}</td>
                    </tr>
                </table>
            </section>
        </div>
    </main>
  )
}

export default Productdetails