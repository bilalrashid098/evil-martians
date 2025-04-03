import { BreakerProps } from "@/types";

const Breaker = ({ title, className }: BreakerProps) => {
  return (
    <div className={`my-4 relative ${className}`}>
      <span className="relative text-center flex items-center justify-center bg-[#2C2C2C] px-4 z-10 w-fit mx-auto">
        {title}
      </span>
      <div className="h-[2px] bg-white/50 w-full absolute left-0 top-[50%] translate-y-[50%]"></div>
    </div>
  );
};

export default Breaker;
