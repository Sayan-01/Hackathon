import React from "react";

const LeargeCard = ({heading, image, className}) => {
  return (
    <div className={`w-[80%] ${className}`}>
      <div className="relative z-1 p-[2px] pr-[2.6px] pl-[2.3px] rounded-2xl bg-conic-gradient ">
        <div className="rounded-[14px] mb-[2px] w-full bg-black">
          <h1 className=" text-center py-8 leading-tight font-bold text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#f349c0] via-[#565dde] to-[#15a39c]">
            {heading}
          </h1>
        </div>
        <div className=" rounded-[14px] overflow-hidden">
          <img
            src={image}
            alt="code"
          />
        </div>
      </div>
    </div>
  );
};

export default LeargeCard;
