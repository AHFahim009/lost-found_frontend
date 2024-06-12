import {
  Avatar,
  Box,
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import defaultProfile from "../../../assests/defaultProfile.jpg";
import EditIcon from "@mui/icons-material/Edit";
import Image from "next/image";
import UseLostItem from "@/components/ui/profilePage/userLostItem/UseLostItem";
import UserFoundItem from "@/components/ui/profilePage/userFoundItem/UserFoundItem";
import { userProfile } from "@/staticData";

const Profile = () => {
  return (
    <Container sx={{ paddingTop: "6rem" }}>
      <Typography padding="1rem 0" variant="h6">
        {userProfile.sectionHeading}
      </Typography>
      <Box
        className="profile-section"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Paper
          sx={{
            height: "250px",
            maxWidth: "700px",
            width: "100%",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "3px",
          }}
        >
          <Box>
            <Avatar sx={{ width: "120px", height: "120px" }}>
              <Image
                src={defaultProfile}
                alt="default image"

              />
            </Avatar>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Typography component="p">{userProfile.name}</Typography>
              <IconButton>
                <EditIcon />
              </IconButton>
            </Stack>
            <Typography>email: {userProfile.email}</Typography>
            <Typography>need password change</Typography>
          </Box>
        </Paper>
      </Box>
      <UseLostItem />
      <UserFoundItem />
    </Container>
  );
};
export default Profile;
