import React from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { MdPrint } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa6";
import { FaRegFileImage } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsFillSendFill } from "react-icons/bs";
export default function Chatbox (){

    return(

        <div className='mt-[55px] p-[30px] flex flex-col w-[100%] overflow-hidden gap-8'>
        <h2 className='text-2xl sm:text-lg font-bold'>Who is the prime minister of India?</h2>
        <div className='bg-white border-b border-gray-300  rounded-lg w-full'>
          <div className='w-full flex justify-between p-4 border-gray-400 border-b-[2px]'>
            <div className='flex gap-10 items-center'>
              <SlArrowLeft className='text-lg bg-gray-200 p-1 rounded-[2px] hover:bg-gray-300' />
              <p className='font-medium'>Minerva Barnett</p>
              <p className='text-purple-700 bg-purple-200 text-xs px-3 py-1 rounded-full'>
                Friends
              </p>
            </div>
            <div className='flex'>
              <MdPrint className='text-[25px] p-1 bg-gray-300 rounded-l-[10px] hover:text-gray-500 border-r-[1px] border-[black]' />
              <CiStar className='border-r-[1px] border-[black] text-[25px] p-1 bg-gray-300  hover:text-gray-500' />
              <MdDelete className='text-[25px] p-1 bg-gray-300 rounded-r-[10px] hover:text-gray-500' />
            </div>
          </div>
          <div className='flex flex-col p-[30px] gap-[30px]'>
           
          <div className='flex flex-col gap-[20px] w-[50%] flex-wrap p-[20px] bg-gray-200 rounded-t-[30px] rounded-br-[30px]'>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                <div className='flex gap-[5px] w-[100%] justify-end '>
                    <p>6.30 pm</p>
                    <p>:</p>
                </div>
            </div>
           <div className='flex w-[100%] justify-end'>
           <div className='flex flex-col gap-[20px] w-[50%] flex-wrap p-[20px] bg-blue-600 text-white rounded-t-[30px] rounded-bl-[30px]'>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                </p>
                <div className='flex gap-[5px] w-[100%] justify-end '>
                    <p>6.30 pm</p>
                    <p>:</p>
                </div>
            </div>
           </div>
            <div className='flex flex-col gap-[20px] w-[50%] flex-wrap p-[20px] bg-gray-200 rounded-t-[30px] rounded-br-[30px]'>
                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.Contrary to popular belief, Lorem Ipsum is not simply random text is the model text for your company.
                </p>
                <div className='flex gap-[5px] w-[100%] justify-end '>
                    <p>6.30 pm</p>
                    <p>:</p>
                </div>
            </div>
          </div>
          <div className='border-t-[2px] border-t-gray-300 flex gap-[30px] p-[15px] items-center'>
            <FaMicrophone/>
            <input type="text" placeholder='Write massage'  className='w-[80%] border-none pl-[15px]'/>
            <FaGoogleDrive />
            < FaRegFileImage/>
            <Link className='p-[2px] pl-[40px] flex gap-[8px] pr-[40px] rounded-md bg-blue-900 items-center text-white '>Send <BsFillSendFill/></Link>

          </div>
        </div>
        
      </div>
      

    )

}