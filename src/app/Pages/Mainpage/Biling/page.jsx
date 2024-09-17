import React from 'react'
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import Bilinginvoices from '@/Components/Bilinginvoices';
import { FaPen } from "react-icons/fa";
import { MdOutlineDomain } from "react-icons/md";
import BillingInformation from '@/Components/BillingInformation';
import Transaction from '@/Components/Transaction';

export default function page() {
  return (
    <section className='w-full 2xl:container mx-auto  bg-cover bg-no-repeat bg-myback md:mt-24 mt-40 flex flex-wrap'>
      <div className='w-full flex flex-wrap mt-3 text-white '>
        <div className='w-full lg:w-[68%] p-4'>
          <div className='w-full flex flex-wrap '>
            <div className='w-full flex flex-wrap'>
              <div className='w-full md:w-1/2 p-2'>
                <div className='w-full text-white p-8 rounded-3xl bg-cover bg-no-repeat bg-bilingback'>
                  <div className='flex flex-wrap'>
                    <p className='w-1/2 text-lg font-semibold'>Vision UI</p>
                    <div className='felx w-1/2 justify-end'></div>
                    <div className='w-full flex  relative'>
                      <div className='w-[25px]  h-[25px] absolute bottom-0 right-0 rounded-full bg-white border-[1px] border-[#272323]'></div>
                      <div className='w-[25px] h-[25px] absolute bottom-0 right-4 rounded-full bg-white border-[1px] border-[#1f1d1d]'></div>
                    </div>
                  </div>
                  <div className='mt-16 flex *:mr-5 *:text-2xl font-bold'>
                    <span>7812</span>
                    <span>2139</span>
                    <span>0823</span>
                    <span>7916</span>
                  </div>
                  <div className='mt-6 flex *:mr-6'>
                    <div className=''>
                      <p className='text-[13px] font-semibold text-[#c8ced3]'>VALID THRU</p>
                      <p className='font-semibold'>05/24</p>
                    </div>
                    <div>
                      <p className='text-[#c8ced3] font-semibold text-[15px]'>cvv</p>
                      <p className='font-semibold'>09X</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ///// card 2////// */}
              <div className='w-full md:w-1/2  p-2 '>
                <div className='w-full rounded-3xl p-6 bg-cover bg-no-repeat bg-[#090c2a]'>
                  <div className='w-full p-5 rounded-2xl bg-cover bg-no-repeat bg-cardback1'>
                    <div className='flex items-center justify-between'><p className='text-[13px] font-bold'>Credit Balance</p><PiDotsThreeOutlineFill className='text-2xl' /></div>
                    <div className='text-4xl font-bold mt-1'>$25,215</div>
                  </div>
                  <div className='w-full mt-7'>
                    <p className='text-[#9d9e9f] w-full font-bold text-[11px]'>NEWEST</p>
                    <div className='w-full flex-wrap flex  mt-3'>
                      <div className='w-[50%] flex items-center flex-wrap'>
                        <div className='w-[40px] h-[40px] rounded-full bg-cover bg-no-repeat bg-cardback1 mr-3 flex items-center justify-center'><MdOutlineDomain className='text-[#10c082] text-xl' /></div>
                        <div>
                          <h4 className='font-bold'>Bill & Taxes</h4>
                          <h4 className='text-[#9d9e9f] font-bold text-sm'>Today, 16:36</h4>
                        </div>
                      </div>
                      <div className='w-[50%] flex items-center justify-end font-bold'>-$154.50</div>
                    </div>

                  </div>
                </div>
              </div>
              {/* ///////end card 2////////// */}
            </div>
            <div className='w-full flex flex-wrap rounded-3xl bg-[#090c2a] bg-cover bg-no-repeat bg-cardback2 mt-7'>
              <div className='w-full p-5  flex justify-between flex-wrap'>
                <div className='w-[50%] font-bold text-xl'>Payment Method</div>
                <div className='w-[50%] flex justify-end'>
                  <div className='w-[140px] h-[41px] cursor-pointer hover:scale-[1.03] transition-all duration-300 font-bold bg-[#0571ff] rounded-xl text-[12px] flex items-center justify-center'>ADD NEW CARD</div>
                </div>
              </div>
              <div className='w-full flex flex-wrap *:md:mt-1 *:md:mb-4'>
                <div className='w-full p-3 md:w-1/2'>
                  <div className='w-full p-5 flex flex-wrap rounded-2xl border-[2px] border-[#b7bcfda1]'>
                    <div className='w-[80%] flex flex-wrap items-center'>
                      <div className='w-[20%] relative'>
                        <div className='w-[14px] h-[14px] rounded-full absolute -bottom-2 left-2 bg-[red]'></div>
                        <div className='w-[14px] h-[14px] rounded-full absolute -bottom-2 left-4 bg-[#ff8800]'></div>
                      </div>
                      <p className='w-[80%] font-bold'>7812 2139 0823 XXXX</p>
                    </div>
                    <div className='w-[20%] flex items-center justify-end'><FaPen /></div>
                  </div>
                </div>
                <div className='w-full p-3 md:w-1/2'>
                  <div className='w-full p-5 flex flex-wrap rounded-2xl border-[2px] border-[#b7bcfda1]'>
                    <div className='w-[80%] flex flex-wrap items-center'>
                      <div className='w-[20%] text-[12px] font-bold'>
                        VISA
                      </div>
                      <p className='w-[80%] font-bold'>7812 2139 0823 XXXX</p>
                    </div>
                    <div className='w-[20%] flex items-center justify-end'><FaPen /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-[32%] p-4'><Bilinginvoices /></div>
      </div>
      <section className='w-full flex text-white flex-wrap '>
        <div className='w-full lg:w-[55%] p-3'><BillingInformation /></div>
        <div className='w-full lg:w-[45%] p-3'><Transaction /></div>
      </section>
    </section>
  )
}
