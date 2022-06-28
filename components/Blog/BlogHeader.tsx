import React from "react";

import { Meta } from "interfaces";

interface Props {
  meta: Meta;
}

const Header: React.FC<Props> = ({ meta }) => {
  return (
    <div className="">
      <h1 className="title mb-2 underline">{meta.title}</h1>
      <p className="text-slate md:text-xl text-md">
        {meta.timeReading?.text} | {meta.date}
      </p>
      <div className="pt-4 md:pb-2">
        {meta.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block border-2 border-green text-green rounded-lg px-3 py-1 text-lg mr-2 mb-2"
          >
            - {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Header;
