import React from 'react'

function Banner({bannerTitle}) {
  return (
    <div className="relative bg-cover bg-center h-[500px] text-white py-4 px-2 object-fill text-black bg-[url('https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2Fbanner.png?alt=media&token=3c747c4d-1c4a-474f-ae79-a9bdecdce8a5')]" >
       <div className='w-full h-full absolute top-0 left-0 opacity-90 bg-stone-900 z-50'></div>
       <div className="relative md:w-1/2 flex flex-col justify-center items-center h-full mx-auto z-[60]">
        <p className="font-bold text-6xl uppercase pb-8">{bannerTitle}</p>
        <div className='h-[3px] bg-white w-[150px]'></div>

        </div>  
    </div>
  )
}

export default Banner