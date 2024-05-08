import { gradient, grid } from "../../assets";


export const Gradient = ({ className }) => {
  return (
    <div className={`${className} absolute w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none`}>
      <img
        className="absolute  w-[82.5625rem] max-w-[82.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={gradient}
        width={1417}
        height={1417}
        alt="Gradient"
      />
      
    </div>
  );
};
