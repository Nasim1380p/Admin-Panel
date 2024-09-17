import React from 'react'
import Image from 'next/image';
import { IoCheckmarkCircle } from "react-icons/io5";
import { SiAdobexd } from "react-icons/si"
import { FaSpotify } from "react-icons/fa"
import { FaInvision } from "react-icons/fa";
import { FaJira } from "react-icons/fa";
import { FaAtlassian } from "react-icons/fa6";
import { FaSlack } from "react-icons/fa6";
export default function Tableuser() {
  return (
    <div className='w-full flex flex-wrap rounded-2xl bg-cardback2 bg-cover bg-no-repeat p-4'>
      <h3 className='text-lg w-full mt-2 text-white font-bold mx-2'>Projects</h3>
      <div className='w-full flex  items-center mx-2'><IoCheckmarkCircle className='text-[green] text-lg ' /><p className='text-[#85909e] font-semibold'>30 done this month</p></div>
      <div className='md:w-[97%] w-full mt-8 *:text-sm *:font-semibold text-[#85909e] flex flex-wrap border-b-[1px] border-[#84848470] '>
        <div className='md:w-[40%] w-[50%] mb-2'><p>COMPANIES</p></div>
        <div className='md:w-[15%] w-[35%] mb-2'><p>MEMBERS</p></div>
        <div className='w-[15%] mb-2 flex justify-center'><p>BUDGET</p></div>
        <div className='md:w-[30%] hidden mb-2 md:flex justify-center'><p>COMPLETION</p></div>
      </div>
      {/* ////////////// سطر اول//////////////// */}
      <div className='md:w-[97%] w-full items-center h-[60px] *:text-sm *:font-semibold text-[white] flex flex-wrap border-b-[1px] border-[#84848470] '>
        <div className='md:w-[40%] w-[50%] flex items-center'>
          < SiAdobexd className='text-[#b311b3] text-lg' />
          <p className='text-white md:mx-3 mx-1'>Chakra Vision UI Version</p>
        </div>
        <div className='md:w-[15%] w-[35%]'>
          <div className='relative w-full'>
            <div className='w-[25px] h-[25px] -top-3 rounded-full absolute'>
              <Image className='rounded-full' width={100} height={100} src='/avatar1.webp' />

            </div>
            <div className='w-[25px] h-[25px] -top-3 left-3 rounded-full absolute'>
              <Image className='rounded-full' width={100} height={100} src='/avatar2.webp' />

            </div>
            <div className='w-[25px] h-[25px] -top-3 left-7 rounded-full absolute'>
              <Image className='rounded-full' width={100} height={100} src='/avatar3.webp' />
            </div>
            <div className='w-[25px] h-[25px] -top-3 left-10 rounded-full absolute'>
              <Image className='rounded-full' width={100} height={100} src='/avatar4.webp' />
            </div>
          </div>
        </div>
        <div className='w-[15%]  flex justify-center'><p className='font-bold'>$14,000</p></div>
        <div className='md:w-[30%] hidden md:flex flex-wrap justify-center'>
          <div className='text-white w-full mx-8'><p>60%</p></div>
          <div className='w-[70%] relative translate-y-2'>
            <div className='w-[100%] absolute h-[4px] rounded-2xl bottom-0 bg-[#85909e]'></div>
            <div className='w-[60%] absolute h-[4px] rounded-2xl bottom-0 bg-[#0571ff]'></div>
          </div>

        </div>
      </div>
      {/* //////////// سطر دوم////////// */}
      <div className='md:w-[97%] w-full items-center h-[60px] *:text-sm *:font-semibold text-[white] flex flex-wrap border-b-[1px] border-[#84848470] '>
        <div className='md:w-[40%] w-[50%] flex items-center'>
          < FaAtlassian className='text-[#2183f9] text-lg' />
          <p className='text-white md:mx-3 mx-1'>Add Progress Track</p>
        </div>
        <div className='md:w-[15%] w-[35%]'>
          <div className='relative w-full'>
            <div className='w-[25px] h-[25px] -top-3 rounded-full absolute'>
              <Image className='rounded-full' width={100} height={100} src='/avatar2.webp' />

            </div>
            <div className='w-[25px] h-[25px] -top-3 left-3 rounded-full absolute'>
              <Image className='rounded-full' width={100} height={100} src='/avatar4.webp' />

            </div>

          </div>
        </div>
        <div className='w-[15%]  flex justify-center'><p className='font-bold'>$3,000</p></div>
        <div className='md:w-[30%] hidden md:flex flex-wrap justify-center'>
          <div className='text-white w-full mx-8'><p>10%</p></div>
          <div className='w-[70%] relative translate-y-2'>
            <div className='w-[100%] absolute h-[4px] rounded-2xl bottom-0 bg-[#85909e]'></div>
            <div className='w-[10%] absolute h-[4px] rounded-2xl bottom-0 bg-[#0571ff]'></div>
          </div>

        </div>
      </div>
      {/* /////////////// سطر سوم //////////// */}
      <div className='md:w-[97%] w-full items-center h-[60px] *:text-sm *:font-semibold text-[white] flex flex-wrap border-b-[1px] border-[#84848470] '>
        <div className='md:w-[40%] w-[50%] flex items-center'>
          < FaSlack className='text-[#f0c712] text-lg' />
          <p className='text-white md:mx-3 mx-1'>Fix Platform Errors</p>
        </div>
        <div className='md:w-[15%] w-[35%]'>
          <div className='relative w-full'>
            <div className='w-[25px] h-[25px] -top-3 rounded-full absolute'>
              <Image className='rounded-full' width={100} height={100} src='/avatar1.webp' />

            </div>

            <div className='w-[25px] h-[25px] -top-3 left-3 rounded-full absolute'>
              <Image className='rounded-full' width={100} height={100} src='/avatar3.webp' />
            </div>

          </div>
        </div>
        <div className='w-[15%]  flex justify-center'><p className='font-bold'>Not set</p></div>
        <div className='md:w-[30%] hidden md:flex flex-wrap justify-center'>
          <div className='text-white w-full mx-8'><p>100%</p></div>
          <div className='w-[70%] relative translate-y-2'>
            <div className='w-[100%] absolute h-[4px] rounded-2xl bottom-0 bg-[#85909e]'></div>
            <div className='w-[100%] absolute h-[4px] rounded-2xl bottom-0 bg-[#0571ff]'></div>
          </div>

        </div>
      </div>
      {/* ////////////// سطر چهارم///////////// */}
      <div className='md:w-[97%] w-full items-center h-[60px] *:text-sm *:font-semibold text-[white] flex flex-wrap border-b-[1px] border-[#84848470] '>
        <div className='md:w-[40%] w-[50%] flex items-center'>
          < FaSpotify className='text-[#0bdd0b] text-lg' />
          <p className='text-white md:mx-3 mx-1'>Launch our Mobile App</p>
        </div>
        <div className='md:w-[15%] w-[35%]'>
          <div className='relative w-full'>
            <div className='w-[25px] h-[25px] -top-3 rounded-full absolute'>
              <Image className='rounded-full' width={100} height={100} src='/avatar4.webp' />

            </div>
            <div className='w-[25px] h-[25px] -top-3 left-3 rounded-full absolute'>
              <Image className='rounded-full' width={100} height={100} src='/avatar3.webp' />

            </div>
            <div className='w-[25px] h-[25px] -top-3 left-7 rounded-full absolute'>
              <Image className='rounded-full' width={100} height={100} src='/avatar2.webp' />
            </div>
            <div className='w-[25px] h-[25px] -top-3 left-10 rounded-full absolute'>
              <Image className='rounded-full' width={100} height={100} src='/avatar1.webp' />
            </div>
          </div>
        </div>
        <div className='w-[15%]  flex justify-center'><p className='font-bold'>$20,500</p></div>
        <div className='md:w-[30%] hidden md:flex flex-wrap justify-center'>
          <div className='text-white w-full mx-8'><p>100%</p></div>
          <div className='w-[70%] relative translate-y-2'>
            <div className='w-[100%] absolute h-[4px] rounded-2xl bottom-0 bg-[#85909e]'></div>
            <div className='w-[100%] absolute h-[4px] rounded-2xl bottom-0 bg-[#0571ff]'></div>
          </div>

        </div>
      </div>
      {/* ////////////// سطر پنجم///////////// */}
      <div className='md:w-[97%] w-full items-center h-[60px] *:text-sm *:font-semibold text-[white] flex flex-wrap border-b-[1px] border-[#84848470] '>
        <div className='md:w-[40%] w-[50%] flex items-center'>
          < FaJira className='text-[#2183f9] text-lg' />
          <p className='text-white md:mx-3 mx-1'>Add the New Pricing Page</p>
        </div>
        <div className='md:w-[15%] w-[35%]'>
          <div className='relative w-full'>
            <div className='w-[25px] h-[25px] -top-3 rounded-full absolute'>
              <Image className='rounded-full' width={100} height={100} src='/avatar4.webp' />
            </div>
          </div>
        </div>
        <div className='w-[15%]  flex justify-center'><p className='font-bold'>$14,000</p></div>
        <div className='md:w-[30%] hidden md:flex flex-wrap justify-center'>
          <div className='text-white w-full mx-8'><p>25%</p></div>
          <div className='w-[70%] relative translate-y-2'>
            <div className='w-[100%] absolute h-[4px] rounded-2xl bottom-0 bg-[#85909e]'></div>
            <div className='w-[25%] absolute h-[4px] rounded-2xl bottom-0 bg-[#0571ff]'></div>
          </div>

        </div>
      </div>
      {/* //////////////سطر ششم ///////////// */}
      <div className='md:w-[97%] w-full items-center mb-5 h-[55px] *:text-sm *:font-semibold text-[white] flex flex-wrap '>
        <div className='md:w-[40%] w-[50%] flex items-center'>
          <  FaInvision className='text-[#f94f6b] text-lg' />
          <p className='text-white md:mx-3 mx-1'>Redesign New Online Shop</p>
        </div>
        <div className='md:w-[15%] w-[35%]'>
          <div className='relative w-full'>
            <div className='w-[25px] h-[25px] -top-3 rounded-full absolute'>
              <Image className='rounded-full' width={100} height={100} src='/avatar1.webp' />
            </div>
            <div className='w-[25px] h-[25px] -top-3 left-3 rounded-full absolute'>
              <Image className='rounded-full' width={100} height={100} src='/avatar4.webp' />
            </div>

          </div>
        </div>
        <div className='w-[15%]  flex justify-center'><p className='font-bold'>$2,000</p></div>
        <div className='md:w-[30%] hidden md:flex flex-wrap justify-center'>
          <div className='text-white w-full mx-8'><p>40%</p></div>
          <div className='w-[70%] relative translate-y-2'>
            <div className='w-[100%] absolute h-[4px] rounded-2xl bottom-0 bg-[#85909e]'></div>
            <div className='w-[40%] absolute h-[4px] rounded-2xl bottom-0 bg-[#0571ff]'></div>
          </div>

        </div>
      </div>


    </div>
  )
}
