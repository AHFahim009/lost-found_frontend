import AdminSidebar from "./userRoleSidebar/AdminSidebar";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { userRole } from "@/constantType/constant.type";

const Sidebar = () => {
  // todo: user role set dynamically
  const [role, setRole] = useState("admin");
  //user role will come form server. note: so, for prevent side effect useEffect will be best🥰

  // const user = loggedUserInfo()
  // useEffect(() => {
  //   if (user) {
  //     setRole(user.role)
  //   }
  // }, [])

  let sidebar;
  switch (role) {
    case userRole.ADMIN:
      sidebar = <AdminSidebar loggedUser={role} />;
      break;
    default:
      break;
  }
  return (
    <Box className="sidebar-content" sx={{}}>
      <Stack direction="row" justifyContent="center" alignItems="center" p={2}>
        <Typography variant="h6" component="h1">
          Lost&Found
        </Typography>
      </Stack>
      {sidebar}
    </Box>
  );
};
export default Sidebar;
