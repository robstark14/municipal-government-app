import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";



function CarouselProjects() {
  return (
    <div className="w-full pt-10">
      <Carousel className="carousel">
        <div className="grid lg:grid-cols-3 gap-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/project2.jpg?alt=media&token=edfa1492-2178-4bfb-98dc-19c14b2bff32"
            alt="Image"
            className='h-fit w-fit'
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/project9.jpg?alt=media&token=e8b1947d-cdd6-4532-bae0-0a6856738009"
            alt="Image"
            className="object-cover "
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/project4.jpg?alt=media&token=f677690d-c98e-4754-821e-369d3a1968df"
            alt="Image"
            className="object-cover "
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/project5.jpg?alt=media&token=b841fcd0-cfd2-435d-9639-d02e7a6723ab"
            alt="Image"
            className="object-cover "
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/project6.jpg?alt=media&token=7b52c5fc-4b71-44c1-b7a7-8954757feb83"
            alt="Image"
            className="object-cover "
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/project6.jpg?alt=media&token=7b52c5fc-4b71-44c1-b7a7-8954757feb83"
            alt="Image"
            className="object-cover "
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/project8.jpg?alt=media&token=5b294508-9c6d-435d-98c2-d71851153644"
            alt="Image"
            className="object-cover "
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/speech1.jpg?alt=media&token=1876eb0b-f6c3-4298-9478-5c96cf6680a4"
            alt="Image"
            className="object-cover "
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/party2.jpg?alt=media&token=00026ba7-9f5b-4465-9453-a9647b2ff171"
            alt="Image"
            className="object-cover "
          />
        </div>
      </Carousel>
    </div>
  );
  
}

export default CarouselProjects