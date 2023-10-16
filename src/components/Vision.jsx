import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import vision from '../assets/Vission.webp'
const Vision = () => {
  return (
    <div
     data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000" className='flex mt-10 font-Poppins flex-col items-center justify-center'>
      <header className='lg:text-5xl text-3xl font-[500]'>Mision & Vision</header>
      {/* <div className='border-[#8092a8] border w-[22rem] mt-2'></div> */}
      <section className='lg:flex flex-row items-center gap-x-20 py-10 '>
        <div className='flex items-center justify-center' >
          <img className='lg:w-[32rem] lg:h-[32rem] w-[20rem] h-[20rem] object-contain' src={vision} alt="" />
        </div>
        <main className='flex-1 bg-[white] lg:w-[24rem] mx-16 py-14  px-10'>
          <div className='flex flex-row items-center gap-x-2'>
            <AiFillHome />
            <span className='font-[500] '>OUR MISSION</span>
          </div>
          <h3 className='text-[#8092a8] pt-4'>What we stand for?</h3>
          <p className='py-8 text-sm leading-6'>
          Pip Block Trading is on a mission to empower traders worldwide, enabling them to excel in the fundamentals of trading, technical analysis, and risk management. Our dedication lies in providing a comprehensive educational program that actively guides traders in honing their skills and achieving profitability and success in the world of forex trading.
          </p>
          <button
            type="submit"
            className="font-Poppins bg-[#8092a8] hover:opacity-80 text-white py-2 px-4 rounded w-full"
          >
            Get Started {">"}
          </button>
        </main>
      </section>
    </div>
  )
}

export default Vision