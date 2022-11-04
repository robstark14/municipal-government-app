import React from 'react'
import Banner from '../../Banner';
import EOcard from './EOcard';
import EOdata from './EOdata'

function ExecutiveOrders() {
  return (
    <div className=''>
      <Banner bannerTitle="Executive Orders" imageUrl={'https://res.cloudinary.com/dsmtfnutw/image/upload/v1667588734/San%20Lorenzo%20Ruiz%20App/IMAGES/Transparency/eo_gxtpyc.jpg'}/>
    <div className='w-full h-full text-black p-4 md:p-20 bg-gray-100 grid md:grid-cols-2  gap-4'>
        {EOdata.map((place,index) => {
          return <EOcard key={index} {...place} />;
        })}
    </div>
        </div>
  )
}

export default ExecutiveOrders