

import { MenuItem, Typography } from "@mui/material"
import Link from "next/link";





const UserSetting = ({ setAnchorElUser }: any) => {
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <MenuItem onClick={handleCloseUserMenu}>
        <Typography textAlign="center">Logout</Typography>
      </MenuItem>
      <MenuItem onClick={handleCloseUserMenu}>
        <Link href="/"><Typography textAlign="center">Home</Typography></Link>
      </MenuItem>
    </>
  )
}
export default UserSetting