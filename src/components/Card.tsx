import React, { useRef, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Iitem } from "../../interfaces/itemInterface";


const Card: React.FC<Iitem> = (item): JSX.Element => {

  const reff = useRef<HTMLElement | null | undefined>();

  const tagList = (): React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>[] => (
    item.tags.map((tag) => (
      <span key={tag.id} className="shadow-lg bg-gray-200 text-sm font-semibold text-gray-700 rounded-full px-1 tracking-wide">{tag.tag}</span>
    ))
  );
  console.log(tagList);

  return(

    <div className="relative max-w-sm bg-blue-200 h-48 rounded-lg cursor-pointer transition ease-in-out delay-75 hover:-translate-z-1 hover:-translate-y-1 hover:scale-105 duration-75">
      <div>
        <img src={item.photo} className="absolute -top-8 -left-8 w-32 h-32 md:w-40 md:h-40 lg:w-40 lg:h-40 rounded-full" alt="" />
      </div>
      <p className="pl-28 md:pl-36 lg:pl-36 pt-4 text-3xl ">{item.itemName}</p>
      <p className="pl-28 md:pl-36 lg:pl-36 pt-4 text-lg"><span className="bg-orange-400 px-1 text-base rounded-full text-black">रु</span> {item.price}</p>
      <div className="flex ml-1 justify-center lg:justify-left space-x-2 ">
        {
          item.tags.map((tag) => (
            <p key={tag.id} className="inline-block mt-14 p-1 shadow-lg bg-gray-200 text-sm font-semibold text-orange-400 rounded-full tracking-wide">{tag.tag}</p>
          ))
        }
      </div>
    </div>
  );
};

export default Card;