import React from 'react'
import Banner from '../../Banner';
import OrdinancesCard from './OrdinancesCard';
import OrdinancesData from './OrdinancesData';

function Ordinances() {
    return (
        <div className=''>
          <Banner bannerTitle="Ordinances" imageUrl={'https://res.cloudinary.com/dsmtfnutw/image/upload/v1667585846/San%20Lorenzo%20Ruiz%20App/IMAGES/Others/hero3_urddny.jpg'}/>
          <div className='w-full h-full text-black p-4 md:p-20 bg-gray-100 grid md:grid-cols-2  gap-4'>
            {OrdinancesData.map((ord,index) => {
              return <OrdinancesCard key={index} {...ord} />;
            })}
        </div>
            </div>
      )
}

export default Ordinances