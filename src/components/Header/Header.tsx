import { Avatar, useMediaQuery } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { Context, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ThemeToggleButton from "../ThemeToggleButton";
import { useTheme } from "@mui/material/styles";
import NextLink from "next/link";
import BarChartIcon from "@mui/icons-material/BarChart";

export type HeaderProps = {
  ColorModeContext: Context<{ toggleColorMode: () => void }>;
};

const Header = (props: HeaderProps) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const { ColorModeContext } = props;
  const { data: session } = useSession();
  const theme = useTheme();
  const userProfileImage = session?.user?.image!;

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const iPadCheck = useMediaQuery("(min-width: 768px)");

  return (
    <AppBar
      position="fixed"
      style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.10)" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BarChartIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: "1px",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DataSoft
          </Typography>

          <BarChartIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: "1px",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DataSoft
          </Typography>

          {iPadCheck && (
            <Box sx={{ paddingRight: 5, marginLeft: "auto" }}>
              <Typography>Signed in as {session?.user?.name}</Typography>
            </Box>
          )}

          <ThemeToggleButton ColorModeContext={ColorModeContext} />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open profile settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={`${session?.user?.name}`} src={userProfileImage} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <NextLink
                  href={"/dashboard/profile"}
                  style={{
                    color: theme.palette.text.primary,
                    textDecoration: "none",
                  }}
                >
                  <Typography textAlign={"center"}>Profile</Typography>
                </NextLink>
              </MenuItem>
              <MenuItem onClick={() => (session ? signOut() : signIn())}>
                <Typography textAlign="center">
                  {session ? "Logout" : "Login"}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
