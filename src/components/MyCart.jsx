import React, { useContext } from 'react'
import jacket_wearing from '../assets/jacket_wearing.png'

import { addToCartContext } from '../context/addToCartContext'

const MyCart = () => {

  const a = useContext(addToCartContext)
  return (
    <section>
      <div className='ml-56 w-fit mt-10 px-9 pt-6 pb-10 bg-gray-50 drop-shadow-md'>
        <h1 className=' text-[36px] font-bold text-blue-800'>My Cart</h1>

        <hr className=' mb-12 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700' />

        {a.cart.map((cartItem, id) => (
          <div className='flex space-x-3 mb-10' key={id}>

            <div className='h-50 w-32'>
              <img src={cartItem.image} alt="" />
            </div>

            <div className='pl-10'>
              <p className='text-[28px] font-medium p-0 mt-2 mb-0'> {cartItem.name}</p>
              <p className=" text-[14px] font-normal ">Diamond Fancy store</p>

              <label htmlFor="quantity" className='text-[18px] font-medium pr-4 pt-12'>Quantity</label>
              <button className='text-[22px] px-2 font-medium bg-black text-white'> - </button>
              <input type="text" value={1} name="quantity" id="" className='w-8 h-8 mx-4 text-[22px] outline-none mt-8 rounded ' />
              <button className='text-[22px] px-2 py-0 font-medium bg-black text-white'> + </button>
              <div className='flex space-x-10'>
                <button className=' mt-8 py-1 px-4 text-[16px] bg-blue-600 text-white border-blue-400 border-l-2 rounded'>
                  Check Out
                </button>

                <button className=' mt-8 py-1 px-4 text-[16px] bg-red-600  text-white  border-blue-400 rounded'>
                  Remove
                </button>
              </div>


            </div>

            <div className='pl-60' >
              <p className='text-[24px] font-medium'>${cartItem.price}</p>
            </div>
          </div>  
          
         
          
          ))}



      



        {/* <div className='flex space-x-3'>
          <div className='h-50 w-32'>
            <img src={jacket_wearing} alt="" />
          </div>

          <div className='pl-10'>
            <p className='text-[28px] font-medium p-0 mt-2 mb-0'> Modern Black Leather Jacket for Mens</p>
            <p className=" text-[14px] font-normal ">Diamond Fancy store</p>

            <label htmlFor="quantity" className='text-[18px] font-medium pr-4 pt-12'>Quantity</label>
            <button className='text-[22px] px-2 font-medium bg-black text-white'> - </button>
            <input type="text" value={1} name="quantity" id="" className='w-8 h-8 mx-4 text-[22px] outline-none mt-8 rounded ' />
            <button className='text-[22px] px-2 py-0 font-medium bg-black text-white'> + </button>
            <div className='flex space-x-10'>
              <button className=' mt-8 py-1 px-4 text-[16px] bg-blue-600 text-white border-blue-400 border-l-2 rounded'>
                Check Out
              </button>

              <button className=' mt-8 py-1 px-4 text-[16px] bg-red-600  text-white  border-blue-400 rounded'>
                Remove
              </button>
            </div>


          </div>

          <div className='pl-60' >
            <p className='text-[24px] font-medium'>$50</p>
          </div>
        </div>
        <hr className=' h-px my-7 bg-gray-200 border-0 dark:bg-gray-400' /> */}

      </div>


    </section>
  )
}

export default MyCart