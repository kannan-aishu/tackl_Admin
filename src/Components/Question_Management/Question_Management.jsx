import React from 'react';
import { Link } from 'react-router-dom';

export default function Question_Management (){

    return(

        <div className='mt-[50px] w-[100%] h-screen flex flex-col p-[30px]'>
            <div className='flex w-[100%] justify-between p-[10px] sticky bg-[#dfd7d7] pt-[35px] top-[76px]'>
            <h2 className='text-[20px] font-semibold'>Question Management</h2>
            <Link className='p-[10px] bg-[blue] text-[white] font-semibold rounded-[10px]'>Add new question</Link>
            </div>

            <div className='flex flex-col bg-white w-full rounded-[20px] mt-[5%]'>
  {/* Table Header */}
  <div className='grid grid-cols-6 w-full p-[10px] mt-[60p]  bg-gray-100 font-semibold text-gray-600 rounded-t-[20px]'>
    <p>Doubt ID</p>
    <p>NAME</p>
    <p>Doubt</p>
    <p>Date</p>
    <p>Subject</p>
    <p>Status</p>
  </div>

  {/* Table Row */}
  <div className='grid grid-cols-6 w-full p-[10px] border-t-[1px] border-t-[#dfd7d7] items-center '>
    <p className='text-[13px]'>00001</p>
    <p className='text-[13px]'>Muhammed Javad</p>
    <p className='text-[12.5px]'>Who is the prime minister of India?</p>
    <p className='text-[13px]'>4 Sep 2019</p>
    <p className='text-[13px]'>Physics</p>
    <p className='bg-[#23d323] text-white text-center p-[5px] rounded-[5px] w-[80%]'>Opened</p>
  </div>
  <div className='grid grid-cols-6 w-full p-[10px] border-t-[1px] border-t-[#dfd7d7] items-center'>
    <p className='text-[13px]'>00001</p>
    <p className='text-[13px]'>Muhammed Javad</p>
    <p className='text-[12.5px]'>Who is the prime minister of India?</p>
    <p className='text-[13px]'>4 Sep 2019</p>
    <p className='text-[13px]'>Physics</p>
    <p className='bg-[#23d323] text-white text-center p-[5px] rounded-[5px] w-[80%]'>Opened</p>
  </div>
  <div className='grid grid-cols-6 w-full p-[10px] border-t-[1px] border-t-[#dfd7d7] items-center '>
    <p className='text-[13px]'>00001</p>
    <p className='text-[13px]'>Muhammed Javad</p>
    <p className='text-[12.5px]'>Who is the prime minister of India?</p>
    <p className='text-[13px]'>4 Sep 2019</p>
    <p className='text-[13px]'>Physics</p>
    <p className='bg-[#23d323] text-white text-center p-[5px] rounded-[5px] w-[80%]'>Opened</p>
  </div>
</div>


        </div>

    )

}