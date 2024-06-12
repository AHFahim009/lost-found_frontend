import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { Box } from "@mui/material";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {

  return (
    <>
      <Navbar />
      <Box sx={{ minHeight: "100vh" }}>{children}</Box>
      <Footer />
    </>
  )


}


export default CommonLayout