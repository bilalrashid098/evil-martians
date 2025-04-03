"use client";

import Breaker from "@/components/breaker";
import Button from "@/components/buttons";
import Input from "@/components/input";
import { routes } from "@/config/routes";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { BiEnvelope } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="mt-8">
      <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email", {
            required: { value: true, message: "Email is required" },
          })}
          wrapperClassName="mb-4"
          type="email"
          placeholder="Email"
          prefixComponent={
            <BiEnvelope className="w-6 h-6 text-white/70 transition-all" />
          }
          error={errors?.email?.message as string}
        />
        <Input
          {...register("password", {
            required: { value: true, message: "Password is required" },
          })}
          wrapperClassName="mb-4"
          type="password"
          placeholder="Password"
          prefixComponent={
            <IoMdLock className="w-6 h-6 text-white/70 transition-all" />
          }
          error={errors?.password?.message as string}
        />
        <Button type="submit" className="w-full">
          Sign up
        </Button>
      </form>
      <Breaker title="or" />
      <Button className="w-full" variant="outline">
        <FaGoogle className="mr-2 w-4 h-4" />
        Sign up with Google
      </Button>
      <div className="text-center mt-4">
        <span className="opacity-[0.6]">Already have an account? </span>
        <Link className="" href={routes.login}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
