import React from "react";
import Image from "next/image";

const Socials: React.FC = () => {
  return (
    <div className="fixed right-4 lg:right-20 bottom-0 my-10 flex flex-col justify-end child:ml-2 sm:max-w-fit">
      <div className="relative cursor-pointer">
        <Image
          alt="github-icon"
          src="/images/icons8-github.svg"
          height="40"
          width="40"
        />
      </div>
      <div className="relative cursor-pointer">
        <Image
          alt="twitter-icon"
          src="/images/icons8-twitter.svg"
          height="40"
          width="40"
        />
      </div>
      <div className="relative cursor-pointer">
        <Image
          alt="linkedin-icon"
          src="/images/icons8-linkedin.svg"
          height="40"
          width="40"
        />
      </div>
    </div>
  );
};

export default Socials;
