import React from 'react'
import Link from 'next/link'
export default function Footer() {
  return (
    <footer className='w-[95%] mt-8 flex flex-wrap pt-3 pb-5 lg:w-[78%] ml-auto '>
      <div className='md:w-[34%] w-full text-white'>Developed by : <Link className='animate-pulse text-[#b0bcf5]' href='https://github.com/Nasim1380p'>Nasim Pirghollo</Link></div>
      <div className='md:w-[60%] hidden md:flex'>
        <ul className='w-full text-white flex justify-end *:mx-4 *:cursor-pointer'>
          <li>Marketplace</li>
          <li>Blog</li>
          <li>License</li>
        </ul>
      </div>
    </footer>
  )
}
