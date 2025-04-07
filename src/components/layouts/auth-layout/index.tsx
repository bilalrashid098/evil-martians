"use client";

import Image from "next/image";
import AuthBg from "@/public/assets/auth-bg.jpg";
import UserOne from "@/public/assets/user.avif";
import UserTwo from "@/public/assets/user2.avif";
import UserThree from "@/public/assets/user3.jpg";
import Avatar from "@/components/avatar";
import ArrowButton from "@/components/buttons/arrow-button";
import AnimatedButton from "@/components/buttons/animation-button";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const Users = [UserOne, UserTwo, UserThree];

  return (
    <div className="px-3 py-4 h-screen flex justify-between gap-4">
      <div className="w-full lg:w-[calc(50%-0.5rem)]">
        <div className="bg-[#2C2C2C] p-5 rounded-2xl h-full lg:h-[calc(100%-9rem)] flex justify-center items-center">
          <div className="max-w-lg w-full md:p-6">
            <h1 className="text-2xl font-bold mb-6">EvilMartians</h1>
            <h3 className="text-4xl mb-6">
              Welcome to <span className="font-semibold">EvilMartians</span>
            </h3>
            <p className="opacity-[0.6]">
              Gaze and attention modeling powered by AI is optimizing virtual
              reality experiences
            </p>
            {children}
          </div>
        </div>
        <div className="hidden lg:flex bg-[#2C2C2C] p-5 rounded-2xl h-[8rem] mt-4 justify-between items-center">
          <div className="flex items-center">
            {Users.map((user, index) => {
              return (
                <Avatar
                  key={index}
                  img={user?.src}
                  size={"lg"}
                  className={`border-2 border-white/50 ${
                    index !== 0 && "ml-[-1rem]"
                  }`}
                />
              );
            })}
            <div className="ml-4">
              <p className="text-lg font-medium">Join with 20k+ Users!</p>
              <p className="text-sm opacity-[0.6]">
                Let's see our happy customer
              </p>
            </div>
          </div>
          <ArrowButton direction="up" />
        </div>
      </div>
      <div className="hidden lg:block w-[calc(50%-0.5rem)] ">
        <div className="rounded-2xl h-full relative overflow-hidden">
          <Image src={AuthBg} alt="auth-bg" className="z-1" fill />
          <div className="z-2 relative flex flex-col justify-between h-full">
            <h2 className="text-4xl p-10">
              AI Revolutionizing the way we create, render and experience
              content.
            </h2>
            <div className="p-4">
              <div className="p-5 rounded-xl backdrop-blur-2xl bg-white/10">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <AnimatedButton>Creating</AnimatedButton>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowButton className="opacity-50" direction="down" />
                    <ArrowButton direction="up" />
                  </div>
                </div>
                <p className="">
                  Create design brief with AI voice command to make awesome 3d
                  images that suits your need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
