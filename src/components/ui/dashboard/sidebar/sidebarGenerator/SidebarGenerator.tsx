import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TSidebarItems = {
  name: string;
  icon?: React.ReactNode;
  path: string;
};

const SidebarGenerator = ({ name, icon, path }: TSidebarItems) => {
  const currentPath = usePathname();

  return (
    <Link href={path}>
      <ListItem
        key={name}
        disablePadding
        sx={{
          ...(currentPath === path
            ? {
              backgroundColor: "rgba(0,115,225,0.1)",
              " & svg": {
                color: "#1586FD",
              },
            }
            : {}),
        }}
      >
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={name} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarGenerator;
