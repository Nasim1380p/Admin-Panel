'use client'
import React from 'react'
import { IoStatsChartSharp } from "react-icons/io5";
import { IoCard } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { BiSolidUser } from "react-icons/bi";
import { IoIosRocket } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { MdInsertDriveFile } from "react-icons/md";
import { GoStarFill } from "react-icons/go";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Menu() {
  const pathname = usePathname()
  return (
    <aside className='lg:w-[18%] hidden fixed left-0 top-0 lg:flex border overflow-y-scroll h-screen bg-[#02021a]'>
      <div className='w-full text-white'>
        <div className='flex flex-wrap justify-center'>
          <div className='border-b-[.07px] w-[60%] border-b-[#8d8d8d79]'>
            <h1 className='text-white text-center font-headfont font-bold mb-4 mt-10'>VISION UI FREE</h1>
          </div>
          <Link href='/Pages/Mainpage/Defult' className={`bg-[${pathname === '/Pages/Mainpage/Defult' ? '#1a2040' : 'none'}] w-[78%] mt-5 rounded-2xl p-3`}>
            <div className='flex items-center text-white'>
              <div className='bg-[#0571ff] w-[30px] h-[30px] rounded-lg flex justify-center items-center'><IoHome /></div>
              <p className='mx-3'>Dashboard</p>
            </div>
          </Link>

          <Link href='/Pages/Mainpage/Biling' className={`bg-[${pathname === '/Pages/Mainpage/Biling' ? '#1a2040' : 'none'}] w-[78%] mt-5 rounded-2xl p-3`}>
            <div className='flex items-center text-white'>
              <div className={`bg-[${pathname === '/Pages/Mainpage/Biling' ? '#0571ff' : '#1a2040'}]  w-[30px] h-[30px] rounded-lg flex justify-center items-center`}>
                <IoCard className={`text-[${pathname === '/Pages/Mainpage/Biling' ? 'white' : '#0571ff'}]`} />
              </div>
              <p className='mx-3'>Billing</p>
            </div>
          </Link>
          <Link href='/Pages/Mainpage/Defult' className='w-[78%] mt-1 rounded-2xl p-3 group hover:bg-[#1a2040] transition-all duration-300'>
            <div className='flex items-center text-white'>
              <div className='bg-[#1a2040] group-hover:bg-[#0571ff] group-hover:text-white transition-all duration-300 text-[#0571ff] w-[30px] h-[30px] rounded-lg flex justify-center items-center'><IoStatsChartSharp /></div>
              <p className='mx-3'>Tables</p>
            </div>
          </Link>
          <Link href='/Pages/Mainpage/Defult' className='w-[78%] mt-1 rounded-2xl p-3 group hover:bg-[#1a2040] transition-all duration-300'>
            <div className='flex items-center text-white'>
              <div className='bg-[#1a2040] group-hover:bg-[#0571ff] group-hover:text-white transition-all duration-300 text-[#0571ff] w-[30px] h-[30px] rounded-lg flex justify-center items-center'><IoBuild /></div>
              <p className='mx-3'>RTL</p>
            </div>
          </Link>
          <div className='w-[78%] mt-1 rounded-2xl p-3 '>
            <div className='flex items-center  text-white'>
              <p className='text-lg'>Account Pages</p>
            </div>
          </div>
          <Link href='/Pages/Mainpage/Defult' className='w-[78%] mt-1 rounded-2xl p-3 group hover:bg-[#1a2040] transition-all duration-300'>
            <div className='flex items-center text-white'>
              <div className='bg-[#1a2040] group-hover:bg-[#0571ff] group-hover:text-white transition-all duration-300 text-[#0571ff] w-[30px] h-[30px] rounded-lg flex justify-center items-center'><BiSolidUser /></div>
              <p className='mx-3'>Profile</p>
            </div>
          </Link>
          <Link href='/' className='w-[78%] mt-1 rounded-2xl p-3 group hover:bg-[#1a2040] transition-all duration-300'>
            <div className='flex items-center text-white'>
              <div className='bg-[#1a2040] group-hover:bg-[#0571ff] group-hover:text-white transition-all duration-300 text-[#0571ff] w-[30px] h-[30px] rounded-lg flex justify-center items-center'><MdInsertDriveFile /></div>
              <p className='mx-3'>Sign In</p>
            </div>
          </Link>
          <Link href='/Signup' className='w-[78%] mt-1 rounded-2xl p-3 group hover:bg-[#1a2040] transition-all duration-300'>
            <div className='flex items-center text-white'>
              <div className='bg-[#1a2040] group-hover:bg-[#0571ff] group-hover:text-white transition-all duration-300 text-[#0571ff] w-[30px] h-[30px] rounded-lg flex justify-center items-center'><IoIosRocket /></div>
              <p className='mx-3'>Sign Up</p>
            </div>
          </Link>
          <div className='w-[78%] mt-3 mb-3 h-[160px] bg-cover bg-no-repeat bg-back2 rounded-2xl p-3 group hover:bg-[#1a2040] transition-all duration-300'>
            <div className='flex flex-wrap text-white p-2'>
              <div className='w-[32px] h-[32px] group-hover:bg-[#0571ff] group-hover:text-white transition-all duration-300 text-[#0571ff] text-lg bg-white rounded-md flex justify-center items-center'><GoStarFill /></div>
              <p className='w-full font-semibold mt-2'>Need Help?</p>
              <p className='w-full text-sm'>Please check our docs</p>
              <div className='w-full rounded-lg mt-3 font-semibold  flex justify-center items-center text-sm p-2 bg-[#12123191]'>DOCUMENTATION</div>
            </div>
          </div>
          <div className='w-[78%] p-2 mb-3 flex justify-center items-center bg-[#0571ff] rounded-xl text-white text-sm font-semibold'>Upgrade to PRO</div>
        </div>
      </div>
    </aside>
  )
}
