"use client";
import { profileDemoDate } from "@/profileDemoData";
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Skeleton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Grid2 from "@mui/material/Unstable_Grid2";

import Image from "next/image";
import defaultProfile from "../../../../assests/defaultProfile.jpg";
import { userActivity } from "@/staticData";
import SkeletonGrid from "@/components/skeleton/SkeletonGrid";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import EditProfile from "../../profilePage/editProfile/EditProfile";
import { useMyStatsQuery } from "@/redux/api/endpoints/myServices.api";
import { log } from "console";
import { useGetProfileQuery } from "@/redux/api/endpoints/proilfe.api";

const scrollbarStyle = {
  padding: "0 2rem",
  height: {
    lg: "500px",
  },
  overflowY: "auto",

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
};

const ProfileInfo = () => {
  const [userId, setUserId] = useState("");
  const [open, setOpen] = useState(false);
  const { data: myServices, isLoading: servicesLoading } = useMyStatsQuery("");
  const { data: profileData, isLoading: infoLoading } = useGetProfileQuery("");

  const handleEditProfile = (id: string) => {
    setOpen((pre) => !pre);
    setUserId(id);
  };
  return (
    <>

      <Grid item xs={12} md={4}>
        <Box sx={{ ...scrollbarStyle }}>


          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {/* profile basic information */}
            {
              infoLoading ? <SkeletonGrid xs={12} md={12} lg={12} /> :
                <Box>
                  <Avatar sx={{ width: "120px", height: "120px" }}>
                    <Image
                      width={120}
                      height={120}
                      src={
                        profileData?.data?.data.profilePhoto
                          ? profileData?.data?.data.profilePhoto
                          : defaultProfile
                      }
                      alt="default image"
                    />
                  </Avatar>
                  <Stack direction="row" gap={2} alignItems="center">
                    <Typography variant="h6">
                      {profileData?.data?.data.user.name}
                    </Typography>
                    <IconButton
                      onClick={() =>
                        handleEditProfile(profileData?.data?.data.userId!)
                      }
                    >

                      <EditIcon />
                    </IconButton>
                  </Stack>
                  <Typography component="p">
                    {profileData?.data?.data.user.email}
                  </Typography>
                  <Typography component="p">
                    {profileData?.data?.data.bio}
                  </Typography>
                  {open && (
                    <EditProfile
                      setOpen={setOpen}
                      open={open}
                      userId={userId}
                      title="Profile Edit"
                    />
                  )}
                </Box>
            }
            {/* user activities records */}
            <Grid2 container spacing={2}>
              {
                servicesLoading ? <SkeletonGrid xs={12} md={12} lg={12} /> :
                  <>
                    <WidgetBox
                      sm={6}
                      lg={6}
                      name="Lost Report"
                      statistic={myServices?.data?.data.totalLostReport}
                    />
                    <WidgetBox
                      sm={6}
                      lg={6}
                      name="Found Report"
                      statistic={myServices?.data?.data.totalFoundReport}
                    />
                    <WidgetBox
                      sm={12}
                      lg={12}
                      name="Claim Report"
                      claim={myServices?.data?.data?.totalClaimReport}
                    />
                  </>
              }
            </Grid2>
          </Box>
        </Box>
      </Grid>

    </>
  );
};
export default ProfileInfo;

const StyledPaper = styled(Paper)`
  padding: 5px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const StyledTypographyTitle = styled(Typography)`
  font-size: 1rem;
  font-weight: bold;
`;

const StyledTypographyContent = styled(Typography)`
  font-size: 1.5rem;
  color: #3f51b5;
`;

const ClaimTypography = styled(Typography)`
  font-size: 1rem;
  color: #3f51b5;
`;

type TWidgetProp = {
  lg?: number;
  sm?: number;
  name: string;
  statistic?: number;
  claim?: {
    total: number;
    pending: number;
    approved: number;
  };
};

const WidgetBox = ({ sm, lg, name, statistic, claim }: TWidgetProp) => {
  return (
    <Grid2 sm={sm} lg={lg}>
      <StyledPaper>
        <StyledTypographyTitle>{name}</StyledTypographyTitle>
        {statistic && (
          <StyledTypographyContent>{statistic}</StyledTypographyContent>
        )}
        {claim && (
          <>
            <StyledTypographyContent>{claim.total}</StyledTypographyContent>
            <Stack direction="row" gap="3rem" justifyContent="center">
              <ClaimTypography>Pending: {claim.pending}</ClaimTypography>
              <ClaimTypography>Approved: {claim.approved}</ClaimTypography>
            </Stack>
          </>
        )}
      </StyledPaper>
    </Grid2>
  );
};
