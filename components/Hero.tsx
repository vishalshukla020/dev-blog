import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="sm:my-[8vh] my-[5vh] flex flex-col justify-center">
      <div className="group">
        <p className="h1 mb-3 sm:mt-3">
          <span className="opacity-90">def </span>
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-accent_secondary relative inline-block">
            <span className="relative text-white">about():</span>
          </span>
        </p>
        <div className="pl-10 md:pl-12 font-thin text-base sm:text-xl sm:mt-2 sm:leading-relaxed opacity-75 lg:w-[80%]">
          <span className="text-accent_primary">return</span>{" "}
          &apos;&apos;&apos;Hi! my name is{" "}
          <span className="text-accent_secondary font-bold cursor-pointer h2 md:h1">
            {" "}
            Vishal Shukla
          </span>
          . I&apos;m a self taught full-stack web developer specializing in
          building (and occasionally designing) awesome web-apps and native
          mobile applications.
          <span className="text-accent font-bold cursor-pointer">
            {" "}
            Read more
          </span>
          &apos;&apos;&apos;
        </div>
      </div>
      <div className="sm:my-10 my-5 cursor-pointer">
        <span className="primary-button">- I wanna be awesome too</span>
      </div>
    </div>
  );
};

export default Hero;
