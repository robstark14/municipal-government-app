import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PlaceItem from '../../Tourism/PlaceItem';
import TransparencyCard from '../../Transparency/TransparencyCard';
import Slide from "react-reveal/Slide";
import localOfficialData from './LocalOfficialsData';
import LocalOfficialItem from './LocalOfficialItem';


function LocalOfficialHome() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
    <div className='grid gap-4 md:flex p-4 font-Montserrat'>
        <div className='grid w-full md:w-1/4 px-4'>
            <h1 className='font-bold text-[2rem]'>Meet Your Elected Officials</h1>
            <p>Each government officials brings a different life and career perspective to decision making for the Province to give 
                us a diversity of thought and representation. We proudly serve our community by listening, caring and making decisions
                 that push us towards betterment and suitability as a province and a community.
            </p>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 contact-btn">
                <button className="text-white border rounded px-7 py-2 md:px-5 hover:text-white c-btn relative tracking-wider overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-br from-[#6664F1] to-[#C94AF0]"></span>
                  <span className="absolute inset-0 flex justify-center items-center">
                    See all Officials
                  </span>
                  See all Officials
                </button>
              </div>
        </div>
        <Carousel
        //   swipeable={false}
        //   draggable={false}
        className='w-full md:w-3/4'
        draggable
        swipeable
        showDots={true}
        responsive={responsive}
        //   ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay
        //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all 1"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile, desktop"]}
        //   deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
            {localOfficialData.map((official,index)=>{

                return(
                    <LocalOfficialItem key={index} {...official}/>
                )

            })}

        </Carousel>;

    </div>
  )
}

export default LocalOfficialHome