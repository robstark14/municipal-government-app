import React from "react";

import Fade from "react-reveal/Fade";
import { HashLink } from "react-router-hash-link";
import AboutCounter from "./AboutCounter";
import Zoom from 'react-reveal/Zoom';
import Jello from 'react-reveal/Jello';
import Slide from 'react-reveal/Slide';
import LightSpeed from 'react-reveal/LightSpeed';
import { Link } from "react-router-dom";




function Header() {
  return (
    <div 
    className="relative bg-white w-full overflow-hidden"
    // className="relative bg-white w-full lg:px-28 lg:h-screen overflow-hidden bg-no-repeat 
    // bg-[url('https://res.cloudinary.com/dsmtfnutw/image/upload/v1667483281/San%20Lorenzo%20Ruiz%20App/IMAGES/Others/thrill_luvtho.jpg')] 
    // bg-[length:400px_300px] md:bg-[length:600px_500px] bg-bottom md:bg-right z-10"
    >
      <div id="carouselExampleIndicators" className="carousel slide relative mt-[70px]" data-bs-ride="carousel">
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 z-50">
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
          {/* <button
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
          ></button> */}
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active float-left w-full">
          <div className="bg-blueRgba absolute top-0 left-0 w-full h-full z-10"></div>
          <div className="transformY text-white absolute w-full top-1/4 text-center z-10 font-Cabin">
          <h1 className="z-[9999] text-shadow-title md:text-3xl smMd:text-2xl sm:text-2xl text-base drop-shadow font-Lora mb-2">
            Welcome to the Official Website of
          </h1>
          <LightSpeed right opposite>
            <div className="z-[9999] text-shadow-title md:text-6xl smMd:text-6xl sm:text-4xl text-base font-bold drop-shadow mb-8 font-Montserrat bg-white w-full"></div>
          </LightSpeed>
          <Slide right>
          <h1 className="z-[9999] text-shadow-title md:text-6xl smMd:text-6xl sm:text-4xl text-base font-bold drop-shadow mb-8 font-Montserrat">
            The Municipality of San Lorenzo Ruiz
          </h1>
            </Slide>
          {/* <h3 className="text-shadow-subtitle mt-15px mb-4 md:text-2xl smMd:text-xl text-3vw font-medium"> */}
            {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, amet.  */}
          {/* </h3> */}
          <Link className="bg-rose-700 mt-1 py-2 px-6 rounded md:text-base smMd:text-sm text-xs uppercase tracking-wider " smooth to="about/history">
            Discover
          </Link>
         </div>
            <img src="https://res.cloudinary.com/dsmtfnutw/image/upload/v1667491268/San%20Lorenzo%20Ruiz%20App/IMAGES/Others/hero3_imkmhs.jpg"/>
            
          </div>
          <div className="carousel-item float-left w-full bg-darkBlue">
          {/* <Jello top> */}
            <img
                  src="https://res.cloudinary.com/dsmtfnutw/image/upload/v1667499297/San%20Lorenzo%20Ruiz%20App/IMAGES/Others/thrill2_judmf9.jpg"
                  className="block w-full h-fit"
              
            />
          {/* </Jello> */}
          </div>
          {/* <div className="carousel-item float-left w-full">
            <img
            src="https://res.cloudinary.com/dsmtfnutw/image/upload/v1667483281/San%20Lorenzo%20Ruiz%20App/IMAGES/Others/thrill_luvtho.jpg"
            className="block w-full"
              
            />
          </div> */}
          {/* <div className="carousel-item float-left w-full">
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
          </div> */}
        </div>
        <button
          className="z-50 font-bold carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="z-50 font-bold carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="z-50 carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="z-50 visually-hidden">Next</span>
        </button>
        </div>

       
   
     {/* <Navbar className="z-999" /> */}
      {/* <div className="lg:flex lg:pt-10">
        <Fade left cascade>
          <div className="lg:w-[800px] container pt-[500px] pt-20 xl:pt-24 lg:pt-10 md:pt-80 font-Lora"> */}
             {/* <iframe src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/Videos%2Fhero.mp4?alt=media&token=5653197a-2363-4a86-ba02-ab722fccb4a1"
                className="absolute top-0 left-0 w-screen h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe> */}
          {/* <div className="video-container">
              <video autoplay muted loop playsinline poster="cake.jpg">
              <source src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/Videos%2Fhero.mp4?alt=media&token=5653197a-2363-4a86-ba02-ab722fccb4a1"  type="video/webm"/>
          </video>
          </div> */}

            {/* <img src="https://res.cloudinary.com/dsmtfnutw/image/upload/v1667483281/San%20Lorenzo%20Ruiz%20App/IMAGES/Others/thrill_luvtho.jpg" alt="" className="block md:hidden"/> */}
            {/* <h1 className="px-2 font-[1000] xl:text-[4.2rem] lg:text-[3rem] md:text-[3.2rem] text-3xl lg:w-[79%] text-stone-300 xl:leading-[5rem] md:leading-[4rem]">
              Welcome to{" "} <br/>
              <span className="text-transparent bg-clip-text bg-black drop-shadow-2xl ">
                {" "}
               San Lorenzo Ruiz{" "} 
              </span>
 
              
            </h1> */}
            {/* <div className="xl:flex justify-start mt-7">
        
              <p className="xl:w-[50%] lg:w-[70%] md:w-[80%] text-[14px] text-black px-2 lg:leading-6 xl:pl-5 xl:pt-0 pt-4 pb-4 bg-white">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, animi voluptatem minima architecto quae numquam magni dolorum dolor, excepturi quia quos sed laudantium distinctio explicabo doloribus molestiae ab eaque ratione!
              </p>
            </div> */}
          {/* </div>
        </Fade> */}
        
      {/* </div> */}
    </div>
  );
}

export default Header;
