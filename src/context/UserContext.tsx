"use client";

import { routes } from "@/config/routes";
import { User, UserContextType } from "@/types";
import { createContext, useContext, useState, ReactNode } from "react";
import Cookies from "js-cookie";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  function signOut() {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    window.location.href = routes.login;
    setTimeout(() => {
      setUser(null);
    }, 100);
  }

  return (
    <UserContext.Provider value={{ user, setUser, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
