import React, { useRef, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Iitem } from "../../interfaces/itemInterface";


const Card: React.FC<Iitem> = (item): JSX.Element => {

  const tags = item.tags.map((tag) => (
    <span key={tag.id} className="inline-block p-1 shadow-lg bg-gray-200 text-sm font-semibold text-orange-400 rounded-full tracking-wide">{tag.tag}</span>
    ))

  return(

    <div className="relative flex flex-col gap-4 max-w-sm bg-blue-200 h-48 rounded-lg cursor-pointer transition ease-in-out delay-75 hover:-translate-z-1 hover:-translate-y-1 hover:scale-105 duration-75">
      <div>
        <img src={item.photo} className="absolute -top-8 -left-8 w-32 h-32 md:w-40 md:h-40 lg:w-40 lg:h-40 rounded-full" alt="" />
      </div>
      <p className="pl-28 md:pl-36 lg:pl-36 text-3xl ">{item.itemName}</p>
      <p className="flex-col md:flex-row lg:flex-row pl-24 md:pl-32 lg:pl-32 text-sm">Starting From <span className="bg-orange-400 px-2 text-2xl rounded-full text-white">रु</span><span className="text-lg"> {item.price}</span></p>
      <div className="flex mt-3 md:mt-6 lg:mt-6 justify-center lg:justify-left space-x-2 ">
        { tags }
      </div>
    </div>
  );
};

export default Card;