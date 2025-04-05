"use client";

import { useUser } from "@/context/UserContext";
import { ResponseProps } from "@/types";
import { useEffect } from "react";
import { axios } from "./axios";
import { usePathname } from "next/navigation";
import { routes } from "./routes";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { setUser } = useUser();
  const pathname = usePathname();

  async function authenticateUser() {
    const response: ResponseProps = await axios.get("/auth/me");
    if (response.status === 200) {
      setUser(response.data);
    }
  }

  useEffect(() => {
    if (pathname !== routes.login && pathname !== routes.signup) {
      authenticateUser();
    }
  }, []);

  return children;
};

export default AuthProvider;
