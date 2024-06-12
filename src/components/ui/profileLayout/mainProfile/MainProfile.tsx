import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ReactNode } from "react";
import ProfileInfo from "./ProfileInfo";
import TabMenu from "./TabMenu";

const MainProfile = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "6rem",
        height: "100vh",
        overflow: {
          lg: "hidden",
        },
      }}
    >
      <Container>
        <Grid rowSpacing={5} container>
          {/* user profile related information */}
          <ProfileInfo />

          <Grid item md={8}>
            <TabMenu />
            <Box
              className="dynamicPage"
              sx={{
                padding: "1rem 2rem",
                height: "70vh",
                overflow: "auto",
                scrollBehavior: "smooth",
                // Custom scrollbar styles
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "#f1f1f1",
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#888",
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#555",
                },
              }}
            >
              {/*  user activities.......... */}
              {children}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default MainProfile;
