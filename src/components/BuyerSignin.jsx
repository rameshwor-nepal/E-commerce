import React from "react";
import laptop_bg from "../assets/laptop_bg.jpg";

const Seller_signin = () => {
  return (
    <section>
      <div className="flex ml-[23rem] my-20">
        <div className="h-[39rem] w-[30rem] drop-shadow-xl">
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${laptop_bg})` }}
          >
            <div className="bg-[#0f0a2b] bg-opacity-[0.50] h-[39rem] w-[30rem] pl-14">
              <p className="pt-[18rem] w-56 pl-7 text-xl text-white font-medium">
                Look like you are new here!
              </p>
              <p className="w-[17.5rem] pl-7 pt-4 text-[12px] text-white">
                <span className="text-yellow-500 text-[24px] font-medium">
                  Sign Up
                </span>{" "}
                with your mobile number or email address and get started..
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 h-[39rem] w-[30rem] drop-shadow-xl">
          <p className="text-[24px] font-medium px-20 py-10 text-blue-500">
            Create Buyer Account
          </p>

          <p className="text-[14px] font-medium px-20  ">Your Name</p>
          <div className=" ml-20 mt-2">
            <input
              type="text"
              className="h-10 w-[20rem] pl-3 border-2 border-purple-300 rounded-md placeholder:text-[12px]"
              placeholder="Enter your name"
            />
          </div>
          <div></div>

          <p className="text-[14px] font-medium px-20 mt-6 ">
            Mobile Number or Email Address
          </p>
          <div className=" ml-20 mt-2">
            <input
              type="text"
              className="h-10 w-[20rem] pl-3 border-2 border-purple-300 rounded-md placeholder:text-[12px]"
              placeholder="Enter your mobile number or email address"
            />
          </div>

          <p className="text-[14px] font-medium px-20 mt-6 ">Password</p>
          <div className=" ml-20 mt-2">
            <input
              type="password"
              className="h-10 w-[20rem] pl-3 border-2 border-purple-300 rounded-md placeholder:text-[12px]"
              placeholder="Enter your password"
            />
          </div>

          <p className="text-[14px] font-medium px-20 mt-6 ">
            Re-type Password
          </p>
          <div className=" ml-20 mt-2">
            <input
              type="password"
              className="h-10 w-[20rem] pl-3 border-2 border-purple-300 rounded-md placeholder:text-[12px]"
              placeholder="Re enter your password"
            />
          </div>

          <div>
            <button className="w-[20rem] h-11 ml-20 mt-8  text-white bg-purple-700 rounded-full">
              Continue
            </button>
            <p className="text-[10px] ml-20 mt-2">
              By continuing you will Continue to our terms and conditions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seller_signin;
