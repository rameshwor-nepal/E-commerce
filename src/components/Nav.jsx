import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import { useContext } from "react";
import { addToCartContext } from "../context/addToCartContext";

const Nav = () => {
  const a = useContext(addToCartContext)
  const size = a.cart.length

  return (
    <div className="h-28 pt-8 bg-gray-50 text-black cursor-pointer flex space-x-32 drop-shadow-md">
      <div className=" ml-28">
        <Link to="/"> <img src={ logo } alt="" className="w-16 h-16 hover:scale-105" /></Link>
      </div>

      <div className="w-[35rem] h-14 border-2 border-blue-400 rounded-md flex ">
        <div className="w-16 h-13 pt-3 pl-2 bg-gray-200 text-black text-[20px]  font-medium border-blue-400 border-r-2 rounded-md ">
          All
          <span>
            <i className="fa-solid fa-sort-down px-1 -translate-y-1 hover:scale-125"></i>
          </span>
        </div>
        <input className=" w-[24rem] px-4 text-slate-400 bg-inherit border-none outline-none" placeholder="What are you looking for?"/>
          
        

        <button className="w-32 h-13  text-[22px] bg-blue-600 text-white font-medium  border-blue-400 border-l-2 rounded hover:scale-105 delay-75">
          Search
        </button>
      </div>

      <div className="">
        <ul className="pt-1 flex space-x-12">
          <li className="hover:scale-105 delay-100">
            <Link to="/mycart">
            <div>
              <i className="fa-solid fa-cart-plus text-2xl text-blue-600"></i><span className="bg-green-500 text-white p-1 rounded-3xl">{size}</span>
            </div>
            <p>Cart</p></Link>
          </li>

          <li className="hover:scale-105 delay-100">
            <Link to="/wishlist">
            <div>
              <i className="fa-solid fa-heart-circle-plus text-2xl text-blue-600 pl-3 "></i>
            </div>
            <p>WishList</p></Link>
          </li>

          <li className="hover:scale-105 delay-100">
             <Link to="/mycart">
            <div>
              <i className="fa-solid fa-right-left text-2xl text-blue-600 pl-12 "></i>
            </div>
           <p>Return & Order</p></Link>
          </li>

          <li className="hover:scale-105 delay-100"> 
            <Link to="/buyer-sign-in">
            <div>
              <i className="fa-solid fa-user text-2xl text-blue-600 pl-3"></i>
            </div>
            
             <p>Sign In</p></Link>
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
