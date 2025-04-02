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
