import React from "react";
import { useParams } from "react-router";
import Navbar from "../Navbar/Navbar";
import SimpleNavBar from "../Navbar/SimpleNavBar";
import PlaceItem from "./PlaceItem";
import placesData from "./PlacesData";

import {
  Header,
  Description,
  Image,
  Button,
  CategoryStyled,
  Highlights,
} from "./styled-components";

function PlaceDetails() {
    const {placeId} = useParams()
   const selectedPlace = placesData.find(place => place.id == placeId)
   console.log(selectedPlace);

  window.scrollTo(0, 0);

  return (
    <div className="grid">
        <SimpleNavBar />
    <div className="lg:max-w-5xl mx-auto px-4 mt-[90px]">
      <Header>
        <Description>
          <h1>{selectedPlace.place_name}</h1>
          <h4>
            Visit {selectedPlace.place_name} located in {selectedPlace.location}, San Lorenzo Ruiz, Camarines Norte.
          </h4>
          <aside>
            {/* {categories &&
              categories.map((category, i) => {
                return <CategoryStyled key={i}>{category}</CategoryStyled>;
              })} */}
          </aside>
        </Description>
      </Header>

      <hr className="mt-2.5 mb-4 bg-gray-500" />

      {/* <Highlights> */}
        <div className="grid md:grid-cols-2 p-8 gap-4 ">
        <img src={`${selectedPlace.image}`} className= "w-full object-cover justify-end justify-center mb-8"  />
        <div>
          <h2 className="font-bold text-[#4b57a5] text-center mb-8">Highlights</h2>
          <p className="mb-4">{selectedPlace.place_description}</p>
          <p>Activities: {selectedPlace.activity}</p>
        </div>
        {/* <Button bgColor="#5666ad">See dates & book now</Button> */}

        {/* <Image src={`"${selectedPlace.image}"`}  /> */}
        </div>
      {/* </Highlights> */}
    </div>
 </div>
  );
}

export default PlaceDetails;
