import React from 'react'
import pasal from "../../images/leather_shoes.jpg"

const shippingAddress = () => {
  return (
    <div className='flex'>
        <div>
            <div className='ml-28 pt-10'>
                <p className='my-3 text-[18px]'>
                    Contact Information
                </p>
                
                <input 
                    type="email" name="email" 
                    placeholder='Email Address' 
                    className="h-10 w-[40rem] pl-3 border-2 border-purple-300 rounded-md placeholder:text-[14px]"
                /> 
                
                <br />

                <input type="checkbox" name="emailCheckbox" className='my-3 mr-2' />
                <label htmlFor="emailCheckbox" className='text-[14px]'>Email me for news and offers</label>

            </div>


            <div className='ml-28 mt-10'> 
                <p className='my-3 text-[18px]'>
                    Shipping Address
                </p>


                <div>
                    <select 
                        id="address"
                        className="h-10 w-[40rem] my-5 pl-3 border-2 border-purple-300 rounded-md placeholder:text-[14px]"
                    >
                        <option value="Nepal">Nepal</option>
                        <option value="Kathmandu">Kathmandu</option>
                        <option value="Kapan">Kapan</option>
                        <option value="Milanchowk">Milanchowk</option>
                    </select>
                    <br />

                    <input 
                        type="text" name="firstName" 
                        placeholder='First Name' 
                        className="h-10 w-[18.75rem] mr-5 pl-3 border-2 border-purple-300 rounded-md placeholder:text-[14px]"
                    /> 

                    <input 
                        type="text" name="lastName" 
                        placeholder='Last Name' 
                        className="h-10 w-[20rem] mb-5 pl-3 border-2 border-purple-300 rounded-md placeholder:text-[14px]"
                    /> <br />

                    <input 
                        type="text" name="Address" 
                        placeholder='Address' 
                        className="h-10 w-[40rem] mb-5 pl-3 border-2 border-purple-300 rounded-md placeholder:text-[14px]"
                    /> <br />

                    <input 
                        type="text" name="city" 
                        placeholder='City' 
                        className="h-10 w-[13.75rem] mr-5 pl-3 border-2 border-purple-300 rounded-md placeholder:text-[14px]"
                    />
                    <select 
                        id="address"
                        className="h-10 w-[12rem] mr-5 pl-3 border-2 border-purple-300 rounded-md placeholder:text-[14px]"
                    >
                        <option value="Nepal">Baneshwor</option>
                        <option value="Kathmandu">Maitighar</option>
                        <option value="Kapan">Kapan</option>
                        <option value="Milanchowk">Milanchowk</option>
                    </select> 

                    <input 
                        type="number" name="zipCode" 
                        placeholder='Zip Code' 
                        className="h-10 w-[12rem] mr-5 pl-3 border-2 border-purple-300 rounded-md placeholder:text-[14px]"
                    /> <br /> 

                    
                <input type="checkbox" name="informationCheckbox" className='my-4 mr-2' />
                <label htmlFor="informationCheckbox" className='text-[14px]'>Store this information for next time</label>

                </div>

                <button className='w-[12rem] h-11 mb-14  mt-5  text-white bg-blue-600 rounded-full'>
                    Continue to Shipping
                </button>


            </div>
        
        </div>
        {/* end for left shipping address */}

        
        <div className='ml-[10rem] mt-10 '>   {/* start for the right element */}

            <p className='pl-[10rem] text-[24px] font-medium'>Your items</p>

            <div className='flex items-center space-x-4 mt-6' >  {/*  item you have in your cart */}
                <span >
                    <img src={pasal} alt="suppliers" className='h-[4rem] w-[4rem]' />
                </span>
                <p>
                    Leather Shoe
                </p>
                <p className='pl-48'>
                    $99.00
                </p>
            </div>

            <div className='flex items-center space-x-4 mt-6' >  {/*  item you have in your cart */}
                <span >
                    <img src={pasal} alt="suppliers" className='h-[4rem] w-[4rem]' />
                </span>
                <p>
                    Leather Shoe
                </p>
                <p className='pl-48'>
                    $99.00
                </p>
            </div>

            <hr className='my-7' />

            <input 
                        type="text" name="firstName" 
                        placeholder='Discount Code' 
                        className="h-10 w-[10rem] mr-5 pl-3 border-2  rounded-md placeholder:text-[14px]"
             />
             <button className='w-[6rem] h-9   text-white bg-gray-600 rounded-full'>
                   Apply
            </button>

            <hr className='my-7' />

            <div className='flex'>
                <p className='text-[18px]'>
                    Sub Total
                </p>
                <p className='text-[18px] font-medium pl-[20rem]'>
                    $198
                </p>

            </div>

            
            <div className='flex'>
                <p className='text-[18px]'>
                    Shipping Cost
                </p>
                <p className='text-[18px] font-medium pl-[17.5rem]'>
                    $198
                </p>

            </div>

            <hr className='my-7' />

            <div className='flex'>
                <p className='text-[20px] font-medium'>
                    Total Cost
                </p>
                <p className='text-[20px] font-medium pl-[19rem]'>
                    $498
                </p>

            </div>


        </div>
    </div>
  )
}

export default shippingAddress