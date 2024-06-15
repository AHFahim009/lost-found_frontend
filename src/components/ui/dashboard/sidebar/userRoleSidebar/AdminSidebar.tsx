
import CameraEnhanceSharpIcon from "@mui/icons-material/CameraEnhanceSharp";
import SidebarGenerator from "../sidebarGenerator/SidebarGenerator";
import Divider from "@mui/material/Divider";
import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarSharpIcon from "@mui/icons-material/StarSharp";

const AdminSidebar = ({ loggedUser }: { loggedUser: string }) => {
  const [open, setOpen] = React.useState(true);

  // drop down
  const handleClick = () => {
    setOpen(!open);
  };

  const rootPath = `/dashboard/${loggedUser}`;
  return (
    <>
      <Divider />
      {/* group 1 */}
      <List>
        {/* title */}
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <StarSharpIcon />
          </ListItemIcon>
          <ListItemText primary="Admin" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 2 }}>
            <SidebarGenerator
              name="Activity"
              icon=<CameraEnhanceSharpIcon />
              path={`${rootPath}`}
            />
            <SidebarGenerator
              name="User Management"
              icon=<CameraEnhanceSharpIcon />
              path={`${rootPath}/userManagement`}
            />

            <SidebarGenerator
              name="Post"
              icon=<CameraEnhanceSharpIcon />
              path={`${rootPath}/foundReport`}
            />
          </List>
        </Collapse>
      </List>
    </>
  );
};
export default AdminSidebar;
