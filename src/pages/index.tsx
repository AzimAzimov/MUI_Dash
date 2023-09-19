import React, { FC } from "react";
import Dashboard from "./dashboard";
import Login from "@/components/Login";
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import scss from "./Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

const Home: FC = () => {
  const { data: session } = useSession();

  return (
    <main className={scss.main}>
      {session && <Dashboard />}
      {!session && <Login />}
    </main>
  );
};

export default Home;
