"use client";

import Breaker from "@/components/breaker";
import Button from "@/components/buttons";
import Input from "@/components/input";
import { axios } from "@/config/axios";
import { routes } from "@/config/routes";
import { useUser } from "@/context/UserContext";
import { ResponseProps } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiEnvelope } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setUser } = useUser();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const payload = {
      ...data,
      // expiresInMins: '1440'
      expiresInMins: "1",
    };
    const response: ResponseProps = await axios.post("/auth/login", payload);

    if (response.status === 200) {
      setUser(response.data);
      localStorage.setItem("accessToken", response.data.accessToken);
      router.push(routes.home);
    } else {
      toast.error(response.error.message);
    }
  };

  return (
    <div className="mt-8">
      <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("username", {
            required: { value: true, message: "Username is required" },
          })}
          wrapperClassName="mb-4"
          type="text"
          placeholder="Username"
          prefixComponent={
            <BiEnvelope className="w-6 h-6 text-white/70 transition-all" />
          }
          error={errors?.username?.message as string}
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
          Login
        </Button>
      </form>
      <Breaker title="or" />
      <Button className="w-full" variant="outline">
        <FaGoogle className="mr-2 w-4 h-4" />
        Login with Google
      </Button>
      <div className="text-center mt-4">
        <span className="opacity-[0.6]">Don't have an account? </span>
        <Link className="" href={routes.signup}>
          Signup
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
