import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import mission from '../assets/mission.webp'
const Mission = () => {
  return (
    <div 
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000" className='lg:flex mt-10 font-Poppins flex-col lg:items-center items-start lg:justify-center'>
     
      {/* <div className='border-[#8092a8] border w-[22rem] mt-2'></div> */}
      <section className='lg:flex flex-row lg:items-center lg:gap-x-10  lg:px-32 px-16'>
        <main className='flex-1 bg-[white] lg:w-[24rem] w-full py-14  px-10'>
          <div className='flex flex-row items-center gap-x-2'>
            <AiFillHome />
            <span className='font-[500] '>OUR VISION</span>
          </div>
          <h3 className='text-[#8092a8] pt-4'>What we stand for?</h3>
          <p className='py-8 text-sm leading-6'>
          At Pip Block Trading, our vision is to empower traders worldwide to excel in the fundamentals of trading, technical analysis, and risk management. We are dedicated to providing an educational program that guides traders in honing their skills and realizing profitability and success in forex trading.
          </p>
          <button
            type="submit"
            className="font-Poppins bg-[#8092a8] hover:opacity-80 text-white py-2 px-4 rounded w-full"
          >
            Get Started {">"}
          </button>
        </main>

        <div >
          <img className='w-[32rem] h-[32rem] object-contain' src={mission} alt="" />
        </div>
      </section>
    </div>
  )
}

export default Mission