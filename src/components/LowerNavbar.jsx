import React from 'react'

const lower_navbar = () => {
  return (
    <main className='pt-6 pb-4 flex bg-white cursor-pointer text-black'>
        <div className='ml-28'>
            ALL
        </div>

        <div className=''>
            <ul className='ml-[10rem] flex space-x-10'>
                <li className="hover:scale-105 delay-100">
                    Online Shop
                </li>
                <li className="hover:scale-105 delay-100">
                    Products
                </li>
                <li className="hover:scale-105 delay-100">
                    Today Special
                </li>
                <li className="hover:scale-105 delay-100">
                    Customer Service
                </li>
                <li className="hover:scale-105 delay-100">
                    Sell Your Products
                </li>
            </ul>
        </div>
        <div className='h-10 w-32 pl-4 pt-1.5 -translate-y-2 ml-20 border-2 border-blue-400 font-semibold hover:scale-105 delay-100'>
            Get The App
        </div>

        <div className='ml-16 flex space-x-10'>
            <div className="hover:scale-105 delay-100">
                Messages
            </div> 
            <div className="hover:scale-105 delay-100">
                Ship To Nepal
            </div>
        </div>
    </main>
  )
}

export default lower_navbar