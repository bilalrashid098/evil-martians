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

export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  [key: string]: any;
}

export interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  signOut: () => void;
}

export interface ResponseProps {
  status: number;
  data?: any;
  error?: any;
}

export interface DecodedToken {
  exp: number; // expiry in seconds
  iat: number;
  [key: string]: any;
}
