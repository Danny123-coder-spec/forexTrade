import React,{useState} from 'react'

const Forms = () => {
    const [formInput, setFormInput] = useState({
        yourname:"",
        email:"",
        contact:"",
        textarea:"",
    });

    const [email, setEmail] = useState('');
  
    

    const handleChange = (e) => {
        setEmail(e.target.value);
    }
  return (
    <div className='flex py-24  justify-center items-center'>
    <div className='p-8  shadow-2xl rounded-md py-10 bg-white h-full border-t-2 border-blue-300 border-b-2 '>
        <form action="">
            <div className='md:flex flex-row  md:gap-x-6 '>
               <div className='flex flex-col'>
                    <label htmlFor="">
                            Your Name
                        </label>
                        <input className=" focus:border-sky-500 md:w-64 w-[26rem] focus:border-1 transition-all duration-400 focus:ring-sky-500 p-[0.375rem] rounded-sm border-blue-50  mt-[0.3rem] outline-none border " type="text" value={email} onChange={handleChange}/>
               </div>
                <div className='flex flex-col md:mt-0 mt-4'>
                    <label htmlFor="">
                        Your Email
                    </label>
                    <input className=" focus:border-sky-500 md:w-64 w-[26rem] focus:border-1 focus:ring-sky-500 transition-all duration-400 p-[0.375rem] rounded-sm border-blue-50 mt-[0.3rem] outline-none border" type="text" value="" onChange=""/>
                </div>
            </div>
            <div className='flex flex-col mt-[1.3rem]'>
                <label htmlFor="">
                    Contact
                </label>
                <input className=" focus:border-sky-500 focus:border-1 focus:ring-sky-500 transition-all duration-400 p-[0.375rem] rounded-sm border-blue-50 mt-[0.3rem] outline-none border" type="text" value="" />
            </div>
           <div className='flex flex-col mt-[1.3rem]'>
                <label htmlFor="">
                        Message
                    </label>
                <textarea className=" focus:border-sky-500 focus:border-1 focus:ring-sky-500 transition-all duration-400 rounded-sm border-blue-50 mt-[0.3rem] outline-none border p-2"name="" id="" cols="30" rows="10"></textarea> 
           </div>
            <div className='flex justify-center items-center mt-8'>
              <button type="button" className='rounded-full bg-blue-300 px-6 py-2 text-white hover:bg-blue-200 transition-all duration-100'>Send Message</button>
            </div>
        </form>
    </div>

</div>
  )
}

export default Forms