import React from 'react'
import { BsBellFill } from "react-icons/bs";
import { FaCss3Alt } from "react-icons/fa";
import { IoCard } from "react-icons/io5";
import { SiAdobexd } from "react-icons/si"
import { IoLogoDropbox } from "react-icons/io5"
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

export default function Ordersoverview() {
  return (
    <div className='w-full flex flex-wrap pb-14 rounded-2xl bg-cardback bg-cover bg-no-repeat p-5'>
      <h3 className='text-lg w-full mt-5 text-white font-bold mx-2'>Orders overview</h3>
      <div className='w-full flex  items-center mx-2'><IoCheckmarkCircle className='text-[green] text-lg ' /><p className='text-[#85909e] font-semibold'>+30% this month</p></div>
      <div className='mt-8 w-[100%] flex flex-wrap '>
        <div className='w-[10%] text-[#0571ff] mt-2'><BsBellFill /></div>
        <div className='w-[90%]'>
          <p className='text-md text-white font-semibold'>$2400, Design changes</p>
          <p className='text-[#85909e] font-semibold text-sm'>22 DEC 7:20 PM</p>
        </div>
      </div>
      <div className='mt-4 w-[100%] flex flex-wrap'>
        <div className='w-[10%] text-[red] mt-2'><FaCss3Alt /></div>
        <div className='w-[90%]'>
          <p className='text-md text-white font-semibold'>New order#1832412</p>
          <p className='text-[#85909e] font-semibold text-sm'>21 DEC 11 PM</p>
        </div>
      </div>
      <div className='mt-4 w-[100%] flex flex-wrap'>
        <div className='w-[10%] text-[#5789da] mt-2'><FaShoppingCart /></div>
        <div className='w-[90%]'>
          <p className='text-md text-white font-semibold'>Server payments for April</p>
          <p className='text-[#85909e] font-semibold text-sm'>21 DEC 9:34 PM</p>
        </div>
      </div>
      <div className='mt-4 w-[100%] flex flex-wrap'>
        <div className='w-[10%] text-[#e4d605] mt-2'><IoCard /></div>
        <div className='w-[90%]'>
          <p className='text-md text-white font-semibold'>New card added for order #4395133</p>
          <p className='text-[#85909e] font-semibold text-sm'>20 DEC 2:20 AM</p>
        </div>
      </div>
      <div className='mt-4 w-[100%] flex flex-wrap'>
        <div className='w-[10%] text-[#b266f6] mt-2'><IoLogoDropbox /></div>
        <div className='w-[90%]'>
          <p className='text-md text-white font-semibold'>New card added for order #4395133</p>
          <p className='text-[#85909e] font-semibold text-sm'>18 DEC 4:54 AM</p>
        </div>
      </div>
      <div className='mt-4 w-[100%] flex flex-wrap'>
        <div className='w-[10%] text-[#b311b3] mt-2'>< SiAdobexd /></div>
        <div className='w-[90%]'>
          <p className='text-md text-white font-semibold'>New order #9583120</p>
          <p className='text-[#85909e] font-semibold text-sm'>17 DEC</p>
        </div>
      </div>
    </div>
  )
}
