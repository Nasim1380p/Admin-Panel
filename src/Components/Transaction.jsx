import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaCalendarWeek } from "react-icons/fa6";
import { IoAlertOutline } from "react-icons/io5";


export default function Transaction() {
  return (
    <div className='w-full p-6 rounded-3xl bg-[#090c2a]'>
      <div className='w-full flex flex-wrap items-center'>
        <p className='md:text-xl text-md w-[40%] font-bold mt-3 mb-2'>Your Transaction's</p>
        <div className='w-[60%] text-[#99a7b8] md:text-md text-sm flex justify-end items-center'>< FaCalendarWeek className='mr-2 text-white' />23 - 30 March 2020</div>
      </div>
      <h2 className='w-full mt-4 text-[#99a7b8] text-[12px] font-bold'>NEWEST</h2>
      <div className='w-full mt-5 flex flex-wrap'>
        <div className='w-[65%] flex items-center'>
          <div className='w-[38px] h-[38px] hover:text-[#cb0d0d] hover:border-[#cb0d0d] transition-all duration-200 cursor-pointer rounded-full border-[1px] mr-3 text-[red] border-[red] flex items-center justify-center'><IoIosArrowRoundDown className='text-xl' /></div>
          <div>
            <h4 className='font-bold  text-md flex items-center'>Netflix</h4>
            <p className='text-[#99a7b8] text-[12px] font-bold'>27 March 2020, at 12:30 PM</p>
          </div>
        </div>
        <div className='w-[35%] flex justify-end font-semibold text-[red] items-center'>- $ 2,500</div>
      </div>
      {/* ///////////////////2////////////////// */}
      <div className='w-full mt-6 flex flex-wrap'>
        <div className='w-[65%] flex items-center'>
          <div className='w-[38px] h-[38px]  cursor-pointer hover:text-[#0b9569] hover:border-[#0b9569] transition-all duration-200 rounded-full border-[1px] mr-3 text-[#11c28a] border-[#11c28a] flex items-center justify-center'><IoIosArrowRoundUp className='text-xl' /></div>
          <div>
            <h4 className='font-bold  text-md flex items-center'>Apple</h4>
            <p className='text-[#99a7b8] text-[12px] font-bold'>27 March 2020, at 04:30 AM</p>
          </div>
        </div>
        <div className='w-[35%] flex justify-end font-semibold text-[#11c28a] items-center'>+ $ 2,000</div>
      </div>
      {/* ///////////////// 3///////////////////////// */}
      <h2 className='w-full mt-7 text-[#99a7b8] text-[12px] font-bold'>yesterday</h2>
      {/* ////////////////// 4//////////////////////////// */}
      <div className='w-full mt-6 flex flex-wrap'>
        <div className='w-[65%] flex items-center'>
          <div className='w-[38px] h-[38px] hover:text-[#0b9569] hover:border-[#0b9569] transition-all duration-200 cursor-pointer rounded-full border-[1px] mr-3 text-[#11c28a] border-[#11c28a] flex items-center justify-center'><IoIosArrowRoundUp className='text-xl' /></div>
          <div>
            <h4 className='font-bold  text-md flex items-center'>Stripe</h4>
            <p className='text-[#99a7b8] text-[12px] font-bold'>26 March 2020, at 13:45 PM</p>
          </div>
        </div>
        <div className='w-[35%] flex justify-end font-semibold text-[#11c28a] items-center'>+ $ 750</div>
      </div>
      {/* ///////////////////////5/////////////////// */}
      <div className='w-full mt-6 flex flex-wrap'>
        <div className='w-[65%] flex items-center'>
          <div className='w-[38px] h-[38px] hover:text-[#0b9569] hover:border-[#0b9569] transition-all duration-200 cursor-pointer rounded-full border-[1px] mr-3 text-[#11c28a] border-[#11c28a] flex items-center justify-center'><IoIosArrowRoundUp className='text-xl' /></div>
          <div>
            <h4 className='font-bold  text-md flex items-center'>HubSpot</h4>
            <p className='text-[#99a7b8] text-[12px] font-bold'>26 March 2020, at 12:30 PM</p>
          </div>
        </div>
        <div className='w-[35%] flex justify-end font-semibold text-[#11c28a] items-center'>+ $ 1,000</div>
      </div>
      {/* /////////////////////6///////////////////// */}
      <div className='w-full mt-6 flex flex-wrap'>
        <div className='w-[65%] flex items-center'>
          <div className='w-[38px] h-[38px] hover:text-[#0b9569] hover:border-[#0b9569] transition-all duration-200 cursor-pointer rounded-full border-[1px] mr-3 text-[#11c28a] border-[#11c28a] flex items-center justify-center'><IoIosArrowRoundUp className='text-xl' /></div>
          <div>
            <h4 className='font-bold  text-md flex items-center'>HubSpot</h4>
            <p className='text-[#99a7b8] text-[12px] font-bold'>26 March 2020, at 08:30 AM</p>
          </div>
        </div>
        <div className='w-[35%] flex justify-end font-semibold text-[#11c28a] items-center'>+ $ 2,500</div>
      </div>
      {/* ////////////////////////7////////////////////// */}
      <div className='w-full mt-6 flex flex-wrap mb-6'>
        <div className='w-[65%] flex items-center'>
          <div className='w-[38px] hover:text-[#6e7986] hover:border-[#6e7986] transition-all duration-200 cursor-pointer h-[38px] rounded-full border-[1px] mr-3 text-[#99a7b8] border-[#99a7b8] flex items-center justify-center'><IoAlertOutline className='text-xl' /></div>
          <div>
            <h4 className='font-bold  text-md flex items-center'>Webflow</h4>
            <p className='text-[#99a7b8] text-[12px] font-bold'>26 March 2020, at 05:00 AM</p>
          </div>
        </div>
        <div className='w-[35%] flex justify-end font-semibold text-[#99a7b8] items-center'>pending</div>
      </div>
      {/* /////////////// end //////////////////// */}
    </div>
  )
}
