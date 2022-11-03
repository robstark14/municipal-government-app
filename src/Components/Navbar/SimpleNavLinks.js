import React, { useState } from "react";
import { Link } from "react-router-dom";
import links from "./MyLinks";

const SimpleNavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="text-left md:cursor-pointer group bg-transparent text-white">
            <h1
              className="py-4 flex justify-between items-center md:pr-0 pr-5 group "
              // hover:text-stone-700 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-stone-700 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300

              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-12 hidden group-hover:md:block hover:md:block text-black">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-gray-100 rotate-45 shadow-lg z-10 border"
                    ></div>
                  </div>
                  <div className="bg-gray-100 p-5 grid gap-2 shadow-lg border z-[9999] relative">
                    {link.sublinks.map((mysublinks) => (
                      <div className={`${mysublinks.sublinkDrop?"hover:cursor-none":"hover:cursor-pointer hover:bg-gray-300"} rounded p-2 border-b`}>
                       <Link className="lowercase capitalize" to={mysublinks.HeadLink}>
                          {mysublinks.Head}
                        </Link>
                        {mysublinks.sublinkDrop && mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-600 my-2.5 hover:cursor-pointer hover:bg-gray-300 rounded pt-2 px-2 text-right">
                            <Link
                              to={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <Link
                  to={slinks.HeadLink}
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 flex justify-between items-center md:pr-0 pr-5 "
                  >
                    {slinks.Head}

                  { slinks.sublinkDrop && <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>}
                  </Link>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublinkDrop && slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SimpleNavLinks;