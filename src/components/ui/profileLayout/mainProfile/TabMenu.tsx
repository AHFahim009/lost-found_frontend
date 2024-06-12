"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabPaths = [
  {
    label: "Lost Report",
    url: "/profile2",
  },
  {
    label: "Found Report",
    url: "/profile2/foundReport",
  },
  {
    label: "Claim",
    url: "/profile2/claimReport",
  },
];

export default function TabMenu() {
  return (
    <Box sx={{ width: "100%", padding: "0px 2rem" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs>
          {tabPaths.map((tab) => (
            <TabItems label={tab.label} url={tab.url} key={tab.label} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}

interface TabItemsProps {
  url: string;
  label: string;
}

const TabItems = ({ url, label }: TabItemsProps) => {
  const path = usePathname();

  return (
    <Box sx={{ borderBottom: path === url ? "2px solid blue" : "none" }}>
      <Link href={url}>
        <Tab label={label} />
      </Link>
    </Box>
  );
};
