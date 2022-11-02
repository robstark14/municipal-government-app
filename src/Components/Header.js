import React from "react";

import Fade from "react-reveal/Fade";
import AboutCounter from "./AboutCounter";


function Header() {
  return (
    <div className="bg-white w-full lg:px-28 lg:h-screen overflow-hidden md:bg-[url('https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/thrill.jpg?alt=media&token=ffb8fa27-cf37-41d4-a47c-cf20920010a0')] bg-no-repeat bg-[length:400px_300px] md:bg-[length:600px_500px] bg-bottom md:bg-right z-10">
     {/* <Navbar className="z-999" /> */}
      <div className="lg:flex lg:pt-10">
        <Fade left cascade>
          <div className="lg:w-[800px] container pt-[500px] pt-20 xl:pt-24 lg:pt-10 md:pt-80 font-Lora">
            <img src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/thrill.jpg?alt=media&token=ffb8fa27-cf37-41d4-a47c-cf20920010a0" alt="" className="block md:hidden"/>
            <h1 className="px-2 font-[1000] xl:text-[4.2rem] lg:text-[3rem] md:text-[3.2rem] text-3xl lg:w-[79%] text-stone-300 xl:leading-[5rem] md:leading-[4rem]">
              Welcome to{" "} <br/>
              <span className="text-transparent bg-clip-text bg-black drop-shadow-2xl ">
                {" "}
               San Lorenzo Ruiz{" "} 
              </span>
             
            </h1>
            {/* <div className="xl:flex justify-start mt-7">
        
              <p className="xl:w-[50%] lg:w-[70%] md:w-[80%] text-[14px] text-black px-2 lg:leading-6 xl:pl-5 xl:pt-0 pt-4 pb-4 bg-white">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, animi voluptatem minima architecto quae numquam magni dolorum dolor, excepturi quia quos sed laudantium distinctio explicabo doloribus molestiae ab eaque ratione!
              </p>
            </div> */}
          </div>
        </Fade>
        
      </div>
    </div>
  );
}

export default Header;
