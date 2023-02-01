import React from 'react'
import pasal from "../../images/pasal.png"
import star from "../../images/star.png"

const Shop = () => {
  return (
    <section className='bg-gray-100 h-full drop-shadow-md'>
        <div className='flex space-x-[65rem] pt-16'>
            <p className=' ml-20  text-black  text-3xl font-bold'>
                Featured Shop
            </p>
            <button className=' w-28 h-9 mr-20  text-blue-600 font-normal  border-2 border-blue-600  rounded-full'>
                View More
            </button>
        </div>

        <div className='bg-white drop-shadow-md ml-20 mt-20 h-[23rem] w-[21rem] '>
            <div className='mt-8 ml-6 mr-6 mb-5  pl-1 pt-6 bg-slate-300'>
                <img src={pasal} alt="suppliers" />
            </div>
            <div className='pl-6'>
                <p className='mt-1'>
                    Raju's Hardware and Computer Suppliers
                </p>
                <p className='mt-1'>
                    New-Road, Kathmandu, Nepal
                </p>
                <div className='flex space-x-1 mt-1'>
                    <img src={star} alt="star" className=' h-4 w-4' />
                    <img src={star} alt="star" className=' h-4 w-4' />
                    <img src={star} alt="star" className=' h-4 w-4' />
                </div>
                <p className='mt-1'>
                    <span className='font-medium'>120</span> Followers
                </p>
            </div>

        </div>

       

        <div className='bg-white drop-shadow-md  ml-20 mb-20  h-[23rem] w-[21rem] '>
            <div className='mt-8 ml-6 mr-6 mb-5  pl-1 pt-6 bg-slate-300'>
                <img src={pasal} alt="suppliers" />
            </div>
            <div className='pl-6'>
                <p className='mt-1'>
                    Raju's Hardware and Computer Suppliers
                </p>
                <p className='mt-1'>
                    New-Road, Kathmandu, Nepal
                </p>
                <div className='flex space-x-1 mt-1'>
                    <img src={star} alt="star" className=' h-4 w-4' />
                    <img src={star} alt="star" className=' h-4 w-4' />
                    <img src={star} alt="star" className=' h-4 w-4' />
                </div>
                <p className='mt-1'>
                    <span className='font-medium'>120</span> Followers
                </p>
            </div>

        </div>

       </section>

    
  )
}

export default Shop