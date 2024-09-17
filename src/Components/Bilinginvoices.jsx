import React from 'react'
import { BsFillFileEarmarkTextFill } from "react-icons/bs";

export default function Bilinginvoices() {
  return (
    <div className='w-full rounded-2xl bg-cover pb-10 bg-no-repeat bg-cardback2 p-6'>
      <div className='w-full flex mt-3'>
        <h4 className='w-1/2 font-semibold flex items-center '>Invoices</h4>
        <div className='w-1/2 flex justify-end items-center '><div className='w-[120px] cursor-pointer hover:scale-[1.03]  transition-all duration-300 flex justify-center items-center text-sm font-semibold h-[30px] rounded-lg bg-[#0571ff]'>VIEW ALL</div></div>
      </div>
      <div className='w-full mt-10 flex'>
        <div className='w-1/2'>
          <p className='font-bold'>March, 01, 2020</p>
          <p className='text-[#a1b6c9] text-sm'>#MS-415646</p>
        </div>
        <div className='w-1/2 flex  text-[#a1b6c9]'>
          <p className='w-1/2 flex items-center justify-end'>$180</p>
          <p className='w-1/2 flex items-center justify-center'><BsFillFileEarmarkTextFill className='text-[15px] mx-1 text-white' />PDF</p>
        </div>
      </div>
      <div className='w-full mt-8 flex'>
        <div className='w-1/2'>
          <p className='font-bold'>February, 10, 2021</p>
          <p className='text-[#a1b6c9] text-sm'>#RV-126749</p>
        </div>
        <div className='w-1/2 flex  text-[#a1b6c9]'>
          <p className='w-1/2 flex items-center justify-end'>$250</p>
          <p className='w-1/2 flex items-center justify-center'><BsFillFileEarmarkTextFill className='text-[15px] mx-1 text-white' />PDF</p>
        </div>
      </div>
      <div className='w-full mt-8 flex'>
        <div className='w-1/2'>
          <p className='font-bold'>April, 05, 2020</p>
          <p className='text-[#a1b6c9] text-sm'>#QW-103578</p>
        </div>
        <div className='w-1/2 flex  text-[#a1b6c9]'>
          <p className='w-1/2 flex items-center justify-end'>$120</p>
          <p className='w-1/2 flex items-center justify-center'><BsFillFileEarmarkTextFill className='text-[15px] mx-1 text-white' />PDF</p>
        </div>
      </div>
      <div className='w-full mt-8 flex'>
        <div className='w-1/2'>
          <p className='font-bold'>June, 25, 2019</p>
          <p className='text-[#a1b6c9] text-sm'>#MS-415646</p>
        </div>
        <div className='w-1/2 flex  text-[#a1b6c9]'>
          <p className='w-1/2 flex items-center justify-end'>$180</p>
          <p className='w-1/2 flex items-center justify-center'><BsFillFileEarmarkTextFill className='text-[15px] mx-1 text-white' />PDF</p>
        </div>
      </div>
      <div className='w-full mt-8 flex'>
        <div className='w-1/2'>
          <p className='font-bold'>March, 01, 2019</p>
          <p className='text-[#a1b6c9] text-sm'>#AR-803481</p>
        </div>
        <div className='w-1/2 flex  text-[#a1b6c9]'>
          <p className='w-1/2 flex items-center justify-end'>$300</p>
          <p className='w-1/2 flex items-center justify-center'><BsFillFileEarmarkTextFill className='text-[15px] mx-1 text-white' />PDF</p>
        </div>
      </div>

    </div>
  )
}
