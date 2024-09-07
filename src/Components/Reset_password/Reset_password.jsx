import React from 'react';
import { Link } from 'react-router-dom';

export default function Reset_password (){

    return(
        <div className="t flex items-center justify-center h-screen bg-cover bg-center">
        <div className="bg-white p-10 rounded-[30px] shadow-lg max-w-md w-full flex flex-col justify-center items-center  gap-[20px]">
          <div className="text-center mb-6">
            <h2 className="text-[30px] font-semibold">Reset password ?</h2>
            <p className="text-gray-600">Reset Password from here</p>
          </div>
      
          <div className="mb-4 w-full flex flex-col gap-[10px]">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="••••••"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
      
          <div className="mb-4 w-full flex flex-col gap-[10px]">
              <label className="block text-sm font-medium text-gray-700">Confirm password</label>
            <input
              type="password"
              placeholder="••••••"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-[80%] bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
            Sign Up
          </button>

          
          <div className='flex gap-[10px]'>
            <p className='text-gray-600'>Know the password ?</p>
            <Link className='text-[#0000ff] underline underline-offset-2'>Login</Link>
          </div>
        </div>
      </div>
    )

}