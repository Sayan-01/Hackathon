import React from "react";
import LeargeCard from "./LeargeCard";
import { gradient, grid, img1, img2, img3 } from "../assets";
import SmallCard from "./SmallCard";
import Installation from "./Installation";

const About = () => {
  return (
    <>
      <div className=" relative bg-blend-color-dodge min-h-screen md:px-40 px-10 flex flex-col items-center bg-[#141414]">
        <img
          src={grid}
          className="bottom-20 opacity-65  rotate-45 absolute "
          alt=""
        />
        <LeargeCard
          heading={"Discover Our Project For Using our Module"}
          image={img2}
        />
        <LeargeCard className={'mt-10'}
          heading={"Discover Our Project For Using our Module"}
          image={img3}
        />
        <h1 className="mt-20 mb-20 leading-tight inline-block font-bold text-[58px] text-transparent bg-clip-text bg-gradient-to-r from-[#f349c0] via-[#565dde] to-[#15a39c]">About Ourself</h1>
        <div className="md:w-[90%] w-full md:flex-row flex-col flex items-center justify-between">
          <SmallCard
            name={"Souvik Mukhopadhyay"}
            des={"Programer for this Project"}
          />
          <SmallCard
            name={"Sayan Das"}
            des={"Programer for this Project"}
          />
          <SmallCard
            name={"Shouvik Mondal"}
            des={"Programer for this Project"}
          />
          <SmallCard
            name={"Sreejon Mondal"}
            des={"Script Writer"}
          />
          <SmallCard
            name={"Tanushree Brajabasi"}
            des={"Script writer"}
          />
        </div>
        <Installation />
      </div>
    </>
  );
};

export default About;
