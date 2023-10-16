import React, { useState } from 'react'
import { TiTick } from 'react-icons/ti'
import { servicesData } from '../Data/Services'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AiOutlineClose } from 'react-icons/ai'
import './styles.css';

const Services = () => {
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
        <section
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000" className='font-Poppins p-[6rem]'>
            <header className='flex flex-col justify-center gap-y-2 items-center'>
                <h3 className='text-3xl'>Our Services</h3>
                <span className='lg:text-md text-sm'>Discover  tailored services, perfect for you</span>
            </header>
            <div className='lg:grid grid-cols-3 '>
                {
                    servicesData.map(service => {

                        return (
                            <main className='lg:ml-10' key={service.id}>
                                <div className='flex flex-col  gap-y-8 bg-white shadow-md px-8 py-8 rounded-md mt-10'>
                                    <div className='flex flex-col items-center gap-y-4'>
                                        <h3>{service.title}</h3>
                                        <span className=' text-[#8092a8] text-[2rem]'>${service.amt}</span>
                                    </div>
                                    <div className='flex flex-row items-center gap-x-1'>
                                        <TiTick />
                                        <span>{service.payment}</span>
                                    </div>
                                    <div className='flex flex-row items-center gap-x-1'>
                                        <TiTick />
                                        <span>{service.train}</span>
                                    </div>
                                    <div className='flex flex-row items-center gap-x-1'>
                                        <TiTick />
                                        <span>{service.trade}</span>
                                    </div>
                                    <div className='flex flex-row items-center gap-x-1'>
                                        <TiTick />
                                        <span>{service.mentor}</span>
                                    </div>

                                    <button onClick={toggle} className='w-full  bg-[#8092a8] hover:#8092a8 hover:opacity-80 text-white px-4 rounded-sm font-[600] text-sm  py-[0.3rem]'>BOOK NOW</button>

                                    <Modal isOpen={modal} toggle={toggle} className='modal'>

                                        <div className='absolute md:top-[90px] md:right-[60px] top-[50px] right-[30px] cursor-pointer'>
                                            <AiOutlineClose color='#fff' onClick={handleClose} size={40} />
                                        </div>
                                        <div className='bg-white p-6 rounded-sm'>
                                            <form className="w-64">
                                                <div className='flex flex-col items-center justify-center'>
                                                    <h4>Pip Trading Course</h4>
                                                    <span className='text-2xl font-Poppins '>$400</span>
                                                </div>
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

                                                    className="font-Poppins bg-[#8092a8] hover:opacity-80 text-white py-2 px-4 rounded w-full"
                                                >
                                                    Submit
                                                </button>
                                            </form>
                                        </div>


                                    </Modal>
                                </div>
                            </main>
                        )
                    })
                }

            </div>


        </section>
    )
}

export default Services