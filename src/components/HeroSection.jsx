import React, { useState } from 'react'
import heroSectionData from '../data/heroSectionData'

const Hero_section = () => {

  const [selected, setSelected ] = useState(0);
  const tLength = heroSectionData.length;


  return (
    <section className='h-full bg-purple-300 flex'>
       <div className='h-10 w-10 mt-72 ml-7 bg-purple-500 rounded-full hover:scale-105'  onClick={() => {
                selected === 0 ? setSelected (tLength - 1)
                : setSelected((prev) => prev - 1);
                }}>
                 
       <i className="fa-solid fa-chevron-left pr-1 text-[30px] text-white px-2 py-1"></i>
       </div>

       <div className='ml-[5rem] mt-48'>
            <p className=' text-white text-4xl font-bold'>
            {heroSectionData[selected].title}
            </p>
            <p className='mt-6 text-black  text-5xl font-bold'>
            {heroSectionData[selected].subTitle}
            </p>

            <p className='mt-6 pl-14 pt-2 w-[28rem] h-12 text-white  text-xl font-medium bg-purple-600'>
            {heroSectionData[selected].offer}
            </p>

            <div className='ml-[9rem] mt-8'>
                <button className='w-32 h-11 bg-blue-600 text-white font-medium text-xl  rounded-full hover:scale-105'>Buy Now</button>
            </div>
        
       </div>

       <div className='ml-28 w-[42rem] h-[40rem] hover:scale-[1.02] delay-75'>
        <img src= {heroSectionData[selected].image} alt="Male Jacket" className='w-[30rem] h-[35rem]' />
       </div>

       <div className='h-10 w-10 mt-72 float-right right-2  bg-purple-500 rounded-full hover:scale-105'  onClick={() => {
                selected === tLength -1 ? setSelected (0)
                : setSelected((prev) => prev + 1);
                }}>
       <i className="fa-solid fa-chevron-right pr-1 text-[30px] text-white px-2 py-1"></i>
       </div>
        
    </section>
  )
}

export default Hero_section