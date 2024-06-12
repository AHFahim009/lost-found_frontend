"use client"
import { myLostReport } from "@/staticData";
import { Box, Grid } from "@mui/material";
import UserLostItemCard from "./UserLostItemCard";
import SkeletonGrid from "@/components/skeleton/SkeletonGrid";
import { useMyLostReportsQuery } from "@/redux/api/endpoints/myServices.api";

const UseLostItem = () => {

  const { data: lostItems, isLoading } = useMyLostReportsQuery("")
  return (
    <Box className="lost-report-section">
      <Grid container spacing={2} sx={{}}>
        {isLoading
          ? Array.from(new Array(4)).map((_, index) => (
            <SkeletonGrid xs={12} md={6} lg={6} key={index} />
          ))
          : lostItems?.data?.data.map((data) => (
            <UserLostItemCard key={data.id} {...data} />
          ))}
      </Grid>
    </Box>
  );
};
export default UseLostItem;
