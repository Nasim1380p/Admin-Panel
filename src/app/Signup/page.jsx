'use client'
import React from 'react'
import Image from 'next/image'
import SignupForm from './../../Components/SignupForm'

export default function page() {
  return (
    <section className='w-full flex flex-wrap justify-center bg-no-repeat bg-back2 bg-cover'>
      <div className='lg:w-[70%] w-full flex flex-wrap justify-center  mt-20 mb-24'>
        <div className='lg:w-[32%] hidden  text-white z-20 translate-x-4 lg:flex justify-end items-end'><Image className='xl:w-[52%] lg:w-[70%] h-[79%]' src='/girl.webp' width={450} height={450} alt='imgsvg' /></div>
        <SignupForm />
        <div className='lg:w-[32%] -translate-x-16 text-white hidden lg:flex justify-start items-end'><Image className='w-[53%] h-[40%]' src='/girl2.webp' width={450} height={450} alt='imgsvg' /></div>
      </div>

    </section>
  )
}
