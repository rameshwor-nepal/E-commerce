import React, { useContext } from 'react'
import star from "../assets/star.png"
import cart from "../assets/add-to-cart.svg"
import buy_button from "../assets/buy-button.svg"
import detail from "../assets/detail.svg"
import { Link } from 'react-router-dom'

import  featuredProductsData  from '../data/featuredProductsData'

import { addToCartContext } from '../context/addToCartContext'


const Featured_products = () => {

    const a = useContext(addToCartContext)
    
    return (
        <section className='bg-gray-100 h-fit mb-12 drop-shadow-md'>
            <div className='flex space-x-[65rem] pt-16'>
                <p className=' ml-20  text-black  text-3xl font-bold'>
                    Featured Products
                </p>
                <button className=' w-28 h-9 mr-20  text-blue-600 font-normal  border-2 border-blue-600  rounded-full'>
                    View More
                </button>
            </div>

            {/* start of main div */}

        <div className='grid grid-cols-4 gap-y-12 gap-x-0 mt-12 ml-12 pb-16'>

            {featuredProductsData.map((featuredProduct, id) => (


            <div className='bg-white drop-shadow-md pb-5 h-fit  w-[18rem] ' key={id}>

                <div className='m-6  pl-1 pt-6'>
                    <img src={featuredProduct.image} alt="suppliers" className='h-[12rem] w-[15rem]' />
                </div>

             <Link to={`detail-page/${id}`}>

                <div className='pl-6'>
                    <p className='mt-1 font-medium'>
                        {featuredProduct.name}
                    </p>
                    <p className='mt-1 text-[12px] w-[16rem] h-[50px] overflow-hidden'>
                       {featuredProduct.description}

                    </p>
                    <div className='flex space-x-1 pt-2'>
                        <img src={star} alt="star" className=' h-4 w-4' />
                        <img src={star} alt="star" className=' h-4 w-4' />
                        <img src={star} alt="star" className=' h-4 w-4' />
                        <img src={star} alt="star" className=' h-4 w-4' />
                    </div>
                    <p className='mt-2'>
                        $<span className='font-medium'>{featuredProduct.price}</span>
                    </p>  
                    
                    </div>
                </Link>

                    <div className='flex mt-2 pl-6 space-x-6'>
                        <Link 
                        to={"mycart/"}
                    
                        >
                        
                            <button className='rounded full border-2 border-purple-800 h-10 w-10'
                                onClick={ () => a.addToCart(featuredProduct)} >
                                <img src={cart} alt="Add To Cart" className='h-8 w-8 pl-1 pt-1' />
                            </button>
                        </Link>
                     

                        <div className='rounded full border-2 border-purple-800 h-[3rem] w-[3rem]' >
                            <img src={buy_button} alt="Buy Button" className='h-9 w-9 pl-1 pt-1 fill-purple-800' />
                        </div>

                        <div className='rounded full border-2 border-purple-800 h-10 w-10'>
                            <img src={detail} alt="Detail" className='h-8 w-8 pl-1 pt-1' />
                        </div>
                    </div>
              
              
            </div>
     ))}
        </div>

        </section>
        
    )
}

export default Featured_products