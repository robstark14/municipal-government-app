import React from 'react'
import Fade from "react-reveal/Fade";

function News() {
  return (
    <div className="pt-14 bg-white lg:px-28 px-10 pb-10 ">
      <Fade bottom cascade>
      <h1 className="text-black text-4xl pb-2 font-bold uppercase text-left">
          Latest News
        </h1>
        <div className='h-[5px] bg-black mb-14'></div>
        {/* <p className="text-[#696984] pt-3 text-center pb-14">
          Trusted by 5000+ companies worldwide.
        </p> */}
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4">
          <div className="lg:pt-0 xl:pt-0">
            <div className='overflow-hidden w-4/5 rounded-2xl'>
              <img
                src={"/images/careers.jpg"}
                className="duration-500 hover:scale-125"
              />
            </div>
            <p className="text-white pt-4 pb-7">
              <span className="px-6 py-2 bg-[#342F49] rounded-full font-thin">
                Careers
              </span>
            </p>
            <h3 className="text-black font-semibold">
              Apply now!
            </h3>
            <p className="pt-4 text-[#696984]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, reprehenderit delectus reiciendis at facere perferendis nihil beatae sed ipsam earum aperiam eos dolore corporis, eaque pariatur! Omnis quidem sint itaque!
            </p>
            <p className="pt-4 text-[#ccc] text-semibold md:pb-4 pb-4">
              Read more
            </p>
          </div>

          <div className='grid gap-1'>
            <div className="lg:flex md:flex-col md:items-center xl:flex-row">
            <div className='overflow-hidden w-4/5 rounded-lg'>
              <img src={"./images/assembly1.jpg"} className='duration-500 hover:scale-125' />
            </div>

              <div className="lg:pl-5 pt-4">
                <h4 className="text-black font-semibold">
                  Municipal Admin held an assembly to discuss something..
                </h4>
                <p className="text-[#696984] pt-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum nihil labore veritatis corrupti itaque....
                </p>
              </div>
            </div>

            <div className="lg:flex md:flex-col md:items-center xl:flex-row">
            <div className='overflow-hidden w-4/5 rounded-lg'>
              <img src={"./images/assembly1.jpg"} className='duration-500 hover:scale-125' />
            </div>

              <div className="lg:pl-5 pt-4">
                <h4 className="text-black font-semibold">
                  Municipal Admin held an assembly to discuss something..
                </h4>
                <p className="text-[#696984] pt-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum nihil labore veritatis corrupti itaque....
                </p>
              </div>
            </div>

            <div className="lg:flex md:flex-col md:items-center xl:flex-row">
            <div className='overflow-hidden w-4/5 rounded-lg'>
              <img src={"./images/assembly1.jpg"} className='duration-500 hover:scale-125' />
            </div>

              <div className="lg:pl-5 pt-4">
                <h4 className="text-black font-semibold">
                  Municipal Admin held an assembly to discuss something..
                </h4>
                <p className="text-[#696984] pt-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum nihil labore veritatis corrupti itaque....
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default News