import React from 'react'

function Banner({bannerTitle}) {
  return (
    <div className="relative bg-cover bg-center h-[500px] text-white py-4 px-2 object-fill bg-[url('https://res.cloudinary.com/dsmtfnutw/image/upload/v1667477784/San%20Lorenzo%20Ruiz%20App/IMAGES/Others/banner_vwn6hm.png')]" >
       <div className='w-full h-full absolute top-0 left-0 opacity-90 bg-stone-900 z-50'></div>
       <div className="relative md:w-1/2 flex flex-col justify-center items-center h-full mx-auto z-[60]">
        <p className="font-bold text-4xl md:text-6xl uppercase pb-8 text-center px">{bannerTitle}</p>
        <div className='h-[3px] bg-white w-[150px]'></div>

        </div>  
    </div>
  )
}

export default Banner