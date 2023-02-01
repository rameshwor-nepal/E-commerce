import React from 'react'
import jacket from "../../images/jacket.png"

const Hero_section = () => {
  return (
    <section className='h-full bg-purple-300 flex'>
       <div className='h-10 w-10 mt-72 ml-7 bg-purple-500 rounded-full'>
       <i className="fa-solid fa-chevron-left pr-1 text-[30px] text-white px-2 py-1"></i>
       </div>

       <div className='ml-[11rem] mt-48'>
            <p className='ml-[6rem] text-white text-4xl font-bold'>
                New Branded
            </p>
            <p className='mt-6 text-black  text-5xl font-bold'>
                Coming Stylist Wear
            </p>

            <p className='mt-6 pl-14 pt-2 w-[28rem] h-12 text-white  text-xl font-medium bg-purple-600'>
                Get 20% Discount on your first Order
            </p>

            <div className='ml-[9rem] mt-8'>
                <button className='w-32 h-11 bg-blue-600 text-white font-medium text-xl  rounded-full'>Buy Now</button>
            </div>
        
       </div>

       <div className='ml-24'>
        <img src= {jacket} alt="Male Jacket" className='w-[35rem] h-[42rem]' />
       </div>

       <div className='h-10 w-10 mt-72 ml-28 mr-7 bg-purple-500 rounded-full'>
       <i className="fa-solid fa-chevron-right pr-1 text-[30px] text-white px-2 py-1"></i>
       </div>
        
    </section>
  )
}

export default Hero_section