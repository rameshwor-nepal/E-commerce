import React from 'react'

const Banner = () => {
  return (
    <div>
      <div className=' my-10  h-[10rem] bg-purple-400 flex space-x-40 '>
        <div className='ml-64 mt-[2.4rem]' >
         <i className="fa-solid fa-recycle text-5xl text-blue-600 pl-10"></i>
              <p className='text-[24px] font-medium'>
                Re-cyclable
              </p>
        </div>

        <div className=' mt-[2.4rem]' >
        <i className="fa-solid fa-biohazard text-5xl text-blue-600 pl-10 "></i>
              <p className='text-[24px] font-medium'>
                Degradable
              </p>
        </div>

        <div className=' mt-[2.4rem]' >
        <i className="fa-brands fa-cotton-bureau text-5xl text-blue-600 pl-5"></i>
              <p className='text-[24px] font-medium'>
                Pure Silk
              </p>
        </div>

        <div className=' mt-[2.4rem]' >
        <i className="fa-solid fa-leaf text-5xl text-blue-600 pl-14 "></i>
              <p className='text-[24px] font-medium'>
                100% Natural
              </p>
        </div>
      </div>
    </div>
  )
}

export default Banner