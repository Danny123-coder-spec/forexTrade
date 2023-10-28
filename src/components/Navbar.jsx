import React from 'react'
import logo from '../assets/logo (1).png'
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [navbar, setNavBackground] = useState(false);
  const [toggle, setToggle] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 200) {
      setNavBackground(true);
    } else {
      setNavBackground(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.addEventListener("scroll", addEventListener)
    }
  }, []);

  const handleClickMenu = () => {
    setToggle(!toggle);
  }

  const handleClickClose = () => {
    setToggle(false);
  }
  const navLinks = [
    "Home",
    "About",
    "Services",
    "Mission",
    "FAQS"
  ]


  return (
    <section className={`absolute  z-50 left-0 right-0 ${navbar ? "bg-black" : "bg-none"} ease-in-out duration-500 `}>
      <div className='flex flex-row  lg:items-center lg:justify-between lg:mx-28 py-6'>
        <img className='w-16 h-16 object-contain' src={logo} alt="" />
        <div className='lg:flex lg:flex-row hidden list-none items-center '>
          {navLinks.map(link => {
            return (
              <NavLink className='font-Poppins hover:text-black text-white  pl-6'>
                <li>{link}</li>
              </NavLink>
            )
          })}

          {!toggle ? (

            <CiMenuBurger
              className="lg:hidden block cursor-pointer"
              onClick={() => setToggle(true)}
            />

          ) : (
            <CiMenuBurger
              className="lg:hidden block cursor-pointer"
              onClick={() => setToggle(true)}
            />
          )}
          {toggle && (
            <div className='lg:hidden block absolute bg-white top-20 left-0 right-0'>
              {navLinks.map(link => {
              return (
                <NavLink className='font-Poppins hover:text-[#8092a8]  pl-6'>
                  <li>{link}</li>
                </NavLink>
              )
            })}
            </div>
          )}
          {/* <div className='ml-6'>
                <Link to=''>
                  <button className='bg-[#8092a8] hover:bg-[#8092a8] hover:opacity-80 text-white px-4 rounded-sm font-Poppins text-xs  py-[0.3rem]'>Login</button>
                </Link>
                <Link to=''>
                  <button className='bg-[#8092a8] hover:bg-[#8092a8] hover:opacity-80 text-white px-4 rounded-sm font-Poppins text-xs py-[0.3rem] ml-4'>Register</button>
                </Link>
            </div> */}
        </div>
      </div>
    </section>
  )
}

export default Navbar