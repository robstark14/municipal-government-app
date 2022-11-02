import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks';
import SimpleNavLinks from './SimpleNavLinks';


function SimpleNavBar() {
    const [open, setOpen] = useState(false);
  return (
    <nav className="font-Lora w-full">

      <div className="flex items-center font-medium justify-around fixed z-[9999] w-full bg-transparent bg-white drop-shadow-lg">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          {/* <img src={Logo} alt="logo" className="md:cursor-pointer h-9" /> */}
     {/* <img src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/sample_logo.png?alt=media&token=1fb0ba99-6d3b-4a9c-8446-1a9900426701" alt="gov" className='mr-[1rem] md:mr-[4rem] w-[100px] absolute bottom-[-38px] left-4'/> */}

     <img 
     src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/sample_logo.png?alt=media&token=1fb0ba99-6d3b-4a9c-8446-1a9900426701" alt="gov" 
     className='w-[50px]'/>
          
          <div className="text-2xl md:hidden bg-transparent" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-Lora text-white font-bold">
          <li className="hover:text-stone-700 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-stone-700 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
            <Link to="/" className="py-2 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/tourism" className="py-7 px-3 inline-block">
              Tourism
            </Link>
          </li>
          <li className="hover:text-stone-700 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-stone-700 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
            <Link to="#news" className="py-2 inline-block">
             News
            </Link>
          </li>
          <li className="hover:text-stone-700 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-stone-700 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
            <Link to="/" className="py-2 inline-block">
              Transparency
            </Link>
          </li>
          <SimpleNavLinks  />
        </ul>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 contact-btn">
                <button className="text-gray-500 border rounded px-7 py-2 md:px-5 hover:text-white c-btn relative tracking-wider overflow-hidden">
                  <span className="absolute inset-0 bg-stone-800"></span>
                  <span className="absolute inset-0 flex justify-center items-center">
                    Contact Us
                  </span>
                  Contact Us
                </button>
              </div>
        {/* <div className="md:block hidden"> */}
          {/* <Button /> */}
        {/* </div> */}
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-gray-100 h-screen fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/tourism" className="py-7 px-3 inline-block">
              Tourism
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              News
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Transparency
            </Link>
          </li>
          
          <SimpleNavLinks />
          
          {/* <div className="py-5">
            <Button />
          </div> */}
        </ul>
      </div>
    </nav>
  )
}

export default SimpleNavBar