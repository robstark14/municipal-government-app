import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

import { Disclosure } from "@headlessui/react";
import { HashLink } from "react-router-hash-link";
import Heading from './Heading';
import {
  HideBetween,
  HideDuring,
  HideOn,
  HideScroll,
} from "react-hide-on-scroll"

import { GrFacebookOption } from "react-icons/gr";
import { FiYoutube } from "react-icons/fi";
import { GrTwitter } from "react-icons/gr";


const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "#projects", current: false },
  { name: "Announcements", href: "#projects", current: false },
  { name: "Services", href: "#services", current: false },
  { name: "Programs", href: "#about", current: false },
  { name: "Tourism", href: "#about", current: false },

];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ className }) {
  const [navs, setNavs] = useState(navigation);

  const handleActive = (nav) => {
    navs.forEach((e) => (e.current = e.name === nav.name));
    setNavs([...navs]);
  };
  return (
    <Disclosure as="nav" className={`${className} bg-transparent z-50`}>
      {({ open }) => (
        <>
          <div className="w-full fixed bg-gray-100 z-[9999]">
          <HideOn atHeight height={128}>
            <Heading id="hide"/>
          </HideOn>
            <div className="flex flex-row-reverse lg:flex-row items-center justify-between h-16 z-50 bg-gray-100 border shadow-md">
              <div className="inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                </Disclosure.Button>
              </div>
              <div className="mx-auto ml-0 flex flex-start w-[80%] sm:items-stretch sm:justify-start ">
                {/* <div className="flex-shrink-0 flex items-center pl-0"> */}
                      {/* <img src={Logo} alt="" className="w-[60px] ml-[20px]" /> */}
                  {/* <h1 className="font-bold text-white">BR33D</h1>
                </div> */}
                <div className="hidden sm:block sm:ml-6 z-[9999]">
                  <div className="ml-80 md:ml-[8rem] xl:ml-80 flex space-x-4">
                    {navs.map((item) => (
                      <HashLink
                        onClick={() => handleActive(item)}
                        smooth
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "text-transparent bg-clip-text bg-gradient-to-br from-[#056a11] to-[#2c7912] md:text-xs lg:text-base"
                            : "text-gray-500",
                          "px-3 py-2 rounded-md text-sm font-medium md:text-xs lg:text-base hover:text-green-300 hover:scale-110 ease-in duration-200"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </HashLink>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div className='flex md:hidden items-center w-[150px] justify-around p-2'>
                <button className="bg-blue-500 p-1 font-semibold text-white inline-flex items-center space-x-2 rounded">
                    <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </button>

                <button className="bg-blue-400 p-1 font-semibold text-white inline-flex items-center space-x-2 rounded">
                    <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                </button>
                <button class="bg-red-600 p-1 font-semibold text-white inline-flex items-center space-x-2 rounded">
                    <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" /></svg>
                </button>
            </div> */}
              <div className="flex md:hidden justify-end pt-5 gap-4 socials">
              <div className="relative overflow-hidden block footer-div cursor-pointer">
                <span className="block">
                  <GrFacebookOption className="text-white bg-[#7A7893] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
                <span>
                  <GrFacebookOption className="text-white bg-[#6366F1] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
              </div>
              <div className="relative overflow-hidden block footer-div cursor-pointer">
                <span className="block">
                  <FiYoutube className="text-white bg-[#7A7893] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
                <span>
                  <FiYoutube className="text-white bg-[#c63232] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
              </div>
              <div className="relative overflow-hidden block footer-div cursor-pointer">
                <span className="block">
                  <GrTwitter className="text-white bg-[#7A7893] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
                <span>
                  <GrTwitter className="text-white bg-[#329ac6] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
              </div>
            
            </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 contact-btn">
                <button className="text-gray-500 border rounded px-7 py-2 md:px-5 hover:text-white c-btn relative tracking-wider overflow-hidden">
                  <span className="absolute inset-0 bg-black"></span>
                  <span className="absolute inset-0 flex justify-center items-center">
                    Contact Us
                  </span>
                  Contact Us
                </button>
              </div>
              
            </div>
           
          </div>

          <Disclosure.Panel className="sm:hidden relative">
            <div className="px-2 pt-[200px] pb-3 space-y-1 bg-gray-100 ">
              {navs.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={() => handleActive(item)}
                  className={classNames(
                    item.current
                      ? "bg-transparent text-black"
                      : "text-gray-400 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
