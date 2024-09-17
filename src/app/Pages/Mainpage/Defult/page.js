import React from 'react'
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { IoWallet } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { HiArrowSmRight } from "react-icons/hi";
import Firstgauge from '@/Components/Firstgauge';
import Secondgauge from '@/Components/Secondgauge';
import { MdOutlineEmojiEmotions } from "react-icons/md";
import Chartbar from '@/Components/Chartbar';
import Tableuser from '@/Components/Tableuser';
import Ordersoverview from '@/Components/Ordersoverview';
import { IoIosRocket } from "react-icons/io";
import { FaWrench } from "react-icons/fa";
import Chartline from '@/Components/Chartline';

export default function page() {
  return (
    <section className='text-white bg-cover bg-no-repeat bg-myback  bg-[#02021a] md:mt-24 mt-40 flex flex-wrap '>
      <div className='w-full flex flex-wrap *:mt-7 *:md:mt-1'>
        <div className='w-full flex justify-center md:w-1/2 lg:w-1/4'>
          <div className='w-[90%] bg-[#0c0e2a] p-4 flex items-center rounded-2xl '>
            <div className='w-[82%]'>
              <p className='text-[#a1b6c9]'>today's money</p>
              <div className='flex items-center'>
                <h3 className='text-white text-lg font-bold'>$53,000</h3>
                <p className='text-sm text-[#08c196] font-bold px-1'>+55%</p>
              </div>
            </div>
            <div className='w-[18%] flex justify-end'>
              <div className='rounded-xl w-[47px] h-[47px] bg-[#0571ff] flex justify-center items-center'><IoWallet className='text-xl ' /></div>
            </div>
          </div>
        </div>
        {/* ///2//// */}
        <div className='w-full flex justify-center md:w-1/2 lg:w-1/4'>
          <div className='w-[90%] bg-[#0c0e2a] p-4 flex items-center rounded-2xl '>
            <div className='w-[82%]'>
              <p className='text-[#a1b6c9]'>today's users</p>
              <div className='flex items-center'>
                <h3 className='text-white text-lg font-bold'>2,300</h3>
                <p className='text-sm text-[#08c196] font-bold px-1'>+3%</p>
              </div>
            </div>
            <div className='w-[18%] flex justify-end'>
              <div className='rounded-xl w-[47px] h-[47px] bg-[#0571ff] text-white flex justify-center items-center'><MdAccountCircle className='text-xl' /></div>
            </div>
          </div>
        </div>
        {/* /////3//// */}
        <div className='w-full flex justify-center md:w-1/2 lg:w-1/4'>
          <div className='w-[90%] bg-[#0c0e2a] p-4 flex items-center rounded-2xl '>
            <div className='w-[82%]'>
              <p className='text-[#a1b6c9]'>new clients</p>
              <div className='flex items-center'>
                <h3 className='text-white text-lg font-bold'>+3,462</h3>
                <p className='text-sm text-[#ce0e0e] font-bold px-1'>-2%</p>
              </div>
            </div>
            <div className='w-[18%] flex justify-end'>
              <div className='rounded-xl w-[47px] h-[47px] bg-[#0571ff] text-white flex justify-center items-center'><BsFillFileEarmarkTextFill className='text-xl' /></div>
            </div>
          </div>
        </div>

        {/* //////4///// */}
        <div className='w-full flex justify-center md:w-1/2 lg:w-1/4'>
          <div className='w-[90%] bg-[#0c0e2a] p-4 flex items-center rounded-2xl '>
            <div className='w-[82%]'>
              <p className='text-[#a1b6c9]'>total sales</p>
              <div className='flex items-center'>
                <h3 className='text-white text-lg font-bold'>$103,430</h3>
                <p className='text-sm text-[#08c196] font-bold px-1'>+5%</p>
              </div>
            </div>
            <div className='w-[18%] flex justify-end'>
              <div className='rounded-xl w-[47px] h-[47px] bg-[#0571ff] text-white flex justify-center items-center'><FaShoppingCart className='text-xl' /></div>
            </div>
          </div>
        </div>
      </div>
      {/* end of top  */}
      <div className='w-full flex flex-wrap mt-10'>
        <div className='w-full lg:w-[42%] p-4'>
          <div className='w-full text-[#a3b4c9] p-7 rounded-3xl bg-cardimgfree bg-cover bg-no-repeat'>
            <p className='mt-6'>Welcome back,</p>
            <h1 className='font-bold text-4xl mt-2 text-white'>Mark Johnson</h1>
            <p className='mt-4 text-md'>Glad to see you again!</p>
            <p className='text-md'>Ask me anything.</p>
            <div className='flex items-center mt-24 *:cursor-pointer text-white'> <p className=''>Top to Record</p> <HiArrowSmRight className='text-lg hover:translate-x-1 mx-1 font-bold transition-all duration-300' /></div>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-[25%] p-4 '>
          <div className='w-full rounded-2xl p-4 bg-[#0c0e2a] bg-cardback bg-no-repeat bg-cover'>
            <h3 className='mt-2 font-bold text-lg'>Satisfaction Rate</h3>
            <p className='text-[#7487a2]'>From all projects</p>
            <div className='w-full flex justify-center mt-6 mb-6'>
              <div className='w-[80%] relative'>
                <Secondgauge />
                <div className='absolute p-2 bottom-0 -left-2 bg-[#04081a] rounded-xl w-[110%] h-[79px]'>
                  <div className='w-full flex justify-evenly'>
                    <p className='text-[#a3b4c9] text-sm'>0%</p>
                    <p className='text-3xl text-white font-bold'>95%</p>
                    <p className='text-[#80a1c9] text-sm'>100%</p>
                  </div>
                  <div className='w-full  flex justify-center  text-[#a3b4c9]'>Based on likes</div>
                </div>
                <div className='absolute top-12 flex justify-center left-0 w-full'>
                  <div className='bg-[#0571ff] w-[50px] h-[50px] flex justify-center items-center rounded-full'>
                    <MdOutlineEmojiEmotions className='text-3xl' />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='w-full md:w-1/2 lg:w-[33%] p-4'>
          <div className='w-full flex flex-wrap justify-center rounded-2xl p-4 bg-cardback bg-no-repeat bg-cover  bg-[#0c0e2a]'>
            <h3 className='mt-2 w-full font-bold text-lg'>Referral Tracking</h3>
            <div className='flex w-[95%] flex-wrap mt-7 '>
              <div className='w-[33%]'>
                <div className='w-full p-5 mt-6 rounded-xl bg-[#04081a] text-white'>
                  <p className='text-[#a3b4c9]'>Invited</p>
                  <p className='text-lg font-bold'>145</p>
                  <p className='text-lg font-bold'>people</p>
                </div>
                <div className='w-full p-5 rounded-xl bg-[#04081a] text-white mt-4'>
                  <p className='text-[#a3b4c9]'>Bonus</p>
                  <p className='text-lg font-bold'>1,465</p>
                </div>
              </div>
              <div className='w-[67%] p-4'>
                <div className=' flex justify-end items-center text-[#20284a]'>
                  <Firstgauge />
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='w-full md:w-1/2 lg:w-[60%] p-5'>
          <div className='w-full flex  flex-wrap justify-center rounded-2xl bg-cardback2 bg-cover bg-no-repeat p-4'>
            <h3 className='w-full text-white mt-4 text-xl font-bold'>Sales Overview</h3>
            <div className='w-full mt-1 flex items-center text-[#09c96f] font-semibold '>+5% more<span className='mx-1 text-[#a3b4c9]'>in 2021</span></div>
            <div className='w-[100%] mt-8 mb-3'>
              <Chartline />
            </div>
          </div>

        </div>
        <div className='w-full md:w-1/2 lg:w-[40%] p-4'>
          <div className='w-full flex justify-center p-3 flex-wrap rounded-2xl bg-cardback2 bg-cover bg-no-repeat'>
            <div className='w-[100%] mt-3'>
              <Chartbar />

            </div>
            <div className='w-[95%] mt-5'>
              <h3 className='text-white text-xl font-bold'>Active Users</h3>
              <p className='flex items-center text-[#a3b4c9]'><span className='text-[#12d2a5] font-bold'>(+23)</span> than last week</p>
              <div className='w-full flex justify-between flex-wrap mt-5 mb-5'>
                <div className='w-[21%] flex flex-wrap'>
                  <div className='w-[24px] h-[24px] rounded-md bg-[#0571ff] text-white flex justify-center items-center'><IoWallet className='text-[12px]' /></div>
                  <p className='text-[#a3b4c9] mx-1'>Users</p>
                  <div className='w-full mt-3'>
                    <p className='text-xl text-white font-bold'>32,984</p>
                    <div className='w-[80%] relative translate-y-2'>
                      <div className='w-[100%] absolute h-[4px] rounded-2xl bottom-0 bg-[#85909e]'></div>
                      <div className='w-[65%] absolute h-[4px] rounded-2xl bottom-0 bg-[#0571ff]'></div>
                    </div>
                  </div>
                </div>
                <div className='w-[21%] flex flex-wrap'>
                  <div className='w-[24px] h-[24px] rounded-md bg-[#0571ff] text-white flex justify-center items-center'><IoIosRocket className='text-[12px]' /></div>
                  <p className='text-[#a3b4c9] mx-1'>Clicks</p>
                  <div className='w-full mt-3'>
                    <p className='text-xl text-white font-bold'>2,42M</p>
                    <div className='w-[80%] relative translate-y-2'>
                      <div className='w-[100%] absolute h-[4px] rounded-2xl bottom-0 bg-[#85909e]'></div>
                      <div className='w-[65%] absolute h-[4px] rounded-2xl bottom-0 bg-[#0571ff]'></div>
                    </div>
                  </div>
                </div>
                <div className='w-[21%] flex flex-wrap'>
                  <div className='w-[24px] h-[24px] rounded-md bg-[#0571ff] text-white flex justify-center items-center'><FaShoppingCart className='text-[12px]' /></div>
                  <p className='text-[#a3b4c9] mx-1'>Sales</p>
                  <div className='w-full mt-3'>
                    <p className='text-xl text-white font-bold'>2,400$</p>
                    <div className='w-[80%] relative translate-y-2'>
                      <div className='w-[100%] absolute h-[4px] rounded-2xl bottom-0 bg-[#85909e]'></div>
                      <div className='w-[65%] absolute h-[4px] rounded-2xl bottom-0 bg-[#0571ff]'></div>
                    </div>
                  </div>
                </div>
                <div className='w-[21%] flex flex-wrap'>
                  <div className='w-[24px] h-[24px] rounded-md bg-[#0571ff] text-white flex justify-center items-center'><FaWrench className='text-[12px]' /></div>
                  <p className='text-[#a3b4c9] mx-1'>Items</p>
                  <div className='w-full mt-3'>
                    <p className='text-xl text-white font-bold'>320</p>
                    <div className='w-[80%] relative translate-y-2'>
                      <div className='w-[100%] absolute h-[4px] rounded-2xl bottom-0 bg-[#85909e]'></div>
                      <div className='w-[65%] absolute h-[4px] rounded-2xl bottom-0 bg-[#0571ff]'></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
      {/* end of top  */}
      <div className='w-full flex flex-wrap'>
        <div className='w-full md:w-[67%] p-2'><Tableuser /></div>
        <div className='w-full flex justify-center md:w-[33%] p-2'><Ordersoverview /></div>
      </div>
      {/* end of top  */}

    </section>
  )
}
