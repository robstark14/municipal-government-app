import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";



function CarouselClients() {
  return (
    <div className="pt-10 mx-auto rounded bg-gray-200">
      <Carousel>
        <div className="mx-auto max-w-[700px]  ">
          <img src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/memo1.jpg?alt=media&token=4a5947e2-7838-4f59-a08a-c7a1458a9c59" alt="memo" className='' />
          <div className="text-left">
          </div>
        </div>
        <div className="mx-auto max-w-[700px]">
          <img src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/memo2.jpg?alt=media&token=c01a16fa-1c97-4395-a4ba-2bf6c2fdbca6" alt="memo" className='' />
          <div className="text-left">
          </div>
        </div>
        <div className="mx-auto max-w-[700px]">
          <img src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/memo3.jpg?alt=media&token=7ab14543-e130-4b84-a868-91dea9c05902" alt="memo" className='' />
          <div className="text-left">
          </div>
        </div>
        <div className="mx-auto max-w-[700px]">
          <img src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/memo4.jpg?alt=media&token=60c4da05-a3f3-41a7-82ab-ff6b18c0c2ed" alt="memo" className='' />
          <div className="text-left">
          </div>
        </div>
        <div className="mx-auto max-w-[700px]">
          <img src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/memo4.jpg?alt=media&token=60c4da05-a3f3-41a7-82ab-ff6b18c0c2ed" alt="memo" className='' />
          <div className="text-left">
            
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselClients