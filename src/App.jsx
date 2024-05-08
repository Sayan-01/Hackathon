import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Foooter from "./components/Foooter";

const App = () => {
  return (
    <div className=" overflow-hidden min-h-screen  bg-gradient-to-t  from-[#141416] to-[#221e37]">
      <Header />
      <HeroSection />
      <About />
      <Foooter/>
    </div>
  );
};

export default App;
