"use client";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { removeUser, userInformation } from "@/services/auth.services";
import { useRouter } from "next/navigation";

const UserSetting = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const router = useRouter();
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    removeUser();
    setAnchorElUser(null);
    router.push("/");
    router.refresh();
  };

  const user = userInformation();

  return (
    <Box sx={{ flexGrow: 0 }}>
      {user ? (
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
      ) : (
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      )}

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
        <MenuItem onClick={handleCloseUserMenu}>
          <Link href="/profile2">
            <Typography textAlign="center">Profile</Typography>
          </Link>
        </MenuItem>
        {user?.role === "ADMIN" && (
          <MenuItem onClick={handleCloseUserMenu}>
            <Link href="/dashboard/admin">
              <Typography textAlign="center">Dashboard</Typography>
            </Link>
          </MenuItem>
        )}
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};
export default UserSetting;
