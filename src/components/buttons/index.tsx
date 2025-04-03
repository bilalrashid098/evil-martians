import { ButtonProps } from "@/types";

const styling = {
  solid:
    "bg-white border-2 border-white hover:bg-transparent text-[#2c2c2c] hover:text-[#FFFFFF]",
  outline:
    "bg-transparent border-2 border-white hover:bg-white hover:text-[#2c2c2c]",
};

const Button = ({
  className = "",
  variant = "solid",
  children,
  ...props
}: ButtonProps) => {
  const variantClasses = styling[variant];

  return (
    <button
      {...props}
      className={`min-h-[50px] rounded-full px-5 py-2 flex items-center justify-center transition-all cursor-pointer ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
