import React from "react";

const SmallCard = ({name, des}) => {
  return (
    <div className="z-10 md:w-[20%] w-full mx-5 mb-20 h-[200px]" >
      <div className="h-full z-1 p-[2px] pr-[2.6px] pl-[2.3px] rounded-2xl bg-conic-gradient ">
        <div className=" h-full p-5 rounded-[14px] bg-zinc-900 overflow-hidden">
          <h1 className=" mb-2 text-white/80 font-semibold text-xl">{name}</h1>
          <p className="  text-white/50">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
