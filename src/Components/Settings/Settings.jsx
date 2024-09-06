import React from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { TfiLock } from "react-icons/tfi";

export default function Settings (){

    return(

        <div className='flex flex-col h-screen justify-between mt-[50px] p-[30px] w-full'>
            
            <div className='flex flex-col gap-[20px]'>
            <h3 className='text-[25px] font-semibold mt-[10px]'>Site settings</h3>
            <div className='flex gap-[20px] items-center'>
                <div className='flex gap-[20px] items-center p-[10px] font-semibold text-[#4141f1] bg-[#cdbbf8] justify-between w-[20%] rounded-[10px]'>
                    <CiMail className='text-[20px] '/>

                    <p>Update Profile</p>
                    <p>1253</p>
                </div>
                <div className='flex gap-[10px] font-semibold items-center'>
                    <TfiLock/>
                    <p>Update Password</p>
                </div>
            </div>
            <div className='bg-white p-[15px] flex gap-[20px] w-full rounded-[10px] justify-between items-center'>
                <div className='flex flex-col w-[49%] gap-[5px]'>
                    <label>Admin Name</label>
                    <input type="text " placeholder='tackl Development LLP' className='bg-[#dfd7d7] p-[10px] rounded-[10px]' />
                </div>
                <div className='flex flex-col w-[49%] gap-[5px]'>
                    <label>Email address :</label>
                    <input type="text " placeholder='esteban_schiller@gmail.com' className='bg-[#dfd7d7] p-[10px] rounded-[10px]' />
                </div>
            </div>

            <div className='bg-white p-[15px] flex gap-[20px] w-full rounded-[10px] justify-between items-center'>
                <div className='flex flex-col w-[49%] gap-[5px]'>
                    <label>Password</label>
                    <input type="password" placeholder='tackl Development LLP' className='bg-[#dfd7d7] p-[10px] rounded-[10px]' />
                </div>
                <div className='flex flex-col w-[49%] gap-[5px]'>
                    <label>Confirm Password</label>
                    <input type="password" placeholder='tackl Development LLP' className='bg-[#dfd7d7] p-[10px] rounded-[10px]' />
                </div>
            </div>

            </div>
            <div className='flex items-center justify-between w-full'>
                <p className='text-[#918787]'>Showing 1 -09 of 78</p>
                <div>
                    <button className='text-[15px] p-[5px] pl-[10px] pr-[10px] rounded-l-[10px] border-[1px] border-[#998e8e]'>< SlArrowLeft /></button>
                    <button className='text-[15px] p-[5px] pl-[10px] pr-[10px] rounded-r-[10px] border-[1px] border-[#998e8e]'>< SlArrowRight/></button>
                </div>
            </div>

        </div>

    )

}