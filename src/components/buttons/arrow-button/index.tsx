import { ArrowButtonProps } from "@/types";
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";

const ArrowButton = ({
  className,
  iconClassName = "text-white/80 w-6 h-6",
  direction,
}: ArrowButtonProps) => {
  return (
    <button
      className={`rounded-full bg-transparent border-2 border-white/80 p-3 flex items-center justify-center h-16 w-16 group ${className}`}
    >
      {direction === "up" && (
        <GoArrowUpRight
          className={`group-hover:translate-y-[-0.25rem] transition-all ease-in-out ${iconClassName}`}
        />
      )}
      {direction === "down" && (
        <GoArrowDownLeft
          className={`group-hover:translate-y-[-0.25rem] transition-all ease-in-out ${iconClassName}`}
        />
      )}
    </button>
  );
};

export default ArrowButton;
