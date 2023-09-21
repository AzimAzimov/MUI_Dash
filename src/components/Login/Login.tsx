"use client";
import React, { FC } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@mui/material";
import { useSearchParams } from "next/navigation";

const Login: FC = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  return (
    <>
      <Button
        variant="contained"
        color="success"
        style={{ background: "#84D445", width: "200px" }}
        onClick={() => signIn("google", { callbackUrl })}
      >
        Sign in with Google
      </Button>
    </>
  );
};

export default Login;
