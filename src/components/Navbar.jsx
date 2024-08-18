import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <div className='flex justify-between px-6 py-2'>
      <div className='flex items-center'>
        <AiOutlineMenu className='text-xl cursor-pointer hover:bg-gray-200 duration-200'/>
        <ImYoutube2 size={"28px"} className='w-28 cursor-pointer'/>
      </div>
      <div className='flex w-[35%]'>
        <div className='w-[100%] px-3 border rounded-l-full'>
          <input type="text" placeholder='Search' className="outline-none" />
        </div>
        <button className='px-4 border bg-gray-100 rounded-r-full'>
          <CiSearch size={"28px"}/>
        </button>
        <IoMdMic size={"28px"} className='ml-1 border rounded-full p-1 cursor-pointer hover:bg-gray-200 duration-200'/>
      </div>
      <div className='flex space-x-5'>
        <RiVideoAddLine size={"28px"} />
        <FaRegBell size={"28px"} />
        <CgProfile size={"28px"} />
      </div>
    </div>
  )
}

export default Navbar