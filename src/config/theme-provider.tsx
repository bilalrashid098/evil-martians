"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { useUser } from "@/context/UserContext";
import { routes } from "./routes";
import MainLayout from "@/components/layouts/main-layout";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const pathname = usePathname();
  const accessToken = Cookies.get("accessToken");

  if (
    accessToken &&
    user &&
    pathname !== routes.login &&
    pathname !== routes.signup
  ) {
    return <MainLayout>{children}</MainLayout>;
  }

  return children;
};

export default ThemeProvider;
