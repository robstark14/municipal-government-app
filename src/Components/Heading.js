import React from 'react'
import Head from "./gov_seal.png"
import Logo from "./sample_logo.jpeg"
import { GrFacebookOption } from "react-icons/gr";
import { FiYoutube } from "react-icons/fi";
import { GrTwitter } from "react-icons/gr";

function Heading() {
  return (
    <div className='w-full h-[8rem] bg-white text-white flex justify-center py-2 px-4'>
        <div className='flex font-serif max-w-[700px]'>
            <img src={Logo} alt="gov" className='mr-[1rem] md:mr-[4rem] '/>
            <div className='grid text-black'>
                <h3 className='text-sm xl:text-lg lg:text-lg md:text-lg'>REPUBLIC OF THE PHILIPPINES</h3>
                <div className='h-[2px] w-full bg-black'></div>
                <h1 className='font-bold text-sm xl:text-lg lg:text-lg md:text-lg'>MUNICIPAL GOVERNMENT OF SAN LORENZO RUIZ</h1>
                <h3 className='hidden xl:block lg:block md:block '>San Lorenzo Ruiz, Camarines Norte</h3>
            </div> 
            <div className='items-center w-[150px] absolute right-0 bottom-[4.5rem] hidden md:flex justify-end pt-5 gap-4 socials mr-4'>
            <div className="relative overflow-hidden block footer-div cursor-pointer">
                <span className="block">
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
  )
}

export default Heading