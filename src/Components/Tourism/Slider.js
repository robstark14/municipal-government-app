import React from "react";
import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";

function Slider() {
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
                  src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fzip-line3.webp?alt=media&token=968f37ed-12b6-4419-9c60-6353aee1da37"
                  className="block w-full"
              
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img
                  src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fmampurog3.jpg?alt=media&token=26426733-70be-4ea5-86ee-030ca0003f6d"
                  className="block w-full"
              
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img
            src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fplaces%2Fmapurog2.jpg?alt=media&token=ee6dc2b7-46bc-4a84-abed-f021206e4b3f"
            className="block w-full"
              
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img
            src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fmampurog2.jpg?alt=media&token=7c8cd803-0418-4fc8-8981-5fafb3ca5b84"
            className="block w-full"
              
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img
            src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fplaces%2Fenv-park.jpg?alt=media&token=154e70d6-3752-4843-a123-c692af31ef82"
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
        <Link to="#places" className="bg-rose-700 mt-1 py-2 px-6 rounded md:text-base smMd:text-sm text-xs uppercase tracking-wider ">
          Explore
        </Link>
      </div>
    </div>
  );
}

export default Slider;
