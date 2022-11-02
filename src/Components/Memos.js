import React from "react";
import CarouselMemos from "./CarouselMemos";
import Fade from "react-reveal/Fade";
import ImageGallery from 'react-image-gallery';


function Memos() {
  const images = [
    {
      original: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/memo1.jpg?alt=media&token=4a5947e2-7838-4f59-a08a-c7a1458a9c59",
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/memo1.jpg?alt=media&token=4a5947e2-7838-4f59-a08a-c7a1458a9c59',
    },
    {
      original: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/memo2.jpg?alt=media&token=c01a16fa-1c97-4395-a4ba-2bf6c2fdbca6",
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/memo2.jpg?alt=media&token=c01a16fa-1c97-4395-a4ba-2bf6c2fdbca6',
    },
    {
      original: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/memo3.jpg?alt=media&token=7ab14543-e130-4b84-a868-91dea9c05902",
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/memo3.jpg?alt=media&token=7ab14543-e130-4b84-a868-91dea9c05902',
    },
    {
      original: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/memo4.jpg?alt=media&token=60c4da05-a3f3-41a7-82ab-ff6b18c0c2ed",
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/memo4.jpg?alt=media&token=60c4da05-a3f3-41a7-82ab-ff6b18c0c2ed',
    },

   

  ];
  return (

    
    <div>
      <div className="pt-[100px] lg:px-28 px-10 pb-10 border-b">
        <Fade bottom cascade>
        <h1 className="text-black text-2xl md:text-4xl pb-2 font-bold uppercase text-left font-Lora tracking-wide">
			    Announcements/Memos
		    </h1>
        <div className='h-[5px] bg-black mb-14'></div>

          {/* <p className="text-[#696984] pt-4 pb-5 text-center">
            Trusted by 5000+ companies worldwide.
          </p> */}
        <ImageGallery items={images} />

          {/* <CarouselMemos /> */}
        </Fade>
      </div>
    </div>
  );
}

export default Memos;
