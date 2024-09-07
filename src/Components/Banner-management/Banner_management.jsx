import React from 'react';
import { Link } from 'react-router-dom';
import Img from './men.jpg'

export default function Banner_management (){

    return(

        <div className='mt-[50px] w-[100%] h-screen flex flex-col justify-between p-[30px]'>
            <div >
            <div className='flex w-[100%] justify-between p-[10px] sticky bg-[#dfd7d7] pt-[35px] top-[76px]'>
            <h2 className='text-[20px] font-semibold'>Benner Managment</h2>
            <Link className='p-[10px] bg-[blue] text-[white] font-semibold rounded-[10px]'>Add new banner</Link>
            </div>
            <div className='p-[10px] flex flex-wrap justify-around gap-[10px]'>
            <div className=' bg-white shadow-md rounded-lg flex flex-col w-[22%] '>
                <img src={Img} alt="Image description" className='  h-[25vh] rounded-t-lg mb-4' />
                <div className='flex flex-col space-y-2 justify-center items-center p-[15px]'>
                    <p className='text-gray-600 text-sm'>May 7th 2024</p>
                    <Link className='w-[50%] bg-[#ef1b1b] text-white text-center py-1 rounded-md shadow-sm hover:bg-red-600 transition duration-300 ease-in-out'>Active</Link>
                    <Link  className='w-[80%] text-gray-600 text-center py-1 rounded-md shadow-sm border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out'>Delete</Link>
                </div>
            </div>
            <div className=' bg-white shadow-md rounded-lg flex flex-col w-[22%] '>
                <img src={Img} alt="Image description" className='  h-[25vh] rounded-t-lg mb-4' />
                <div className='flex flex-col space-y-2 justify-center items-center p-[15px]'>
                    <p className='text-gray-600 text-sm'>May 7th 2024</p>
                    <Link className='w-[50%] bg-[#ef1b1b] text-white text-center py-1 rounded-md shadow-sm hover:bg-red-600 transition duration-300 ease-in-out'>Active</Link>
                    <Link  className='w-[80%] text-gray-600 text-center py-1 rounded-md shadow-sm border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out'>Delete</Link>
                </div>
            </div>
            <div className=' bg-white shadow-md rounded-lg flex flex-col w-[22%] '>
                <img src={Img} alt="Image description" className='  h-[25vh] rounded-t-lg mb-4' />
                <div className='flex flex-col space-y-2 justify-center items-center p-[15px]'>
                    <p className='text-gray-600 text-sm'>May 7th 2024</p>
                    <Link className='w-[50%] bg-[#ef1b1b] text-white text-center py-1 rounded-md shadow-sm hover:bg-red-600 transition duration-300 ease-in-out'>Active</Link>
                    <Link  className='w-[80%] text-gray-600 text-center py-1 rounded-md shadow-sm border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out'>Delete</Link>
                </div>
            </div>
            <div className=' bg-white shadow-md rounded-lg flex flex-col w-[22%] '>
                <img src={Img} alt="Image description" className='  h-[25vh] rounded-t-lg mb-4' />
                <div className='flex flex-col space-y-2 justify-center items-center p-[15px]'>
                    <p className='text-[#918787] text-sm'>May 7th 2024</p>
                    <Link className='w-[50%] bg-[#ef1b1b] text-white text-center py-1 rounded-md shadow-sm hover:bg-red-600 transition duration-300 ease-in-out'>Active</Link>
                    <Link  className='w-[80%] text-gray-600 text-center py-1 rounded-md shadow-sm border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out'>Delete</Link>
                </div>
            </div>
           

            </div>
        </div>
        <p className='text-[#918787]'>Showing 1-09 of 78</p>
        </div>

    )

}
