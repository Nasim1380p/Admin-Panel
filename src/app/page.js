'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import Switchdiv from './../Components/Switchdiv'
import SigninFrom from './../Components/SigninForm'
import Alert from '@/Components/Alert';
export default function page() {
  return (
    <section className='w-full flex flex-wrap justify-center'>
      <header className='w-full h-[80px] md:mt-4 md:bg-no-repeat md:bg-back2 md:bg-cover' >
        <div className='flex md:hidden w-full text-white px-8 pt-6 text-2xl cursor-pointer items-center justify-end'><CgMenu /></div>
        <nav className='w-full hidden md:flex   mt-7 mb-7 justify-center items-center'>
          <ul className='flex justify-center *:cursor-pointer items-center w-[50%] *:text-white *:mx-3'>
            <li>Pages</li>
            <li>Authentication</li>
            <li>Aplication</li>
            <li>Ecommerce</li>
          </ul>
        </nav>
      </header>
      <h1 className='w-full md:text-6xl text-4xl text-white text-center md:mt-10 mt-3 font-bold'>Welcome!</h1>
      {/* <p className='text-center xl:w-[45%] lg:w-[95%] md:w-[100%] w-[90%] mt-5 ttext-sm font-bold text-white'>Use these awesome forms to login or create new account in your project for free.</p> */}
      <div className=' w-full flex flex-wrap justify-center md:mt-10 mb-6 mt-5'>
        <div className='md:w-[60%] md:flex hidden flex-wrap justify-center items-center mt-8 mb-8 '>
          <Image className='w-[80%]' src='/g.webp' width={450} height={450} alt='imgsvg' />

        </div>
        <div className='md:w-[40%] w-full flex justify-center mt-6 mb-6 '>
          <div className='xl:w-[70%] md:w-[90%] sm:w-[60%] flex flex-wrap justify-center w-[88%] rounded-3xl border-[3px] bg-[#10102e] border-[#7c7eda95]'>
            <h3 className='text-center w-full mt-8 text-lg font-bold text-white'>Login with</h3>
            <div className='flex w-full justify-center *:mx-3 *:mt-8 *:mb-7'>
              <div className='w-[80px] h-[80px] text-2xl cursor-pointer border-[2px] bg-[#10105745] hover:bg-[#17175e53] transition-all duration-200 rounded-2xl border-[#6c7f97] flex justify-center items-center text-white'><FaFacebook /></div>
              <div className='w-[80px] h-[80px] text-2xl cursor-pointer border-[2px]  bg-[#10105745] hover:bg-[#17175e53] transition-all duration-200 rounded-2xl border-[#6c7f97] flex justify-center items-center text-white'><FaApple /></div>
              <div className='w-[80px] h-[80px] text-2xl cursor-pointer border-[2px] bg-[#10105745] hover:bg-[#17175e53] transition-all duration-200 rounded-2xl border-[#6c7f97] flex justify-center items-center text-white'><FaGoogle /></div>
            </div>
            <p className='w-full text-center text-[#9092e982]'>or</p>
            <SigninFrom />
            <div className='w-[80%] flex items-center mt-2'><div className=''><Switchdiv /></div><spna className='text-white m-2'>Remember me</spna></div>
            <p className='w-full text-center text-[#6c7f97] mt-5 mb-8'>Don't have an account ? <Link className='m-1 text-white animate-pulse font-bold' href='/Signup'>Sign up</Link></p>
          </div>
        </div>
      </div>
      <div className='w-full text-white'>
        <Alert />
      </div>
    </section>
  )
}
