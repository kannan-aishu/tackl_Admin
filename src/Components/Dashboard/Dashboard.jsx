import React from 'react';
import { HiMiniUsers } from "react-icons/hi2";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsBoxFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { RiHistoryFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function Dashboard (){

    return(

        <div className='p-[30px] mt-[50px] flex flex-col gap-[30px] w-full '>
            <h3 className='text-[25px] font-semibold'>Dashbord</h3>
           <div className='flex  justify-around'>
           <Link className='flex w-[24%] bg-white p-4 flex-col shadow-md rounded-lg'>
                <div className='flex justify-between items-center mb-3'>
                    <div className='flex flex-col gap-[5px]'>
                    <p className='text-gray-600 text-sm font-medium'>Total Users</p>
                    <p className='text-2xl font-bold text-gray-800'>40,689</p>
                    </div>
                    <HiMiniUsers className='text-[#7c18ae] bg-[#ce9ce5] h-12 w-12 p-2 rounded-xl' />
                </div>
                <p className='text-sm text-gray-500 flex gap-1 items-center'>
                    <samp className='text-[#1fcb1f] font-semibold flex gap-1 items-center'><FaArrowTrendUp className='text-[#1fcb1f] '/> 8.5%</samp> Up from yesterday
                </p>
                </Link>

                <Link className='flex w-[24%] bg-white p-4 flex-col shadow-md rounded-lg'>
                <div className='flex justify-between items-center mb-3'>
                    <div className='flex flex-col gap-[5px]'>
                    <p className='text-gray-600 text-sm font-medium'>Total Quiz attended</p>
                    <p className='text-2xl font-bold text-gray-800'>10293</p>
                    </div>
                    <BsBoxFill className='text-[#d5c61d] bg-[#f5f3b0] h-12 w-12 p-2 rounded-xl' />
                </div>
                <p className='text-sm text-gray-500 flex gap-1 items-center'>
                    <samp className='text-[#1fcb1f] font-semibold flex gap-1 items-center'><FaArrowTrendUp className='text-[#1fcb1f] '/> 1.3%</samp> Up from yesterday
                </p>
                </Link>

                <Link to={"/doubt"} className='flex w-[24%] bg-white p-4 flex-col shadow-md rounded-lg'>
                <div className='flex justify-between items-center mb-3'>
                    <div className='flex flex-col gap-[5px]'>
                    <p className='text-gray-600 text-sm font-medium'>Total Doubt</p>
                    <p className='text-2xl font-bold text-gray-800'>$ 89,000</p>
                    </div>
                    <GoGraph className='text-[#26ae11] bg-[#a8eca6] h-12 w-12 p-2 rounded-xl' />
                </div>
                <p className='text-sm text-gray-500 flex gap-1 items-center'>
                    <samp className='text-[#ea3b3b] font-semibold flex gap-1 items-center'><FaArrowTrendUp className='text-[#ea3b3b] '/> 4.3%</samp> Up from yesterday
                </p>
                </Link>

                <Link className='flex w-[24%] bg-white p-4 flex-col shadow-md rounded-lg'>
                <div className='flex justify-between items-center mb-3'>
                    <div className='flex flex-col gap-[5px]'>
                    <p className='text-gray-600 text-sm font-medium'>Total flashcard games</p>
                    <p className='text-2xl font-bold text-gray-800'>2040</p>
                    </div>
                    <RiHistoryFill className='text-[#d52e2e] bg-[#e68888] h-12 w-12 p-2 rounded-xl' />
                </div>
                <p className='text-sm text-gray-500 flex gap-1 items-center'>
                    <samp className='text-[#1fcb1f] font-semibold flex gap-1 items-center'><FaArrowTrendUp className='text-[#1fcb1f] '/> 1.8%</samp> Up from yesterday
                </p>
                </Link>
           </div>


        </div>

    )

}