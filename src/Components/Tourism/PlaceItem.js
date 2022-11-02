import React from 'react'
import { Link, useParams } from 'react-router-dom';
import placesData from './PlacesData';
import Fade from "react-reveal/Fade";

function PlaceItem({place_name, image, activity, id}) {
    console.log(image);
    console.log(place_name);
    const {placeId} = useParams()
    return (
      
      <Link to={`/places/${id}`} className="rounded-t-xl h-[310px] mx-[0.65rem] overflow-hidden my-[1rem] bg-white flex flex-col gap-[0.2rem] hover:cursor-pointer shadow-md hover:shadow-xl ease-out">
        {/* <Fade bottom cascade> */}
          <img
            className={`h-full object-cover object-center duration-500 hover:scale-125 `}
            src={image}
          />
          <h2 className="text-[18px] font-bold mt-[4px] pl-[12px] bg-white z-50">{place_name}</h2>
          <div className="custom-subtitle p-2">
            {/* <div className="custom-images">
              <img src={star} className="w-5" alt="star" />
              <img src={star} className="w-5" alt="star" />
              <img src={star} className="w-5" alt="star" />
              <img src={star} className="w-5" alt="star" />
            </div> */}
            <p className="text-[#4b57a5] text-[15px] italic">{activity} </p>
          </div>
          {/* </Fade> */}
        </Link>
      );
}

export default PlaceItem