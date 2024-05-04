import React from 'react'

const Productdetails = () => {
  return (
    <main>
        <h2 className="text-[24px] text-purple font-semibold border-b py-2">Details</h2>
        <div>
            <section>
                <h3>Product Information</h3>
                <table className='border w-[650px]'>
                    <tr className='border'>
                        <td className='p-4'>Brand</td>
                        <td>Image</td>
                    </tr>
                    <tr className='border'>
                        <td className='p-4'>Brand</td>
                        <td>Image</td>
                    </tr>
                    <tr className='border'>
                        <td className='p-4'>Brand</td>
                        <td>Image</td>
                    </tr>
                </table>
            </section>
            <section></section>
        </div>
    </main>
  )
}

export default Productdetails