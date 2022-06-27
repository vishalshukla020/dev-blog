import React from "react";

import { Meta } from "interfaces";

interface Props {
  meta: Meta;
}

const Header: React.FC<Props> = ({ meta }) => {
  return (
    <div className="">
      <h1 className="font-black text-5xl md:text-7xl mb-2 underline">
        {meta.title}
      </h1>
      <p className="text-[#6F6F6F] md:text-xl text-md">
        {meta.timeReading?.text} • {meta.date}
      </p>
      <div className="pt-4 md:pb-2">
        {meta.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-[transparent] rounded-full pl-2 pr-3 py-2 md:text-md text-sm font-semibold text-accent_secondary mr-2 mb-2 border-2 border-accent_secondary"
          >
            - {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Header;
