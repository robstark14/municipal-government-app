import React from "react";
import CarouselMemos from "./CarouselMemos";
import Fade from "react-reveal/Fade";

function Memos() {
  return (
    <div>
      <div className="bg-gray-600 pt-14 lg:px-28 px-10 pb-10">
        <Fade bottom cascade>
          <h1 className="md:text-3xl text-white drop-shadow-lg text-center text-xl font-semibold whitespace-nowrap font-serif tracking-wider">
            Announcements/Memos
          </h1>
          {/* <p className="text-[#696984] pt-4 pb-5 text-center">
            Trusted by 5000+ companies worldwide.
          </p> */}

          <CarouselMemos />
        </Fade>
      </div>
    </div>
  );
}

export default Memos;
