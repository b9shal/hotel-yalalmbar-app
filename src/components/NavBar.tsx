import React, { useState } from "react";
import Link from 'next/link';
import DropDown from "./DropDown";
import { useClickAwayListener } from "../hooks/useClickAwayListner"


const NavBar: React.FC = () => {

  const { hideVisibleNode, setHideVisibleNode, nodeRef } = useClickAwayListener();
  return(
    <div className="w-full">
      <nav className="fixed flex justify-around bg-white w-full shadow-sm z-50 pt-2 pb-1">
        <Link href="/">
          <div className="flex space-x-3">
            <img src="myHotel.svg" alt="" className="bg-blue-200 w-[100px] h-[100px] rounded-full lg:w-[110px] lg:h-[100px] cursor-pointer" />
              <p className="text-xl text-orange-400 py-8 cursor-pointer font-logo">
                <span className="text-3xl md:text-5xl lg:text-5xl">H</span>OTEL<span className="text-3xl md:text-5xl lg:text-5xl">य</span>लम्बर
              </p>
          </div>
        </Link>
        <div className="flex space-x-5 py-6 text-sm">
          <div ref={nodeRef} className="relative flex px-8 md:px-6 lg:px-6 flex-col">
            <span  onClick = { () => setHideVisibleNode((prevState: boolean) => !prevState) } className="font-bold px-4 py-2 border-2 border-orange-400 hover:border-white hover:bg-orange-400 hover:text-white rounded-full text-gray cursor-pointer">
              Menu
            </span>
            <div className="absolute w-56 top-14 right-0 md:top-14 md:-left-10 lg:top-14 lg:-left-10">
              {
                hideVisibleNode ? <DropDown /> : null
              }
            </div>
          </div>
          <div className="hidden md:flex pt-2 lg:flex space-x-5">           
            <span><a href="/" className="hover:border-b-4 hover:border-orange-400 transition-all delay-100 cursor-pointer">Services</a></span>
            <span><a href="/" className="hover:border-b-4 hover:border-orange-400 transition-all delay-100 cursor-pointer">Contacts</a></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;