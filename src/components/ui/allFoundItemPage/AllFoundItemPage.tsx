"use client"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Grid, Skeleton, Stack } from "@mui/material";

import { myLostReport } from "@/staticData";
import SkeletonGrid from "@/components/skeleton/SkeletonGrid";
import { useGetAllLostItemQuery } from "@/redux/api/endpoints/lostItem.api";
import { useGetAllFoundItemQuery } from "@/redux/api/endpoints/foundItem.api";
import AllFoundItemCard from "./AllFoundItemCard";




const AllFoundItemPage = () => {
  const { data: getFoundItem, isLoading } = useGetAllFoundItemQuery({})

  return (
    <Box className="all-found-item-page">
      <Container sx={{ marginTop: "5rem" }}>
        <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
          {isLoading ? Array.from(new Array(4)).map((_, index) => (
            <SkeletonGrid lg={3} key={index} />
          )) : getFoundItem && getFoundItem.data?.data.map((data) => (
            data ? <AllFoundItemCard key={data.id} {...data} /> : null
          ))}
        </Grid>
      </Container>
    </Box >

  );
};
export default AllFoundItemPage;
