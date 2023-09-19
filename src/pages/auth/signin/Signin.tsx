import React from "react";
import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";
import scss from "../../Home.module.scss";

const Signin = () => {
  const { data: session } = useSession();

  return (
    <div className={scss.blockBlur}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={scss.blockBlurItem}>
          <h2>{session ? "Thank you for logging in" : "Please log in"}</h2>
          <p>
            {session
              ? "Use our application! Thank you"
              : "Login to your account to browse through project and explore our tools"}
          </p>
        </div>
        <Login />
      </Box>
    </div>
  );
};

export default Signin;
