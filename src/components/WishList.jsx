import React from 'react'
import leather_shoe from '../assets/leather_shoes.jpg'

function WishList() {
    return (
        <div className='ml-20 mt-10'>
            <p className='text-[28px] font-medium'> My Wishlist</p>

            <table className='mt-10 pb-10' cellPadding="0" cellSpacing="0" border="0" width="90%">
                <thead className='border-b-2'>
                    <tr>
                        <th className='py-2 px-6' width="25%">Product Name</th>
                        <th className='py-2 px-6' width="10%">Unit Price</th>
                        <th className='py-2 px-6' width="10%">Stock Status</th>
                        <th className='py-2 px-6' width="15%"></th>
                        <th className='py-2 px-6' width="10%"></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td width="25%" className='pl-32 align-middle'>
                            <div className="flex justify-center space-x-5 mt-5">
                                <img src= { leather_shoe } className='w-28' alt="" />
                                <p className="text-[18px] pt-4">
                                    Leather Shoe
                                </p>
                            </div>
                        </td>
                        <td width="10%" className=' text-center'>$110.00</td>
                        <td width="10%"><span className='ml-16 text-center bg-green-500 rounded-md py-1 px-3 text-white'>In Stock</span></td>
                        <td width="15%"><button className='ml-16  bg-blue-500 rounded-md py-2 px-4 text-white'>Add to Cart</button></td>
                        <td width="10%" ><i className="far fa-trash-alt text-[30px] text-red-500"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WishList