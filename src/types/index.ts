export interface AvatarProps {
  img: string;
  size?: "sm" | "lg" | "md";
  className?: string;
}

export interface ArrowButtonProps {
  className?: string;
  iconClassName?: string;
  direction: "up" | "down";
}

export interface AnimatedButtonProps {
  className?: string;
  children: React.ReactNode;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
  inputClassName?: string;
  prefixClassName?: string;
  prefixComponent?: React.ReactNode;
  label?: string;
  labelClassName?: string;
  errorClassName?: string;
  error?: string | undefined;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "solid" | "outline";
  children: React.ReactNode;
}

export interface BreakerProps {
  title: string;
  className?: string;
}
