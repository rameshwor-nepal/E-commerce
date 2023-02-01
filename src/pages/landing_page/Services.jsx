import React from 'react'
import verified_seller from "../../images/verified_seller.jpg"
import Customerservice from "../../images/Customer-Service.jpg"
import Securedpayment from "../../images/secured_payment.jpg"
import Onlinedelivery from "../../images/online_delivery.jpg"

const Services = () => {
  return (
    <div className='flex space-x-12 ml-20 mt-10'>

            <div className='bg-cover bg-center' style={{ backgroundImage:`url(${verified_seller})` }}>
              <div className='bg-black bg-opacity-75 h-[26rem] w-[19rem]'>
                <p className='pt-[11rem] pl-7 text-3xl text-yellow-400 font-medium'>
                  Verified Seller
                </p>
                <p className='w-[17.5rem] pl-7 pt-14 text-[14px] text-white'>
                  We are always aware about the quality and healtiness of each and every products. 
                  There will be several examination of products by various professional.
                </p>
              </div>
            </div>


            <div className='bg-cover bg-center' style={{ backgroundImage:`url(${Customerservice})` }}>
              <div className='bg-black bg-opacity-75 h-[26rem] w-[19rem]'>
                <p className='pt-[11rem] pl-7 text-3xl text-yellow-400 font-medium'>
                  Customer Service
                </p>
                <p className='w-[17.5rem] pl-7 pt-14 text-[14px] text-white'>
                  We are always aware about the quality and healtiness of each and every products. 
                  There will be several examination of products by various professional.
                </p>
              </div>
            </div>


            

            <div className='bg-cover bg-center' style={{ backgroundImage:`url(${Securedpayment})` }}>
              <div className='bg-black bg-opacity-75 h-[26rem] w-[19rem]'>
                <p className='pt-[11rem] pl-7 text-3xl text-yellow-400 font-medium'>
                  Secured Payment
                </p>
                <p className='w-[17.5rem] pl-7 pt-14 text-[14px] text-white'>
                  We are always aware about the quality and healtiness of each and every products. 
                  There will be several examination of products by various professional.
                </p>
              </div>
            </div>

            <div className='bg-cover bg-center' style={{ backgroundImage:`url(${Onlinedelivery})`}}>
              <div className='bg-black bg-opacity-75 h-[26rem] w-[19rem]'>
                <p className='pt-[11rem] pl-7 text-3xl text-yellow-400 font-medium'>
                  Online Delivery
                </p>
                <p className='w-[17.5rem] pl-7 pt-14 text-[14px] text-white'>
                  We are always aware about the quality and healtiness of each and every products. 
                  There will be several examination of products by various professional.
                </p>
              </div>
            </div>
    </div>
  )
}

export default Services