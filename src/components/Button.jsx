import React from "react";

const Button = ({className, children}) => {
  return <>
    <div className={` text-white text-[22px] flex items-center justify-center px-5 py-2 rounded-[50px] ${className}`}>{children}</div>
    
  </>;
};

export default Button;
