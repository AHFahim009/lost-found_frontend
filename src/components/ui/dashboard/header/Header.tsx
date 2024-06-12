import { Typography, Box, Stack, Tooltip, IconButton, Menu, Avatar, MenuItem } from "@mui/material"
import React from "react";
import userAvatar from "../../../../assests/defaultProfile.jpg"
import Image from "next/image";
import UserSetting from "./UserSetting";


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Stack className="header-content" direction="row" justifyContent="space-between" alignItems="center" flexGrow={1} >
      <Typography variant="h6" noWrap component="div">
        Hi user, Welcome!
      </Typography>

      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
            <Image alt="Remy Sharp" src={userAvatar} width={40} style={{ borderRadius: "20px" }} objectFit="cover" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px', }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <UserSetting setAnchorElUser={setAnchorElUser} />
        </Menu>
      </Box>
    </Stack>
  )
}
export default Header