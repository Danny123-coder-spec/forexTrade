import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderData } from '../Data/Hero';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import { AiOutlineClose } from 'react-icons/ai'
import 'swiper/css/navigation';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import image from '../assets/phone2.png'

const Hero = () => {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');

  const toggle = () => setModal(!modal);

  const handleClose = () => {
    setModal(false)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handleNameChange = (e) => {
    setFullname(e.target.value);
  }
  const handleContactChange = (e) => {
    setContact(e.target.value);
  }
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  }

  const handleInputFocus = (e) => {
    e.target.parentNode.classList.add('active');
  };

  const handleInputBlur = (e) => {
    if (!e.target.value) {
      e.target.parentNode.classList.remove('active');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <section className='full h-screen flex flex-row items-start lg:pl-48 pl-10'>
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >

        {
          sliderData.map(slide => {
            return (
              <SwiperSlide>
                <div className='flex flex-col lg:gap-y-4 gap-y-2 '>
                  <div className='w-full  flex flex-col gap-y-4 items-start'>
                    <span className='lg:text-3xl text-lg font-[500]'>{slide.desc}</span>
                    <h4 >{slide.header}</h4>
                  </div>
                  <div className='flex flex-row items-center'>
                    <button onClick={toggle} className=' flex lg:justify-center lg:ml-0 ml-8  bg-[#8092a8] hover:bg-[#8092a8] hover:opacity-80 text-white px-4 rounded-sm font-[600] text-sm  py-[0.3rem]'>BOOK NOW</button>

                  </div>
                </div>
                <div className='lg:ml-24'>
                  <img className="" src={slide.img} alt="" />
                </div>

                <Modal isOpen={modal} toggle={toggle} className='modal'>

                  <div className='absolute md:top-[90px] md:right-[60px] top-[50px] right-[30px] cursor-pointer'>
                    <AiOutlineClose color='#fff' onClick={handleClose} size={40} />
                  </div>
                  <div className='bg-white p-6 rounded-sm'>
                    <form className="w-64">
                      <div className="mb-4">
                        <div className={`relative ${fullname ? 'mb-7' : 'mb-4'}`}>
                          <input
                            type="text"
                            id="name"
                            className="mt-2 outline-0  p-2 border-b rounded-sm w-full"
                            value={fullname}
                            onChange={handleNameChange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                          />
                          <label
                            htmlFor="name"
                            className={`font-Poppins absolute left-2 transition-all ${fullname ? 'active' : 'top-3 text-sm text-gray-400'
                              }`}
                          >
                            Full Name
                          </label>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className={`relative ${email ? 'mb-7' : 'mb-4'}`}>
                          <input
                            type="email"
                            id="email"
                            className="mt-2 outline-0 p-2 border-b rounded-sm w-full"
                            value={email}
                            onChange={handleEmailChange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                          />
                          <label
                            htmlFor="email"
                            className={`font-Poppins absolute left-2 transition-all ${email ? 'active' : 'top-4 text-sm text-gray-400'
                              }`}
                          >
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className={`relative ${contact ? 'mb-7' : 'mb-4'}`}>
                          <input
                            type="text"
                            id="contact"
                            className="mt-2 p-2 outline-0 border-b rounded-sm w-full"
                            value={contact}
                            onChange={handleContactChange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                          />
                          <label
                            htmlFor="contact"
                            className={`font-Poppins absolute left-2 transition-all ${contact ? '-top-3 text-xs text-gray-600' : 'top-3 text-sm text-gray-400'
                          }`}
                          >
                            Contact
                          </label>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className={`relative ${location ? 'mb-7' : 'mb-4'}`}>
                          <input
                            type="text"
                            id="location"
                            className="mt-2 p-2 outline-0 border-b rounded-sm w-full"
                            value={location}
                            onChange={handleLocationChange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                          />
                          <label
                            htmlFor="location"
                            className={`font-Poppins absolute left-2 transition-all ${location ? '-top-3 text-xs text-gray-600' : 'top-3 text-sm text-gray-400'
                              }`}
                          >
                            Location
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="font-Poppins  bg-[#8092a8] hover:opacity-80 text-white py-2 px-4 rounded w-full"
                      >
                        Submit
                      </button>
                    </form>
                  </div>


                </Modal>

              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Hero