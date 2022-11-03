import React from "react";
import CarouselMemos from "./CarouselMemos";
import Fade from "react-reveal/Fade";
import ImageGallery from 'react-image-gallery';


function Memos() {
  const images = [
    {
      original: "https://res.cloudinary.com/dsmtfnutw/image/upload/v1667505138/San%20Lorenzo%20Ruiz%20App/IMAGES/Memos/undas-guidelines_imxqlx.jpg",
      thumbnail: 'https://res.cloudinary.com/dsmtfnutw/image/upload/v1667505138/San%20Lorenzo%20Ruiz%20App/IMAGES/Memos/undas-guidelines_imxqlx.jpg',
    },
    {
      original: "https://res.cloudinary.com/dsmtfnutw/image/upload/v1667480143/San%20Lorenzo%20Ruiz%20App/IMAGES/Memos/memo1_p1hwng.jpg",
      thumbnail: 'https://res.cloudinary.com/dsmtfnutw/image/upload/v1667480143/San%20Lorenzo%20Ruiz%20App/IMAGES/Memos/memo1_p1hwng.jpg',
    },
    {
      original: "https://res.cloudinary.com/dsmtfnutw/image/upload/v1667480143/San%20Lorenzo%20Ruiz%20App/IMAGES/Memos/memo2_pj23f6.jpg",
      thumbnail: 'https://res.cloudinary.com/dsmtfnutw/image/upload/v1667480143/San%20Lorenzo%20Ruiz%20App/IMAGES/Memos/memo2_pj23f6.jpg',
    },
    {
      original: "https://res.cloudinary.com/dsmtfnutw/image/upload/v1667480143/San%20Lorenzo%20Ruiz%20App/IMAGES/Memos/memo3_xoxafd.jpg",
      thumbnail: 'https://res.cloudinary.com/dsmtfnutw/image/upload/v1667480143/San%20Lorenzo%20Ruiz%20App/IMAGES/Memos/memo3_xoxafd.jpg',
    },
    {
      original: "https://res.cloudinary.com/dsmtfnutw/image/upload/v1667480143/San%20Lorenzo%20Ruiz%20App/IMAGES/Memos/hotline_dll0jt.jpg",
      thumbnail: 'https://res.cloudinary.com/dsmtfnutw/image/upload/v1667480143/San%20Lorenzo%20Ruiz%20App/IMAGES/Memos/hotline_dll0jt.jpg',
    },
   
    

  ];
  return (

    
    <div>
      <div className="pt-[100px] lg:px-28 px-10 pb-10 border-b">
        <Fade bottom cascade>
        <h1 className="text-[#202b5d] font-Cabin text-4xl pb-2 font-bold uppercase text-left">
          Announcements
        </h1>
        <div className='h-[5px] bg-[#324597]  mb-14 w-[70px] '></div>

          {/* <p className="text-[#696984] pt-4 pb-5 text-center">
            Trusted by 5000+ companies worldwide.
          </p> */}
          <div className="bg-darkBlue p-8">

        <ImageGallery items={images} />
          </div>

          {/* <CarouselMemos /> */}
        </Fade>
      </div>
    </div>
  );
}

export default Memos;
