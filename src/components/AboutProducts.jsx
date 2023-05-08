import React from 'react'
import star from '../assets/star.png'
import two_jacket from '../assets/two_jacket.png'
import jacket_wearing from '../assets/jacket_wearing.png'

import { useParams } from 'react-router-dom'
import featuredProductsData  from '../data/featuredProductsData'
import AskedQuestion from './AskedQuestion'
import Banner from './Banner'


const About_products = () => {

  const {id } = useParams();
  const product = featuredProductsData.find((product) => product.id === id )
  const { image, description, name, price } = product

  return (
    <div>
      <div className='flex space-x-24 mt-16 ml-28 '>
          <div>
              <div className='drop-shadow-md h-[22rem] w-[28rem] bg-white  ml-40 hover:bg-yellow-200'>
                  <img src={image} alt="Jacket 2" className='h-[22rem] w-[18rem] ml-[4.5rem]'/>
              </div>

              <div className='flex space-x-8 mt-8' >
                  <div className='drop-shadow-md h-[8rem] w-[8rem] bg-white ml-40 hover:bg-blue-200' >
                      <img src={image} alt="Jacket 2" className='h-[8rem] w-[6rem] ml-4 '/>
                  </div>
                  <div className='drop-shadow-md h-[8rem] w-[8rem] bg-white ml-40 hover:bg-blue-200'>
                      <img src={image} alt="Jacket 2" className='h-[8rem] w-[6rem] ml-4 '/>
                  </div>
                  <div className='drop-shadow-md h-[8rem] w-[8rem] bg-white ml-40 hover:bg-blue-200'>
                      <img src={image} alt="Jacket 2" className='h-[8rem] w-[6rem] ml-4 '/>
                  </div>
              </div>

              <div className='mt-24 drop-shadow-md h-[34.5rem] w-[38.5rem] bg-yellow-200  ml-30 hover:bg-blue-200'>

                <img src= {two_jacket} alt="Two Jacket" className='pt-[3.25rem] pl-10' />

              </div>

              
          </div>

          <div >

              <p className='text-4xl font-medium'>
               {name}
              </p>

              <div className='flex space-x-1 mt-8'>
                        <img src={star} alt="star" className=' h-4 w-4' />
                        <img src={star} alt="star" className=' h-4 w-4' />
                        <img src={star} alt="star" className=' h-4 w-4' />
                        <img src={star} alt="star" className=' h-4 w-4' />
                        <img src={star} alt="star" className=' h-4 w-4' />
                        <p className='pl-3 -translate-y-1'>
                          50 reviews
                        </p>
              </div>
              <p className='text-[16px] mt-6'>
                {description}
              </p>
              <p className='text-[20px] mt-6'>
                Rs. <span>{price}</span>
                <span>
                  <button className='w-20 h-7 ml-20 bg-red-500 text-white font-normal text-[16px]  rounded-full'> Sale</button>
                </span>
              </p>

              <p className='text-[16px] mt-6'>
                Quantity
              </p>

              <button className='w-48 h-12 mr-20 mt-3  text-blue-600 font-normal  border-2 border-blue-600  rounded-full'> 

                <span className='mr-10 text-[30px] '>
                  -
                </span>

                <span  className='mr-10 text-[30px] '>
                  2
                </span>

                <span  className=' text-[30px] '>
                  +
                </span>

              </button>

              <div>
                <button className='w-[20rem] h-11 mr-20 mt-10  text-blue-600 font-normal  border-2 border-blue-600  rounded-full'>

                  Add To Cart

                </button>              
               </div>

               <div>
                  <button className='w-[20rem] h-11 mr-20 mt-4 bg-blue-600 text-white font-normal   rounded-full'>

                    Buy with <span className='text-2xl font-medium'> E-sewa</span>

                  </button> 
                  <p className='ml-20 mt-4 underline underline-offset-8 '>

                    More payment Options

                  </p>             
               </div>

{/* For the discription of products */}
            <div>             

              <p className='text-4xl font-medium mt-16'>
                Why people are loving this products?
              </p>

              <p className='mt-5 text-[16px] font-normal w-[40rem] '>
                A leather jacket is an outerwear garment made from durable leather with a waist-length cut. 
                The durability and warmth of leather offer broad utility, and even the most basic leather 
                jacket styles have aesthetic appeal. Leather jackets are traditionally cowhide, but they can 
                also be goatskin, lambskin, or sheepskin.

              <br /><br />
                In addition to being luxurious and versatile, a well-cut leather jacket will look great for years 
                to come. It's important to recognize that leather jackets encompass three crucial qualities: they're 
                durable, comfortable and impeccably stylish.
              </p>

              <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

              <div>
                <span>
                <i className="fa-solid fa-leaf"></i>
                </span>

                <span className='ml-4 text-[20px] font-medium '>
                  Fast Facts
                </span>

                <span className='float-right '>
                <i className="fa-solid fa-chevron-down"></i>
                </span>

                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              </div>

              <div>
                <span>
                <i className="fa-brands fa-canadian-maple-leaf"></i>
                </span>

                <span className='ml-4 text-[20px] font-medium '>
                  Ingredients
                </span>

                <span className='float-right '>
                <i className="fa-solid fa-chevron-down"></i>
                </span>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              </div>

              <div>
                <span>
                <i className="fa-solid fa-circle-question"></i>
                </span>

                <span className='ml-4 text-[20px] font-medium '>
                  How to use
                </span>

                <span className='float-right'>
                <i className="fa-solid fa-chevron-down"></i>
                </span>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              </div>

              <div>
                <span>
                <i className="fa-solid fa-truck-fast"></i>
                </span>

                <span className='ml-4 text-[20px] font-medium '>
                  Shipping
                </span>

                <span className='float-right'>
                <i className="fa-solid fa-chevron-down"></i>
                </span>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              </div>

              <div>
                <span>
                <i className="fa-solid fa-arrow-rotate-left"></i>
                </span>

                <span className='ml-4 text-[20px] font-medium '>
                  Return Policy
                </span>

                <span className='float-right'>
                <i className="fa-solid fa-chevron-down"></i>
                </span>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              </div>
              
              
                            
            </div>



          </div>
      </div>

      {/* banner */}

        <Banner />

      {/*  Frequently asked questions */}

      <AskedQuestion />

    </div>
  )
}

export default About_products