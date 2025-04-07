"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useUser } from "@/context/UserContext";
import { DecodedToken, ResponseProps } from "@/types";
import { axios } from "./axios";
import { routes } from "./routes";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { setUser } = useUser();
  const pathname = usePathname();
  const accessToken = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");

  function getTokensExpiry(token: string) {
    try {
      const decodedToken: DecodedToken = jwtDecode(token);
      const expiry = decodedToken.exp;
      const currentTime = Math.floor(Date.now() / 1000);
      return expiry - currentTime;
    } catch (err) {
      return 0;
    }
  }

  async function refreshAccessToken() {
    try {
      const response = await axios.post("/auth/refresh", {
        refreshToken,
      });

      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        response.data;
      Cookies.set("accessToken", newAccessToken, { expires: 1 });
      Cookies.set("refreshToken", newRefreshToken, { expires: 7 });
      return { accessToken: newAccessToken, refreshToken: newRefreshToken };
    } catch (err) {
      return null;
    }
  }

  async function authenticateUser() {
    const timeLeft = accessToken ? getTokensExpiry(accessToken) : 0;
    if (accessToken && timeLeft < 30) {
      await refreshAccessToken();
    }
    const response: ResponseProps = await axios.get("/auth/me");
    if (response.status === 200) {
      setUser(response.data);
    }
  }

  useEffect(() => {
    if (
      accessToken &&
      pathname !== routes.login &&
      pathname !== routes.signup
    ) {
      authenticateUser();
    }
  }, []);

  return children;
};

export default AuthProvider;
