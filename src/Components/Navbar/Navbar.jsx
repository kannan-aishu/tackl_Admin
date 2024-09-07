import React from 'react';
import Ban from './band.jpg'
import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { SlSpeedometer } from "react-icons/sl";
import { BiBorderAll } from "react-icons/bi";
import { IoIosHeartEmpty } from "react-icons/io";
import { LiaCommentsSolid } from "react-icons/lia";
import { LiaListAltSolid } from "react-icons/lia";
import { LiaPowerOffSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar (){

    return(

        <div className="flex sticky ">
        
        <aside className="w-55 bg-[white] h-full fixed flex flex-col gap-[10px]">
          <div className="p-4">
            <Link to={'/'} className="text-2xl font-bold text-[#3131ba]">Tackl Admin</Link>
          </div>
           <div className='h-full flex flex-col justify-between'>
           <div className='flex flex-col p-4 gap-3   '>
                <Link to="/dashboard"  className="flex items-center gap-3 text-[14px] font-medium hover:bg-[#3131ba] p-3 rounded-md hover:text-white"><SlSpeedometer className="text-18px" />  Dashboard</Link>

                <Link to="/banner-management"  className="flex items-center gap-3 text-[14px]  font-medium hover:bg-[#3131ba] p-3 rounded-md hover:text-white"><BiBorderAll className="text-[18px]" /> Banner Management</Link>

                <Link to="/student-management"  className="flex items-center gap-3 text-[14px] font-medium hover:bg-[#3131ba] p-3 rounded-md hover:text-white"><IoIosHeartEmpty className="text-[18px]" /> Student Management</Link>

                <Link to="/doubt-management"  className="flex items-center gap-3 text-[14px] font-medium hover:bg-[#3131ba] p-3 rounded-md hover:text-white"><LiaCommentsSolid className="text-[18px]" />Doubt Management</Link>

                <Link to="/syllabus-folder"  className="flex items-center gap-3 text-[14px] font-medium hover:text-white hover:bg-[#3131ba] p-3 rounded-md "><LiaListAltSolid className="text-[18px]" /> Syllabus Folder</Link>
            </div>
            <div className='flex flex-col border-t-[3px] border-t-[#dfd7d7]  p-3 gap-2 '>
                <Link to={'/settings'} className="flex items-center gap-2 text-[13px] font-medium hover:bg-[#3131ba] p-3 rounded-md hover:text-white"><IoSettingsOutline className="text-[18px]"/>Settings</Link>
                <Link className="flex items-center gap-2 text-[13px] font-medium hover:bg-[#3131ba] p-3 rounded-md hover:text-white"><LiaPowerOffSolid className="text-[18px]"/> Logout</Link>
            </div>
           </div>
          
        </aside>
        <div className="flex flex-col w-full ml-56 ">
          <header className="bg-white border-l-[2px] border-l-[#dfd7d7] fixed  p-2 top-0 w-[85.5%] pr-[30px]  z-10" >
            <div className="flex justify-between  ">
            <div className='flex items-center w-full '>
      
                <button className="mr-4 p-2 rounded-lg bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"> <FiMenu className="text-2xl text-gray-700" /></button>

            <div className="flex items-center border bg-[#dfd7d7] border-gray-300 rounded-full p-2 shadow-sm w-full max-w-md">
                <CiSearch className="text-2xl text-gray-500 cursor-pointer" />
                <input type="text"  placeholder="Search"  className="flex-grow outline-none px-4  text-gray-700 bg-transparent"/>
                
            </div>
        </div>
        <div className='flex items-center gap-4 p-3 rounded-lg bg-gray-100  cursor-pointer hover:bg-gray-200 transition-colors duration-300 w-md'>
  <img src={Ban} alt="Profile" className='h-12 w-12 rounded-full object-cover' />
  
  <select className='bg-gray-100 text-gray-700 p-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'>
    <option className='text-sm font-medium flex flex-wrap'>
      Moni Roy Admin
    </option>
  </select>
</div>


    
            </div>
          </header>
        </div>
      </div>


    )

}