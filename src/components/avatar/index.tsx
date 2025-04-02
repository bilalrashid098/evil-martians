import { AvatarProps } from "@/types";
import Image from "next/image";

const Avatar = ({ img, size = "sm", className = "" }: AvatarProps) => {
  const sizes = {
    sm: "w-8 h-8",
    lg: "w-12 h-12",
    md: "w-10 h-10",
  };

  return (
    <div
      className={`relative ${sizes[size]} ${className} rounded-full overflow-hidden`}
    >
      <Image className="object-cover" src={img} alt="avatar" fill />
    </div>
  );
};

export default Avatar;
