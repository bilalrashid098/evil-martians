"use client";

import Image from "next/image";
import AuthBg from "@/public/assets/auth-bg.jpg";
import ArrowButton from "@/components/buttons/arrow-button";
import AnimatedButton from "@/components/buttons/animation-button";
import { useUser } from "@/context/UserContext";
import Button from "@/components/buttons";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, signOut } = useUser();
  return (
    <div className="px-3 py-4 h-screen flex justify-between gap-4">
      <div className="w-full lg:w-[18rem]">
        <div className="bg-[#2C2C2C] rounded-2xl h-full px-3 flex flex-col">
          <div className="max-w-lg w-full md:py-6 px-3">
            <h1 className="text-2xl font-bold mb-6">EvilMartians</h1>
          </div>
          <div className="grow"></div>
          <div className="pb-3">
            <Button className="w-full" onClick={signOut}>
              Signout
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-[calc(100%-18rem)] ">
        <div className="rounded-2xl relative overflow-hidden">
          <Image src={AuthBg} alt="auth-bg" className="z-1" fill />
          <div className="z-2 relative flex flex-col justify-between h-full">
            <h2 className="text-4xl p-10 pb-3">
              Welcome, {user?.firstName + " " + user?.lastName}
            </h2>
            <p className="px-10 mb-6 font-semibold">{user?.email}</p>
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
        <div className="py-5">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
