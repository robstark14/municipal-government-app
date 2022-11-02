import React from 'react'
import Head from "./gov_seal.png"
import Logo from "./sample_logo.png"
import { GrFacebookOption } from "react-icons/gr";
import { FiYoutube } from "react-icons/fi";
import { GrTwitter } from "react-icons/gr";
import { AiTwotoneMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";



function Heading() {
  return (
    <div>
    <div className='w-screen grid text-center justify-items-center md:text-right md:flex lg:flex bg-stone-800 text-white py-2 px-[50px] md:items-center md:justify-between text-sm shadow-lg' id='heading'>
      <div className='grid items-center justify-items-center md:flex lg:flex  justify-between mx-0 md:mx-auto lg:mx-0'>
        <img src={Head} alt="" />
        <span className='md:ml-2'>GOVPH</span>
        <p className='text-[11px] md:ml-6'>Official Website of the Municipality of San Lorenzo Ruiz</p>
      </div>
      <div className='grid items-center justify-items-center md:flex lg:flex mx-auto md:mx-0 lg:mx-0'>
        <div className='flex w-fit'>
          <AiTwotoneMail className='text-[17px]'/>
          <a href="#" className='ml-2 text-[11px]'>sanlorenzoruiz.lgu@gmail.com</a>
        </div>
        <div className='flex w-fit'>
          <AiOutlinePhone className='md:ml-2 text-[15px]'/>
          <p className='ml-2 text-[11px]'>+63 921 845 2802</p>
        </div>
        <div className='flex justify-end items-center gap-4 socials md:ml-4 w-fit'>
          <div className="relative overflow-hidden block footer-div cursor-pointer">
            <span className="block ">
              <GrFacebookOption className="text-white bg-[#7A7893] rounded-full leading-4 p-2 h-8 w-8" />
            </span>
            <span>
              <GrFacebookOption className="text-white bg-[#6366F1] rounded-full leading-4 p-2 h-8 w-8" />
            </span>
          </div>
          <div className="relative overflow-hidden block footer-div cursor-pointer">
            <span className="block">
              <FiYoutube className="text-white bg-[#7A7893] rounded-full leading-4 p-2 h-8 w-8" />
            </span>
            <span>
              <FiYoutube className="text-white bg-[#c63232] rounded-full leading-4 p-2 h-8 w-8" />
            </span>
          </div>
          <div className="relative overflow-hidden block footer-div cursor-pointer">
            <span className="block">
              <GrTwitter className="text-white bg-[#7A7893] rounded-full leading-4 p-2 h-8 w-8" />
            </span>
            <span>
              <GrTwitter className="text-white bg-[#329ac6] rounded-full leading-4 p-2 h-8 w-8" />
            </span>
          </div>
        </div>
        </div>
    </div>
    <div className='w-full h-[8rem] bg-white text-white flex justify-center py-2 px-4'>
      
        <div className='flex font-serif max-w-[700px] justify-center'>
            <img src={Logo} alt="gov" className='mr-[1rem] md:mr-[4rem] '/>
            <div className='grid text-black'>
                <h3 className='text-sm xl:text-lg lg:text-lg md:text-lg'>REPUBLIC OF THE PHILIPPINES</h3>
                <div className='h-[2px] w-full bg-black'></div>
                <h1 className='font-bold text-sm xl:text-lg lg:text-lg md:text-lg'>MUNICIPAL GOVERNMENT OF SAN LORENZO RUIZ</h1>
                <h3 className='hidden xl:block lg:block md:block '>San Lorenzo Ruiz, Camarines Norte</h3>
            </div> 
          
           
         
        </div>   
      
    
    </div>
    </div>
  )
}

export default Heading