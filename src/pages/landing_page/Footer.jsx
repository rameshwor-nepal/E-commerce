import React from 'react'
import handcash from "../../images/handcash.png"
import debitcard from "../../images/debitcard.jpg"
import visacard from "../../images/visacard.jpg"
import mastercard from "../../images/mastercard.jpg"


const Footer = () => {
  return (
  <section>


    <div className='bg-[#0f0d2a]  mt-10 h-[40rem]'>


      <div className='flex space-x-[17rem]'>
        <div className='m-20 mt-36 text-white font-bold text-5xl'>

          LOGO

        </div>

        <div className='pt-12'>
          <p className='text-blue-300 text-2xl font-medium mb-8 mt-6 ml-36'>
            Subscribe to Our Website
          </p>
          <div className='w-[36rem] h-14 border-2 bg-white border-blue-400  rounded-md flex'>

            <p className='w-56 p-3'>
              Enter your email address
            </p>
            <div className='w-40 h-13 ml-[11.85rem] pl-9 pt-3 bg-blue-600 text-white text-[20px] font-medium  border-blue-400 border-l-2 rounded'>
              Subscribe
            </div>

          </div>
        </div>
      </div>


      <div className='ml-20 flex space-x-40 text-white'>

        <div>

          <div className='flex items-center space-x-4 mb-4' >

            <span >
              <i className="fa-solid fa-phone text-[24px]"></i>
            </span>
            <p>
              01-4465573 <br />
              98635342411
            </p>

          </div>

          <div className='flex items-center space-x-4 mb-4'>

            <span>
            <i className="fa-solid fa-envelope text-[24px]"></i>
            </span>
            <p>
              ournewshop@gmail.com <br />
              customerservice.ourshop@gmail.com
            </p>

          </div>

          <div className='flex items-center space-x-4 mb-4'>

            <span>
            <i className="fa-solid fa-location-dot text-[24px]"></i>
            </span>
            <p>
              Lalitpur-10, Nepal <br />
              New Road, Kathmandu, Nepal
            </p>

          </div>


        </div>




        <div className=' flex space-x-40'>


          <div>

            <p className='mb-4 text-[18px] font-medium text-blue-300'> About Us </p>

            <p className='pb-1 text-[14px] '> <span><i className="fa-solid fa-chevron-right pr-1 text-[13px] text-blue-300"></i></span> About Our Website</p>
            <p className='pb-1 text-[14px] '><span><i className="fa-solid fa-chevron-right pr-1 text-[13px] text-blue-300"></i></span> Blogs</p>
            <p className='pb-1 text-[14px] '><span><i className="fa-solid fa-chevron-right pr-1 text-[13px] text-blue-300"></i></span> Careers</p>
            <p className='pb-1 text-[14px] '><span><i className="fa-solid fa-chevron-right pr-1 text-[13px] text-blue-300"></i></span> Digital Payments</p>
            <p className='pb-1 text-[14px] '><span><i className="fa-solid fa-chevron-right pr-1 text-[13px] text-blue-300"></i></span> Shipping Information </p>


          </div>

          <div>



            <p className='mb-4 text-[18px] font-medium text-blue-300'>Customer Service </p>

            <p className='pb-1 text-[14px] '><span><i className="fa-solid fa-chevron-right pr-1 text-[13px] text-blue-300"></i></span> Help Center</p>
            <p className='pb-1 text-[14px] '><span><i className="fa-solid fa-chevron-right pr-1 text-[13px] text-blue-300"></i></span> Report Abuse</p>
            <p className='pb-1 text-[14px] '><span><i className="fa-solid fa-chevron-right pr-1 text-[13px] text-blue-300"></i></span> Seller's Guide</p>
            <p className='pb-1 text-[14px] '><span><i className="fa-solid fa-chevron-right pr-1 text-[13px] text-blue-300"></i></span> Buyer's Guide</p>
            <p className='pb-1 text-[14px] '><span><i className="fa-solid fa-chevron-right pr-1 text-[13px] text-blue-300"></i></span> FAQs </p>

          </div>


          <div>

            <p className='mb-4 text-[18px] font-medium text-blue-300'> Legal </p>

            <p className='pb-1 text-[14px] '><span><i className="fa-solid fa-chevron-right pr-1 text-[13px] text-blue-300"></i></span> Privacy Policy</p>
            <p className='pb-1 text-[14px] '><span><i className="fa-solid fa-chevron-right pr-1 text-[13px] text-blue-300"></i></span> Terms and Condition</p>
            <p className='pb-1 text-[14px] '><span><i className="fa-solid fa-chevron-right pr-1 text-[13px] text-blue-300"></i></span> Return Policy</p>
            <p className='pb-1 text-[14px] '><span><i className="fa-solid fa-chevron-right pr-1 text-[13px] text-blue-300"></i></span> Store Location</p>
            <p className='pb-1 text-[14px] '><span><i className="fa-solid fa-chevron-right pr-1 text-[13px] text-blue-300"></i></span> Report about sellers </p>

          </div>

        </div>

      </div>


      <div className='ml-20 flex space-x-32 text-white'>

        <div>

          <div className='mt-8'>
            <p className='  text-[20px] font-medium text-blue-300'> Download App</p>

            <div className='flex items-center space-x-4 mb-4 mt-4' >

              <div className='bg-blue-700 text-white h-9 w-38'>
                <p className='p-1 pl-2'>
                  Get on App Store
                </p>
                
              </div>

              <div className='bg-blue-700 text-white h-9 w-36'>
                <p  className='p-1 pl-2'>
                  Get on Playstore
                </p>
                
              </div>

            </div>
          </div>

        </div>



      {/* This is for payment method */}
        <div >
          <div className='mt-8'>
            <p className='ml-16 tracking-wider text-[20px] font-medium text-blue-300'>
              Payment Methods
            </p>

            <div className='ml-16 mt-4 flex space-x-4'>
              <div >
                <img src= {handcash} alt="hand cash" className='h-8 w-16' />
              </div>

              <div >
                <img src= {visacard} alt="hand cash" className='h-8 w-16' />
              </div>

              <div >
                <img src= {debitcard} alt="hand cash" className='h-8 w-16' />
              </div>

              <div >
                <img src= {mastercard} alt="hand cash" className='h-8 w-16' />
              </div>

            </div>
          </div>

        </div>



      {/* This is for social media */}
      
        <div >
          <div className='mt-6'>
            <p className='ml-20 tracking-wider text-[20px] font-medium text-blue-300'>
             Follow Us On Social Media
            </p>

            <div className='ml-20 mt-4 flex space-x-4 '>
              <div >
              <i className="fa-brands fa-square-facebook text-[28px]"></i>
                           
              </div>

              <div >
              <i className="fa-brands fa-square-twitter text-[28px]"></i>
              </div>

              <div >
              <i className="fa-brands fa-youtube text-[28px]"></i>
              </div>

              <div >
              <i className="fa-brands fa-square-instagram text-[28px]"></i>
              </div>

            </div>
          </div>

        </div>




      </div>



    </div>

    <div className='h-12 bg-[#0a091a]  '>

      <p className='text-white pt-4 text-[12px] pl-[36rem] '>
        Copyright@2022 Ourdevelopment | Powered by Ecommerce site
      </p>

    </div>


</section>

  )
}

export default Footer