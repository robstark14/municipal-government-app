import React from 'react'
import Slide from "react-reveal/Slide";

function Banner({bannerTitle, imageUrl}) {
  return (
    <div className={`pt-[70px] font-Cabin relative bg-cover bg-center px-10 md:px-20 h-[700px] md:h-[360px] text-white py-4 px-2 object-fill overflow-hidden`} >
       <div className='w-full h-full absolute top-0 left-0 opacity-90 bg-[#051334A8] z-50'>
       
       </div>
       <img src={imageUrl} alt="" className='object-fill w-full overflow-hidden absolute left-0 right-0' />
       <div className="relative flex flex-col justify-center h-full mx-auto z-[60]">
        <Slide top>
        <p className="font-bold text-6xl pb-8 text-left px">{bannerTitle}</p>
        </Slide>
        
        <div className='h-[3px] bg-white w-[150px]'></div>

        </div>  
    </div>
  )
}

export default Banner