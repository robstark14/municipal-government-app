import React from "react";
import CarouselMemos from "./CarouselMemos";
import Fade from "react-reveal/Fade";

function Memos() {
  return (
    <div>
      <div className="bg-white pt-14 lg:px-28 px-10 pb-10">
        <Fade bottom cascade>
          <h1 className="md:text-3xl text-black drop-shadow-lg text-center text-xl font-semibold whitespace-nowrap font-serif tracking-wider mb-8">
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
