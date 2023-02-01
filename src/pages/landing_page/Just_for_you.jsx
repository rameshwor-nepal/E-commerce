import React from 'react'
import pasal from "../../images/leather_shoes.jpg"
import star from "../../images/star.png"
import cart from "../../images/add-to-cart.svg"
import buy_button from "../../images/buy-button.svg"
import detail from "../../images/detail.svg"

const Just_for_you = () => {
  return (
    
    <section className='bg-gray-100 h-full mt-10 drop-shadow-md'>
            <div className='flex space-x-[65rem] pt-16'>
                <p className=' ml-20  text-black  text-3xl font-bold'>
                   Items Just For You
                </p>
                <button className=' w-28 h-9 mr-20  text-blue-600 font-normal  border-2 border-blue-600  rounded-full'>
                    View More
                </button>
            </div>

            <div className='bg-white drop-shadow-md ml-20 mt-20 h-[29rem] w-[18rem] '>
                <div className='mt-8 ml-6 mr-6 mb-5  pl-1 pt-6'>
                    <img src={pasal} alt="suppliers" className='h-[12rem] w-[15rem]' />
                </div>
                <div className='pl-6'>
                    <p className='mt-1 font-medium'>
                        Leather Shoes
                    </p>
                    <p className='mt-1 text-[12px] w-[17rem]'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
                        expedita eius minima maxime, laboriosam aut perspiciatis.

                    </p>
                    <div className='flex space-x-1 mt-2'>
                        <img src={star} alt="star" className=' h-4 w-4' />
                        <img src={star} alt="star" className=' h-4 w-4' />
                        <img src={star} alt="star" className=' h-4 w-4' />
                        <img src={star} alt="star" className=' h-4 w-4' />
                    </div>
                    <p className='mt-2'>
                        $<span className='font-medium'>120</span>
                    </p>

                    <div className='flex mt-2 space-x-6'>
                        <div className='rounded full border-2 border-purple-800 h-10 w-10'>
                            <img src={cart} alt="Add To Cart" className='h-8 w-8 pl-1 pt-1' />
                        </div>

                        <div className='rounded full border-2 border-purple-800 h-[3rem] w-[3rem]'>
                            <img src={buy_button} alt="Buy Button" className='h-9 w-9 pl-1 pt-1 fill-purple-800' />
                        </div>

                        <div className='rounded full border-2 border-purple-800 h-10 w-10'>
                            <img src={detail} alt="Detail" className='h-8 w-8 pl-1 pt-1' />
                        </div>
                    </div>
                </div>

            </div>


            <div className='bg-white drop-shadow-md ml-20 mt-10  h-[29rem] w-[18rem] '>
                <div className='mt-8 ml-6 mr-6 mb-5  pl-1 pt-6'>
                    <img src={pasal} alt="suppliers" className='h-[12rem] w-[15rem]' />
                </div>
                <div className='pl-6'>
                    <p className='mt-1 font-medium'>
                        Leather Shoes
                    </p>
                    <p className='mt-1 text-[12px] w-[17rem]'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
                        expedita eius minima maxime, laboriosam aut perspiciatis.

                    </p>
                    <div className='flex space-x-1 mt-2'>
                        <img src={star} alt="star" className=' h-4 w-4' />
                        <img src={star} alt="star" className=' h-4 w-4' />
                        <img src={star} alt="star" className=' h-4 w-4' />
                        <img src={star} alt="star" className=' h-4 w-4' />
                    </div>
                    <p className='mt-2'>
                        $<span className='font-medium'>120</span>
                    </p>

                    <div className='flex mt-2 space-x-6'>
                        <div className='rounded full border-2 border-purple-800 h-10 w-10'>
                            <img src={cart} alt="Add To Cart" className='h-8 w-8 pl-1 pt-1' />
                        </div>

                        <div className='rounded full border-2 border-purple-800 h-[3rem] w-[3rem]'>
                            <img src={buy_button} alt="Buy Button" className='h-9 w-9 pl-1 pt-1 fill-purple-800' />
                        </div>

                        <div className='rounded full border-2 border-purple-800 h-10 w-10'>
                            <img src={detail} alt="Detail" className='h-8 w-8 pl-1 pt-1' />
                        </div>
                    </div>
                </div>

            </div>


        </section>
        
  )
}

export default Just_for_you