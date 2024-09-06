import React from 'react';
import { Link } from 'react-router-dom';
import Img from './men.jpg';
import { CiSearch } from "react-icons/ci";

export default function Student_management (){

    return(

        <div className='mt-[50px] w-[100%] flex flex-col justify-between p-[30px]'>
        <div >
        <div className='flex w-[100%] justify-between p-[10px] sticky bg-[#dfd7d7] pt-[35px] top-[76px]'>
        <h2 className='text-[20px] font-semibold'>All Student's</h2>
        <div className="flex items-center border bg-[#f7f3f3] border-gray-300 rounded-full p-2 shadow-sm w-full max-w-[30%]">
        <CiSearch className="text-2xl text-gray-500 cursor-pointer" />
                <input type="text"  placeholder="Search by name , id,email id"  className="flex-grow outline-none px-4  text-[#f1eaea] bg-transparent"/>
                
            </div>
        </div>
        <div className='p-[10px] flex flex-wrap justify-around gap-[10px]'>
        <div className=' bg-white shadow-md rounded-2xl flex flex-col w-[22%] h-[42vh] '>
            <img src={Img} alt="Image description" className='  h-[25vh] rounded-t-2xl mb-4' />
            <div className='flex flex-col space-y-3 justify-center items-center '>
            <p className=' text-md font-semibold'>jason price</p>
            <p className='text-gray-500 text-[12px] font-semibold'>kuhlman.jermey@yahoo.com</p>
                
                <Link  className='w-[60%] text-gray-600 font-semibold text-center py-1 rounded-md shadow-sm border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out'>Viwe</Link>
            </div>
        </div>
        <div className=' bg-white shadow-md rounded-2xl flex flex-col w-[22%] h-[42vh] '>
            <img src={Img} alt="Image description" className='  h-[25vh] rounded-t-2xl mb-4' />
            <div className='flex flex-col space-y-3 justify-center items-center '>
            <p className=' text-md font-semibold'>jason price</p>
            <p className='text-gray-500 text-[12px] font-semibold'>kuhlman.jermey@yahoo.com</p>
                
                <Link  className='w-[60%] text-gray-600 font-semibold text-center py-1 rounded-md shadow-sm border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out'>Viwe</Link>
            </div>
        </div>
        <div className=' bg-white shadow-md rounded-2xl flex flex-col w-[22%] h-[42vh] '>
            <img src={Img} alt="Image description" className='  h-[25vh] rounded-t-2xl mb-4' />
            <div className='flex flex-col space-y-3 justify-center items-center '>
            <p className=' text-md font-semibold'>jason price</p>
            <p className='text-gray-500 text-[12px] font-semibold'>kuhlman.jermey@yahoo.com</p>
                
                <Link  className='w-[60%] text-gray-600 font-semibold text-center py-1 rounded-md shadow-sm border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out'>Viwe</Link>
            </div>
        </div>
        <div className=' bg-white shadow-md rounded-2xl flex flex-col w-[22%] h-[42vh] '>
            <img src={Img} alt="Image description" className='  h-[25vh] rounded-t-2xl mb-4' />
            <div className='flex flex-col space-y-3 justify-center items-center '>
            <p className=' text-md font-semibold'>jason price</p>
            <p className='text-gray-500 text-[12px] font-semibold'>kuhlman.jermey@yahoo.com</p>
                
                <Link  className='w-[60%] text-gray-600 font-semibold text-center py-1 rounded-md shadow-sm border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out'>Viwe</Link>
            </div>
        </div>
        <div className=' bg-white shadow-md rounded-2xl flex flex-col w-[22%] h-[42vh] '>
            <img src={Img} alt="Image description" className='  h-[25vh] rounded-t-2xl mb-4' />
            <div className='flex flex-col space-y-3 justify-center items-center '>
            <p className=' text-md font-semibold'>jason price</p>
            <p className='text-gray-500 text-[12px] font-semibold'>kuhlman.jermey@yahoo.com</p>
                
                <Link  className='w-[60%] text-gray-600 font-semibold text-center py-1 rounded-md shadow-sm border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out'>Viwe</Link>
            </div>
        </div>
        <div className=' bg-white shadow-md rounded-2xl flex flex-col w-[22%] h-[42vh] '>
            <img src={Img} alt="Image description" className='  h-[25vh] rounded-t-2xl mb-4' />
            <div className='flex flex-col space-y-3 justify-center items-center '>
            <p className=' text-md font-semibold'>jason price</p>
            <p className='text-gray-500 text-[12px] font-semibold'>kuhlman.jermey@yahoo.com</p>
                
                <Link  className='w-[60%] text-gray-600 font-semibold text-center py-1 rounded-md shadow-sm border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out'>Viwe</Link>
            </div>
        </div>
        <div className=' bg-white shadow-md rounded-2xl flex flex-col w-[22%] h-[42vh] '>
            <img src={Img} alt="Image description" className='  h-[25vh] rounded-t-2xl mb-4' />
            <div className='flex flex-col space-y-3 justify-center items-center '>
            <p className=' text-md font-semibold'>jason price</p>
            <p className='text-gray-500 text-[12px] font-semibold'>kuhlman.jermey@yahoo.com</p>
                
                <Link  className='w-[60%] text-gray-600 font-semibold text-center py-1 rounded-md shadow-sm border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out'>Viwe</Link>
            </div>
        </div>
        <div className=' bg-white shadow-md rounded-2xl flex flex-col w-[22%] h-[42vh] '>
            <img src={Img} alt="Image description" className='  h-[25vh] rounded-t-2xl mb-4' />
            <div className='flex flex-col space-y-3 justify-center items-center '>
            <p className=' text-md font-semibold'>jason price</p>
            <p className='text-gray-500 text-[12px] font-semibold'>kuhlman.jermey@yahoo.com</p>
                
                <Link  className='w-[60%] text-gray-600 font-semibold text-center py-1 rounded-md shadow-sm border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out'>Viwe</Link>
            </div>
        </div>
       

        </div>
    </div>
    <p className='text-[#918787] mt-[30px]'>Showing 1-09 of 78</p>
    </div>

    )

}