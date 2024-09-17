import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
export default function BillingInformation() {
  return (
    <div className='w-full p-5 rounded-3xl bg-[#090c2a]'>
      <h3 className='text-xl font-bold mt-2 mb-2'>Billing Information</h3>
      <div className='mt-5 p-5 rounded-2xl bg-cover bg-no-repeat bg-cardback1'>
        <div className='flex flex-wrap justify-between mt-3'>
          <h4 className='font-bold'>Oliver Liam</h4>
          <div className='flex *:mr-5 flex-wrap justify-end items-center'>
            <div className='flex text-[red] hover:text-[#eb4b2e] transition-all duration-200 cursor-pointer items-center justify-end text-[13px] font-semibold'><MdDelete className='mr-1 text-[15px]' />DELETE</div>
            <div className=' flex text-[#99a7b8] hover:text-[white] transition-all duration-20 cursor-pointer items-center justify-end text-[13px] font-semibold'><FaPen className='mr-1' />EDIT</div>
          </div>
        </div>
        <p className='text-[#99a7b8] text-[13px] font-semibold mt-3'>Company Name:   viking burrito</p>
        <p className='text-[#99a7b8] text-[13px] font-semibold'>Email Address:   oliver@burrito.com</p>
        <p className='text-[#99a7b8] text-[13px] font-semibold'>VAT Number:   FRB1235476</p>
      </div>
      {/* 2  */}
      <div className='mt-7 p-5 rounded-2xl bg-cover bg-no-repeat bg-cardback1'>
        <div className='flex flex-wrap justify-between mt-3'>
          <h4 className='font-bold'>Lucas Harper</h4>
          <div className='flex *:mr-5 flex-wrap justify-end items-center'>
            <div className='flex text-[red] hover:text-[#eb4b2e] transition-all duration-20 items-center justify-end text-[13px] font-semibold'><MdDelete className='mr-1 text-[15px]' />DELETE</div>
            <div className=' flex text-[#99a7b8] hover:text-[white] transition-all duration-20 items-center justify-end text-[13px] font-semibold'><FaPen className='mr-1' />EDIT</div>
          </div>
        </div>
        <p className='text-[#99a7b8] text-[13px] font-semibold mt-3'>Company Name:   stone tech zone</p>
        <p className='text-[#99a7b8] text-[13px] font-semibold'>Email Address:   lucas@stone-tech.com</p>
        <p className='text-[#99a7b8] text-[13px] font-semibold'>VAT Number:   FRB1235476</p>
      </div>
      {/* 3 */}
      <div className='mt-7 p-5 rounded-2xl bg-cover bg-no-repeat bg-cardback1'>
        <div className='flex flex-wrap justify-between mt-3'>
          <h4 className='font-bold'>Ethan James</h4>
          <div className='flex *:mr-5 flex-wrap justify-end items-center'>
            <div className='flex text-[red] hover:text-[#eb4b2e] transition-all duration-20 items-center justify-end text-[13px] font-semibold'><MdDelete className='mr-1 text-[15px]' />DELETE</div>
            <div className=' flex text-[#99a7b8] hover:text-[white] transition-all duration-20 items-center justify-end text-[13px] font-semibold'><FaPen className='mr-1' />EDIT</div>
          </div>
        </div>
        <p className='text-[#99a7b8] text-[13px] font-semibold mt-3'>Company Name:   fiber notion</p>
        <p className='text-[#99a7b8] text-[13px] font-semibold'>Email Address:   ethan@fiber.com</p>
        <p className='text-[#99a7b8] text-[13px] font-semibold'>VAT Number:   FRB1235476</p>
      </div>
    </div>
  )
}
