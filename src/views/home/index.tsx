"use client";
import { useUser } from "@/context/UserContext";

const HomeView = () => {
  const { user } = useUser();
  return <div></div>;
};

export default HomeView;
