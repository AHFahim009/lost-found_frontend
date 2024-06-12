import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import DeviceNavbar from "./DeviceNavbar";
import Link from "next/link";
import { navItems } from "@/staticData";
import dynamic from "next/dynamic";

const UserSetting = dynamic(() => import("./UserSetting"), { ssr: false });
const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#ffffff",
        borderBottom: "border-bottom: 1px solid #dad9dc",
        color: "black",
        padding: {
          xs: "0px 10px 0px 0px",
          md: "0px 20px",
        },
      }}
    >
      <Toolbar disableGutters>
        {/* logo */}
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        {/* title */}
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            flex: 1,
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Lost&Found
        </Typography>
        <DeviceNavbar />
        <Box
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: "1rem" }}
        >
          {navItems.map((item) => (
            <Link key={item.name} href={item.link}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  cursor: "pointer",
                }}
              >
                {item.name}
              </Typography>
            </Link>
          ))}
        </Box>

        <UserSetting />
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
