import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";



function CarouselDemo() {
  return (
    <div className="w-full pt-10">
      <Carousel className="carousel">
        <div className="grid lg:grid-cols-3 gap-4">
          <img
            src={"/images/project2.jpg"}
            alt="Image"
            className='h-fit w-fit'
          />
          <img
            src={"/images/project9.jpg"}
            alt="Image"
            className="object-cover "
          />
          <img
            src={"/images/assembly3.png"}
            alt="Image"
            className="object-cover "
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          <img
            src={"/images/project5.jpg"}
            alt="Image"
            className="object-cover "
          />
          <img
            src={"/images/project6.jpg"}
            alt="Image"
            className="object-cover "
          />
          <img
            src={"/images/speech1.jpg"}
            alt="Image"
            className="object-cover "
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          <img
            src={"/images/project8.jpg"}
            alt="Image"
            className="object-cover "
          />
          <img
            src={"/images/project9.jpg"}
            alt="Image"
            className="object-cover "
          />
          <img
            src={"/images/party2.jpg"}
            alt="Image"
            className="object-cover "
          />
        </div>
      </Carousel>
    </div>
  );
  
}

export default CarouselDemo