import React from "react";
import laptop_bg from "../assets/laptop_bg.jpg";
import InputField from "./InputField";

const Login = () => {
  return (
    <section>
      <div className="flex ml-[23rem] my-20">
        <div className="h-[37rem] w-[30rem] drop-shadow-xl">
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${laptop_bg})` }}
          >
            <div className="bg-[#0f0a2b] bg-opacity-[0.50] h-[37rem] w-[30rem] pl-14">
              <p className="pt-[14rem] w-56 pl-8 text-3xl text-white font-medium">
                Sign In
              </p>
              <p className="w-[22rem] pl-7 pt-4 text-[16px] text-white">
                <span className="text-yellow-400 text-[32px] font-bold">
                  Get 20% Discount
                </span>
                <p className="text-[19px] text-white">on your first order</p>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 h-[37rem] w-[30rem] drop-shadow-xl">
          <p className="text-[24px] font-medium px-20 py-10 text-blue-500">
            Sign In
          </p>

          <InputField
            title="Mobile Number or Email Address"
            type="text"
            placeholder="Enter your mobile number or email address"
          />
          <InputField
            title="Password"
            type="password"
            placeholder="Enter your password"
          />

          <div>
            <button className="w-[20rem] h-11 ml-20 mt-8  text-white bg-purple-700 rounded-full">
              Continue
            </button>
            <p className="text-[10px] ml-20 mt-2">
              By continuing you will Continue to our terms and conditions
            </p>
            <div className="mt-8 ">
              <span className="text-[24px] ml-[14rem] ">or</span> <br />
              <span className="ml-[12rem] text-[12px]"> New To Sabai?</span>
            </div>

            <button className="w-[10rem] h-10 ml-40 mt-2 text-[14px]  text-purple-700 border-purple-700 border-2 rounded-full">
              Create an account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
