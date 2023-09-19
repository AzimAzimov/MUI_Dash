import React, { FC } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@mui/material";

const Login: FC = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Button
          style={{ width: "200px" }}
          variant="contained"
          color="error"
          onClick={() => signOut()}
        >
          Sign out
        </Button>
      </>
    );
  }

  return (
    <>
      <Button
        variant="contained"
        color="success"
        style={{ background: "#84D445", width: "200px" }}
        onClick={() => signIn()}
      >
        Sign in
      </Button>
    </>
  );
};

export default Login;
