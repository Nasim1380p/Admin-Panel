import React from 'react'
import Link from 'next/link';
import { TiHome } from "react-icons/ti";
import { RiSettings3Fill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import { BsBellFill } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
export default function Header() {
  return (
    <header className='fixed justify-center  bg-[#02021a] rounded-b-2xl z-40  w-full lg:w-[82%] h-[145px] md:h-[95px] top-0 right-0'>
      <div className='w-full flex justify-center '>
        <div className='w-[98%]   flex justify-center flex-wrap mt-4'>
          <div className='w-full flex justify-center flex-wrap md:w-[50%] lg:w-[61%] mt-2 mb-3'>
            <Link href='/Pages/Mainpage/Defult' className='flex w-[90%] items-center text-white'><TiHome className='cursor-pointer text-[gray] mr-2' /> / Dashboard</Link>
            <p className='text-white w-[90%] font-bold'>Dashboard</p>
          </div>
          <div className='w-1/2 md:w-[30%] lg:w-[20%] flex justify-center md:justify-end items-center text-white mt-0 lg:-mt-2'>
            <div className='w-[76%] md:w-[87%] border-[1px] bg-[#02021a] border-[#5c758e] rounded-2xl flex justify-center items-center flex-wrap'>
              <span className='w-[15%] text-[#5c758e] flex items-center justify-center text-lg'><IoSearchSharp className='cursor-pointer' /></span>
              <input className='w-[85%]  outline-none placeholder-[#5c758e] text-sm bg-inherit p-2 rounded-r-2xl' type="text" placeholder='Type here...' />
            </div>
          </div>
          <div className='w-1/2 md:w-[20%] lg:w-[19%] flex justify-center text-white mt-4 lg:mt-1 mb-5'>

            <div className='flex items-center lg:w-[70%] md:w-full w-[80%] justify-end *:mx-1'>
              <Link href='/'><div className='flex items-center font-semibold'><FaCircleUser className='mr-1' /> Sign in</div></Link>
              <RiSettings3Fill className='cursor-pointer text-lg' />
              <BsBellFill className='cursor-pointer' />
            </div>

          </div>
        </div>
      </div>
    </header>

  )
}
