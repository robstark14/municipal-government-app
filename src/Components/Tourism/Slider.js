import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import { Carousel } from "react-bootstrap";

function Slider({ref, executeScroll}) {
  
  return (
    <div className="relative">
      <div id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
           <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
           <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active float-left w-full">
            <img
                  src="https://res.cloudinary.com/dsmtfnutw/image/upload/v1667478089/San%20Lorenzo%20Ruiz%20App/IMAGES/Tourism/slider/zip-line3_b1gzjf.webp"
                  className="block w-full"
              
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img
                  src="https://res.cloudinary.com/dsmtfnutw/image/upload/v1667478031/San%20Lorenzo%20Ruiz%20App/IMAGES/Tourism/slider/mampurog2_i9b0kc.jpg"
                  className="block w-full"
              
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img
            src="https://res.cloudinary.com/dsmtfnutw/image/upload/v1667478483/San%20Lorenzo%20Ruiz%20App/IMAGES/Tourism/slider/nacali-falls_fov1kv.jpg"
            className="block w-full"
              
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img
            src="https://res.cloudinary.com/dsmtfnutw/image/upload/v1667478144/San%20Lorenzo%20Ruiz%20App/IMAGES/Tourism/slider/env-park_e7ylyz.jpg"
            className="block w-full"
              
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img
            src="https://res.cloudinary.com/dsmtfnutw/image/upload/v1667477983/San%20Lorenzo%20Ruiz%20App/IMAGES/Tourism/slider/mampurog3_pg4lev.jpg"
            className="block w-full"
              
            />
          </div>
        </div>
        <button
          className="font-bold carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="font-bold carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>

      <div className="transformY text-white absolute w-full top-1/2 text-center z-10">
        <h1 className="text-shadow-title md:text-5xl smMd:text-4xl sm:text-2xl text-base font-bold drop-shadow mb-8">
          Experience the Thrill in San Lorenzo Ruiz
        </h1>
        {/* <h3 className="text-shadow-subtitle mt-15px mb-4 md:text-2xl smMd:text-xl text-3vw font-medium"> */}
          {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, amet.  */}
        {/* </h3> */}
        <HashLink className="bg-rose-700 mt-1 py-2 px-6 rounded md:text-base smMd:text-sm text-xs uppercase tracking-wider "
          smooth
          to="#places"
        >
          Explore
        </HashLink>
      </div>
    </div>
  );
}

export default Slider;
