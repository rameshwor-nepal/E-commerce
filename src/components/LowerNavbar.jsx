import React from 'react'

const lower_navbar = () => {
  return (
    <main className='pt-6 pb-4 flex bg-white  text-black'>
        <div className='ml-28'>
            ALL
        </div>

        <div className=''>
            <ul className='ml-[10rem] flex space-x-10'>
                <li>
                    Online Shop
                </li>
                <li>
                    Products
                </li>
                <li>
                    Today Special
                </li>
                <li>
                    Customer Service
                </li>
                <li>
                    Sell Your Products
                </li>
            </ul>
        </div>
        <div className='h-10 w-32 pl-4 pt-1.5 -translate-y-2 ml-20 border-2 border-blue-400 font-semibold'>
            Get The App
        </div>

        <div className='ml-16 flex space-x-10'>
            <div>
                Messages
            </div> 
            <div>
                Ship To Nepal
            </div>
        </div>
    </main>
  )
}

export default lower_navbar