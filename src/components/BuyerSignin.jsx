import React from "react";
import laptop_bg from "../assets/laptop_bg.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useNavigate } from "react-router-dom";


const Buyer_signin = () => {

  const navigate = useNavigate();

  
  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is Required!"),
    address: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Don't Match")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    navigate("/");
  };


  return (
    <div className='flex ml-[23rem] my-20'>
      <div className='h-[45rem] w-[30rem] drop-shadow-xl'>
        <div className='bg-cover bg-center' style={{ backgroundImage: `url(${laptop_bg})` }}>
          <div className='bg-[#0f0a2b] bg-opacity-[0.50] h-[45rem] w-[30rem] pl-14'>
            <p className='pt-[18rem] w-56 pl-7 text-xl text-white font-medium'>
              Look like you are new here!
            </p>
            <p className='w-[17.5rem] pl-7 pt-4 text-[12px] text-white'>
              <span className='text-yellow-500 text-[24px] font-medium'>Sign Up</span>  with your mobile number or E-mail and get started..
            </p>
          </div>
        </div>
      </div>


      <div className='bg-gray-50 h-[45rem] w-[30rem] drop-shadow-xl'>
        <p className='text-[24px] font-medium px-20 py-10 text-blue-500'>
          Create Buyer Account
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='fname' className='text-[14px] font-medium px-20  '>
            Your Name
          </label>

          <div className=' ml-20 my-2'>
            <input
              type="text"
              id='fname'
              className='h-10 w-[20rem] pl-3 border-2 border-purple-300 rounded-md placeholder:text-[12px]'
              placeholder='Enter your name'
              {...register("fullName")}
            />
            <p className="text-red-500 text-[12px]">{errors.fullName?.message}</p>
          </div>



          <label htmlFor="address" className='text-[14px] font-medium px-20 '>
            Address
          </label>
          <div className=' ml-20 my-2'>
          <input 
            type="text" 
            id="address" 
            className='h-10 w-[20rem] pl-3 border-2 border-purple-300 rounded-md placeholder:text-[12px]' 
            placeholder='Enter address' 
            {...register("address")} 
          />
          </div>


          <label htmlFor="email" className='text-[14px] font-medium px-20  '>
            E-mail Address
          </label>
          <div className=' ml-20 my-2'>
          <input 
          type="text" 
          id="email" 
          className='h-10 w-[20rem] pl-3 border-2 border-purple-300 rounded-md placeholder:text-[12px]' 
          placeholder='Enter email address ' 
          {...register("email")}
          />

            <p  className="text-red-500 text-[12px]">{errors.email?.message}</p>
          </div>

          <label htmlFor="password1" className='text-[14px] font-medium px-20 '>
            Password
          </label>
          <div className=' ml-20 my-2'>
            <input 
            type="password" 
            id="password1" 
            className='h-10 w-[20rem] pl-3 border-2 border-purple-300 rounded-md placeholder:text-[12px]'
             placeholder='Enter your password' {...register("password")} />

            <p className="text-red-500 text-[12px]">{errors.password?.message}</p>
          </div>

          <label htmlFor="password2" className='text-[14px] font-medium px-20 '>
            Re-type Password
          </label>
          <div className=' ml-20 my-2'>
            <input 
            type="password" 
            id="password2" className='h-10 w-[20rem] pl-3 border-2 border-purple-300 rounded-md placeholder:text-[12px]' 
            placeholder='Re enter your password' {...register("confirmPassword")}/>
            <p className="text-red-500 text-[12px]">{errors.confirmPassword?.message}</p>
          </div>

          <div>
            <input type="submit" className='w-[20rem] h-11 ml-20 mt-8  text-white bg-purple-700 rounded-full'/>

            <p className='text-[10px] ml-20 my-2'>
              By continuing you will Continue to our terms and conditions
            </p>
          </div>

        </form>


      </div>
    </div>
  )
};



export default Buyer_signin;
