import React from "react";
import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";

const Signin = () => {
  const { data: session } = useSession();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>{session ? "Thank you for logging in" : "Please log in"}</h2>
      <Login />
    </Box>
  );
};

export default Signin;
