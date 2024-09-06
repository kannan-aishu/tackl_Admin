import React from 'react';
import './Sign_in.css';
import { Link } from 'react-router-dom';
import Reset_password from '../Reset_password/Reset_password';



export default function Sign_in (){

    return(
        <div className="t flex items-center justify-center h-screen bg-cover bg-center">
        <div className="bg-white p-10 rounded-[30px] shadow-lg max-w-md w-full flex flex-col justify-center items-center gap-[20px] ">
          <div className="text-center mb-6 flex flex-col gap-[5px]">
            <h2 className="text-[30px] font-semibold">Login to Account</h2>
            <p className="text-gray-600">Please enter your email and password to continue</p>
          </div>
      
          <div className="mb-4 w-full flex flex-col gap-[5px]">
            <label className="block text-sm font-medium text-gray-700 ">Email address:</label>
            <input
              type="email"
              placeholder="esteban_schiller@gmail.com"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
      
          <div className="mb-4 w-full flex flex-col gap-[5px]">
            <div className="flex justify-between items-center ">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <Link to="/" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>
            <input
              type="password"
              placeholder="••••••"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
      
          <div className="flex items-center mb-6 w-full">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="ml-2 block text-sm text-gray-900">Remember Password</label>
          </div>
      
          <button className="w-[80%] bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
            Sign in
          </button>
          
        </div>
        
      </div>
      
      
    )

}