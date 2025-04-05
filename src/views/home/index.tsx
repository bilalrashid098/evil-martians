"use client";
import Button from "@/components/buttons";
import { routes } from "@/config/routes";
import { useUser } from "@/context/UserContext";
import Link from "next/link";

const HomeView = () => {
  const { user, signOut } = useUser();
  return (
    <div>
      <h1>Hello, {user?.email}</h1>
      <Button onClick={signOut}>Signout</Button>
    </div>
  );
};

export default HomeView;
