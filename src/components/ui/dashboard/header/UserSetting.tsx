

import { removeUser } from "@/services/auth.services";
import { MenuItem, Typography } from "@mui/material"
import Link from "next/link";
import { useRouter } from "next/navigation";





const UserSetting = ({ setAnchorElUser }: any) => {
  const router = useRouter()
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    console.log("clicked");

    removeUser();
    setAnchorElUser(null);
    router.push("/");

  };

  return (
    <>
      <MenuItem onClick={handleLogout}>
        Logout
      </MenuItem>
      <MenuItem onClick={handleCloseUserMenu}>
        <Link href="/"><Typography textAlign="center">Home</Typography></Link>
      </MenuItem>
    </>
  )
}
export default UserSetting