import React from 'react'
import star from '../assets/star.png'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import featuredShop  from '../data/featuredShop'
import AskedQuestion from './AskedQuestion'
import Banner from './Banner'




const AboutShop = () => {

  const {id } = useParams();
  const shop = featuredShop.find((shop) => shop.id === id )
  const { image, description, name, address, number_of_followers } = shop


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

                <img src= {image} alt="Two Jacket" className='pt-[3.25rem] pl-10 h-[500px] w-[500px]' />

              </div>

              
          </div>

          <div >

              <p className='text-4xl font-medium'>
               {name}
              </p>
              <p className='pt-4'>{address}</p>

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
           
             <p className=' mt-6 px-6 py-1 w-[15rem] bg-blue-500 text-white font-normal text-[24px]  rounded-full'>
                     {number_of_followers} <span className='ml-3 text-[20px]'> Followers</span>
              </p>



{/* For the discription of products */}
            <div>             

              <p className='text-4xl font-medium mt-16'>
                Why people are loving our Shop?
              </p>

              <p className='mt-5 text-[16px] font-normal w-[40rem] '>
              A cozy boutique brimming with unique treasures, where timeless elegance meets modern flair. 
              Our shop invites you to indulge in a captivating collection of handcrafted goods, from delicate jewelry
               and artisanal ceramics to stylish accessories and curated home decor. Discover your own piece of artistry and 
               sophistication amidst our carefully curated selection.

              <br /><br />
              A bustling shop nestled in the heart of the city, adorned with vibrant colors and an inviting ambiance. It showcases a
               diverse range of products that cater to every need and desire. From exquisite fashion pieces to exquisite home
                decor, this shop is a treasure trove of delights for discerning shoppers.
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
                  Location
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
                  How to contact
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
                  Staffs
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

export default AboutShop