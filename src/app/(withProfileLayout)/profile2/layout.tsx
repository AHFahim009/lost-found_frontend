import Navbar from "@/components/shared/navbar/Navbar";
import MainProfile from "@/components/ui/profileLayout/mainProfile/MainProfile";
import { Box } from "@mui/material";
import { ReactNode } from "react";

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {/* <CoverPhoto /> */}
      <MainProfile >
        {children}
      </MainProfile>

    </>
  );
};
export default ProfileLayout;
