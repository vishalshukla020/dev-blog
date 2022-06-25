/* eslint-disable @next/next/no-img-element */

import React from "react";

interface Props {
  readingTime?: {
    text: string;
  };
  title: string;
  description: string;
  date: string;
  ogImage?: {
    url: string;
  };
}

const Header = ({ title, description, date, ogImage }: Props) => (
  <div className="flex justify-center flex-col items-center">
    <p className="text-[#6F6F6F] font-light text-center">Published on {date}</p>

    <h1 className="text-[#101010] font-semibold text-center text-[2rem]">
      {title}
    </h1>

    <p className="text-[#6F6F6F] font-light text-center">{description}</p>

    {ogImage && (
      <img
        src={ogImage.url}
        alt="Post image"
        className="w-full h-[400px] object-cover rounded"
        loading="lazy"
      />
    )}
  </div>
);

export default Header;
