"use client";
import React, { FC } from "react";
import { CSSObject, Theme, useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Drawer, useMediaQuery } from "@mui/material";
import scss from "./SideMenu.module.scss";
import Person2Icon from "@mui/icons-material/Person2";
import Settings from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import NextLink from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";

const drawerWidth = 240;
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const menuRouteList = ["", "data", "profile", "settings", ""];
const menuListTranslations = [
  "Home",
  "Data",
  "Profile",
  "Settings",
  "Sign Out",
];
const menuListIcons = [
  <HomeIcon key={0} />,
  <EqualizerIcon key={1} />,
  <Person2Icon key={2} />,
  <Settings key={3} />,
  <ExitToAppIcon key={4} />,
];

const SideMenu: FC = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const mobileCheck = useMediaQuery("(min-width: 600px)");
  const router = useRouter();
  const pathName = usePathname();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleListItemButtonClick = (text: string) => {
    text === "Sign Out" ? signOut() : setOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      anchor={"left"}
      open={open}
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          top: mobileCheck ? 64 : 57,
          left: 0,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          ...(open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
          }),
          ...(!open && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
          }),
        },
      }}
    >
      <div className={scss.drawerHeader}>
        <IconButton onClick={handleDrawerToggle}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {menuListTranslations.map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{ display: "block" }}
            className={router.pathname === text ? scss.activeLink : ""}
          >
            <NextLink
              className={scss.link}
              href={`/dashboard/${menuRouteList[index]}`}
            >
              <ListItemButton
                onClick={() => handleListItemButtonClick(text)}
                title={text}
                aria-label={text}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {menuListIcons[index]}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: theme.palette.text.primary,
                  }}
                />
              </ListItemButton>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideMenu;
