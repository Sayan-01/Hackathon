import React from "react";
import Button from "./Button";
import { CgOptions } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { Gradient } from "./design/Gradeant";
import { grid } from "../assets";
const HeroSection = () => {
  return (
    <div className=" h-screen  bg-gradient-to-b from-[#221e37] to-[#141416] md:px-40 px-10 flex flex-col items-center ">
      <div className="flex flex-col items-center mt-6">
        <h1 className=" leading-tight inline-block font-bold text-[58px] text-transparent bg-clip-text bg-gradient-to-r from-[#f349c0] via-[#565dde] to-[#15a39c]">Python Project Hand Gesture</h1>
        <br />
        <h1 className="-mt-6 leading-tight inline-block font-bold text-[58px] text-white"> Detection Module</h1>
        <p className=" text-white/50 mt-4">Advance autometion project for Hack-o-Nit hackathon which is made using Python</p>
      </div>
      <div className="mt-5">
        <button className=" bg-[#9b79f7] text-white px-4 text-sm mt-4 pb-[7px] pt-[8px] rounded-md">{"Start the journey "}</button>
        <div className=" relative mt-20 ">
          <Gradient className={"hidden md:block"} />
          <div className="mix-blend-color-dodge absolute w-[56.625rem] h-[56.625rem]  pointer-events-none">
            <img
              src={grid}
              width={1017}
              height={1017}
              alt="gride"
              className="absolute  w-[50.5625rem] max-w-[82.5625rem] h-[55.5625rem]  md:-translate-x-[50.7%] md:-translate-y-[50%] md:top-0 md:left-0 -translate-x-[50.7%] -translate-y-[90%] "
            />
            <img
              src={grid}
              width={1017}
              height={1017}
              alt="gride"
              className="absolute  w-[50.5625rem] max-w-[82.5625rem] h-[55.5625rem]  md:-translate-x-[30.7%] md:-translate-y-[30%] -translate-x-[45.7%] -translate-y-[95%]"
            />
          </div>
          <Button className={"bg-gradient-to-tl from-[#ba19fa] to-[#c91ff0] absolute right-[230px] -rotate-[10deg]"}>
            <CgOptions
              size={20}
              className="mr-3"
            />
            engineering
          </Button>
          <Button className={"bg-gradient-to-tl from-[#ff37da] to-[#b585e0] absolute left-[230px] rotate-[10deg]"}>
            <CgOptions
              size={20}
              className="mr-3"
            />
            hack_o_nit
          </Button>{" "}
          <Button className={"bg-gradient-to-tl from-[#fe9124] to-[#f9673b] absolute right-[170px] top-[220px] rotate-[10deg]"}>
            <CgOptions
              size={20}
              className="mr-3"
            />
            python
          </Button>{" "}
          <Button className={"bg-gradient-to-tl from-[#01cee5] to-[#02bdba] absolute left-[170px] top-[220px] -rotate-[10deg]"}>
            <CgOptions
              size={20}
              className="mr-3"
            />
            mediapipe
          </Button>
          <div className=" w-20 h-20 rounded-xl absolute top-20 -translate-x-[50%] left-1/2 flex items-center justify-center bg-[#19b5ad]">
            <FaCheck
              size={30}
              className="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
