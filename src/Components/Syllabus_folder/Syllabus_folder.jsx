import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegFolderOpen } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";

export default function Syllabus_folder (){

    return(

        <div className='mt-[50px] w-[100%] h-screen flex flex-col  p-[30px] gap-[20px]'>
            <div className='flex w-[100%] justify-between p-[10px] sticky bg-[#dfd7d7] pt-[35px] top-[76px]'>
            <h2 className='text-[20px] font-semibold'>Syllabus Folder</h2>
            <Link className='p-[10px] bg-[blue] text-[white] font-semibold rounded-[10px]'>Add new item</Link>
            </div>
            <p className='font-semibold'>Recent Files</p>
            <div className='flex gap-[20px]'>
            <div className=' bg-white shadow-md rounded-lg flex flex-col w-[20%] items-center  '>
                <p className='flex w-full justify-end p-[10px]'><MdLockOutline className='text-[30px] text-[#bbb7b7]' /></p>
                <FaRegFolderOpen className='text-[80px] text-[#bbb7b7]' />
                
                <div className='flex flex-col space-y-2 justify-center items-center p-[15px] border-t-[1px] w-full border-t-[#bbb7b7] '>
                    <p className='text-gray-600 text-sm flex w-full justify-start font-semibold'>1 Year</p>
                    
                </div>
            </div>

            <div className=' bg-white shadow-md rounded-lg flex flex-col w-[20%] items-center  '>
                <p className='flex w-full justify-end p-[10px]'><MdLockOutline className='text-[30px] text-[#bbb7b7]' /></p>
                <FaRegFolderOpen className='text-[80px] text-[#bbb7b7]' />
                
                <div className='flex flex-col space-y-2 justify-center items-center p-[15px] border-t-[1px] w-full border-t-[#bbb7b7] '>
                    <p className='text-gray-600 text-sm flex w-full justify-start font-semibold'>2 Year</p>
                    
                </div>
            </div>

            <div className=' bg-white shadow-md rounded-lg flex flex-col w-[20%] items-center  '>
                <p className='flex w-full justify-end p-[10px]'><MdLockOutline className='text-[30px] text-[#bbb7b7]' /></p>
                <FaRegFolderOpen className='text-[80px] text-[#bbb7b7]' />
                
                <div className='flex flex-col space-y-2 justify-center items-center p-[15px] border-t-[1px] w-full border-t-[#bbb7b7] '>
                    <p className='text-gray-600 text-sm flex w-full justify-start font-semibold'>3 Year</p>
                    
                </div>
            </div>

            <div className=' bg-white shadow-md rounded-lg flex flex-col w-[20%] items-center  '>
                <p className='flex w-full justify-end p-[10px]'><MdLockOutline className='text-[30px] text-[#bbb7b7]' /></p>
                <FaRegFolderOpen className='text-[80px] text-[#bbb7b7]' />
                
                <div className='flex flex-col space-y-2 justify-center items-center p-[15px] border-t-[1px] w-full border-t-[#bbb7b7] '>
                    <p className='text-gray-600 text-sm flex w-full justify-start font-semibold'>4 Year</p>
                    
                </div>
            </div>
            </div>
            

        </div>

    )

}