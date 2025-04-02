import Image from "next/image";
import AuthBg from "@/public/assets/auth-bg.jpg";

const SignUpView = () => {
  return (
    <div className="px-3 py-4 h-screen flex justify-between gap-4">
      <div className="w-[calc(50%-0.5rem)]">
        <div className="bg-[#2C2C2C] p-5 rounded-2xl h-full md:h-[calc(100%-9rem)]">
          <h1>Sign Up</h1>
        </div>
        <div className="bg-[#2C2C2C] p-5 rounded-2xl h-[8rem] mt-4">
          <h1>Sign Up</h1>
        </div>
      </div>
      <div className="w-[calc(50%-0.5rem)] ">
        <div className="rounded-2xl h-full relative overflow-hidden">
          <Image src={AuthBg} alt="auth-bg" className="z-1" fill />
          <div className="z-2 relative flex flex-col justify-between h-full">
            <h2 className="text-4xl p-10">
              AI Revolutionizing the way we create, render and experience
              content.
            </h2>
            <div className="p-4">
              <div className="p-5 rounded-xl backdrop-blur-2xl bg-white/10">
                <div></div>
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

export default SignUpView;
