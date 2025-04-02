import { AnimatedButtonProps } from "@/types";
import styles from "./index.module.css";

const AnimatedButton = ({ className = "", children }: AnimatedButtonProps) => {
  return (
    <button
      className={`border-2 border-white/80 text-center px-4 py-2 rounded-full text-sm min-w-[9rem] min-h-[3rem] ${styles.animatedButton} ${className}`}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;
