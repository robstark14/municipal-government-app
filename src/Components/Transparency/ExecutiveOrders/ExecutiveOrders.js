import React from 'react'
import Banner from '../../Banner';
import EOcard from './EOcard';
import EOdata from './EOdata'

function ExecutiveOrders() {
  return (
    <div className=''>
      <Banner bannerTitle="Executive Orders"/>
    <div className='w-full h-full text-black p-20 bg-gray-100 grid grid-cols-2  gap-4'>
        {EOdata.map((place,index) => {
          return <EOcard key={index} {...place} />;
        })}
    </div>
        </div>
  )
}

export default ExecutiveOrders