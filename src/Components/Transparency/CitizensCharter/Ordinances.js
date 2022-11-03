import React from 'react'
import Banner from '../../Banner';
import OrdinancesCard from './OrdinancesCard';
import OrdinancesData from './OrdinancesData';

function Ordinances() {
    return (
        <div className=''>
          <Banner bannerTitle="Ordinances"/>
          <div className='w-full h-full text-black p-4 md:p-20 bg-gray-100 grid md:grid-cols-2  gap-4'>
            {OrdinancesData.map((ord,index) => {
              return <OrdinancesCard key={index} {...ord} />;
            })}
        </div>
            </div>
      )
}

export default Ordinances