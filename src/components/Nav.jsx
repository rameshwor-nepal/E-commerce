import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const Nav = () => {
  return (
    <div className="h-28 pt-8 bg-gray-50 text-black flex space-x-32 drop-shadow-md">
      <div className=" ml-28">
        <Link to="/"> <img src={ logo } alt="" className="w-16 h-16" /></Link>
      </div>

      <div className="w-[35rem] h-14 border-2 border-blue-400 rounded-md flex ">
        <div className="w-16 h-13 pt-3 pl-2 bg-gray-200 text-black text-[20px] font-medium border-blue-400 border-r-2 rounded-md ">
          All
          <span>
            <i className="fa-solid fa-sort-down px-1 -translate-y-1"></i>
          </span>
        </div>
        <div className="ml-3 w-[14rem] pt-3 text-slate-400">
          What are you looking for?
        </div>

        <div className="w-32 h-13 ml-[9.35rem] pt-2 pl-6 text-[22px] bg-blue-600 text-white font-medium  border-blue-400 border-l-2 rounded ">
          Search
        </div>
      </div>

      <div className="">
        <ul className="pt-1 flex space-x-12">
          <li>
            <Link to="/mycart">
            <div>
              <i className="fa-solid fa-cart-plus text-2xl text-blue-600"></i>
            </div>
            <p>Cart</p></Link>
          </li>

          <li>
            <Link to="/wishlist">
            <div>
              <i className="fa-solid fa-heart-circle-plus text-2xl text-blue-600 pl-3"></i>
            </div>
            <p>WishList</p></Link>
          </li>

          <li>
             <Link to="/mycart">
            <div>
              <i className="fa-solid fa-right-left text-2xl text-blue-600 pl-12"></i>
            </div>
           <p>Return & Order</p></Link>
          </li>

          <li> 
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
