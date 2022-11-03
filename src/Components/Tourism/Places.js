import React from 'react'
import { useParams } from 'react-router-dom';
import PlaceItem from './PlaceItem';
import placesData
 from './PlacesData';
function Places({ref}) {
  
  
  return (
    <section className="lg:max-w-7xl mx-auto pt-10" id="places">
      <h1 className="relative w-fit py-[35px] mx-auto text-center text-[#4b57a5] font-bold lg:text-3xl text-xl my-4">
        Tourist Spots
      </h1>
      <h2 className="text-lg text-center text-textGray font-Poppins mb-3">
        We present the best experiences to enjoy and get to know San Lorenzo Ruiz
      </h2>
      <p id="info"></p>
      <div
        id="list"
        className="grid lg:grid-cols-3 smMd:grid-cols-2 grid-cols-1 justify-around"
      >
        {placesData.map((place,index) => {
          return <PlaceItem key={index} {...place} />;
        })}
      </div>

      {/* <button className="bg-rose-700 mt-1 py-2 px-6 rounded md:text-base smMd:text-sm text-xs uppercase tracking-wider text-white mx-auto">Load more..</button> */}
    </section>
  )
}

export default Places