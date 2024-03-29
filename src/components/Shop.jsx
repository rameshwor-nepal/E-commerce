import React from 'react'
import star from "../assets/star.png"
import { Link } from 'react-router-dom'

import featuredShop from '../data/featuredShop'

const Shop = () => {
    return (
        <section className='bg-gray-100 h-fit mb-12 drop-shadow-md'>
            <div className='flex space-x-[65rem] pt-16'>
                <p className=' ml-20  text-black  text-3xl font-bold'>
                    Featured Shop
                </p>
                <button className=' w-28 h-9 mr-20  text-blue-600 font-normal  border-2 border-blue-600  rounded-full hover:border-none hover:bg-blue-600 hover:text-white'>
                    View More
                </button>
            </div>

            {/*  start of main div*/}
            <div className='grid grid-cols-4 gap-y-12 mt-12 ml-12 pb-16'>

                {featuredShop.map((featuredShop, id) => (

                    

                        <div className='bg-white drop-shadow-md pb-5 h-fit w-[20rem] hover:scale-[1.02] delay-75' key={id}>

                            <Link to={`shop-detail/${id}`}>

                            <div>

                           

                            <div className='mt-8 ml-4 mr-5 mb-5  bg-slate-300'>
                                <img src={featuredShop.image} alt="suppliers" className='h-[15rem] w-[20rem]' />
                            </div>
                            <div className='pl-4'>
                                <p className='mt-1'>
                                    {featuredShop.name}
                                </p>
                                <p className='mt-1'>
                                    {featuredShop.address}
                                </p>
                                <div className='flex space-x-1 mt-1'>
                                    <img src={star} alt="star" className=' h-4 w-4' />
                                    <img src={star} alt="star" className=' h-4 w-4' />
                                    <img src={star} alt="star" className=' h-4 w-4' />
                                </div>
                                <p className='mt-1'>
                                    <span className='font-medium'>{featuredShop.number_of_followers}</span> Followers
                                </p>
                            </div> 
                            
                            </div> 
                            </Link>

                        </div>

                   
                ))}
            </div>


        </section>
    )
}

export default Shop