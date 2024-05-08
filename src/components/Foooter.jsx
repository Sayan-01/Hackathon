import React from "react";

const Foooter = () => {
  
  return (
    <div className={" min-h-[10vh] flex items-center justify-center h-full bg-[#141414] border-t border-zinc-800"}>
      <div className=" ">
        <p className=" caption text-white/50 text-center ">© {new Date().getFullYear()}. All rights</p>
      </div>
    </div>
  );
};

export default Foooter;
