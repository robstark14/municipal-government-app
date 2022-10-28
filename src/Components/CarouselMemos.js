import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";



function CarouselClients() {
  return (
    <div className="pt-10 mx-auto bg-stone-700 rounded">
      <Carousel>
        <div className="mx-auto max-w-[700px]  ">
          <img src="/images/memo1.jpg" alt="memo" className='' />
          <div className="text-left">
          </div>
        </div>
        <div className="mx-auto max-w-[700px]">
          <img src="/images/memo2.jpg" alt="memo" className='' />
          <div className="text-left">
          </div>
        </div>
        <div className="mx-auto max-w-[700px]">
          <img src="/images/memo3.jpg" alt="memo" className='' />
          <div className="text-left">
          </div>
        </div>
        <div className="mx-auto max-w-[700px]">
          <img src="/images/memo4.jpg" alt="memo" className='' />
          <div className="text-left">
          </div>
        </div>
        <div className="mx-auto max-w-[700px]">
          <img src="/images/hotline.jpg" alt="memo" className='' />
          <div className="text-left">
            
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselClients