"use client"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Grid, Skeleton, Stack } from "@mui/material";
import LostItemCard from "./LostItemCard";
import { myLostReport } from "@/staticData";
import SkeletonGrid from "@/components/skeleton/SkeletonGrid";
import { useGetAllLostItemQuery } from "@/redux/api/endpoints/lostItem.api";




const LostItemSection = () => {
  const { data: getLostItem, isLoading } = useGetAllLostItemQuery({
    take: 4
  })


  const buffer = false;
  return (
    <Box className="lost-item-section">
      <Container>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" marginBottom="2rem">Recent Lost Report</Typography>
          <Typography component="p" sx={{ cursor: "pointer" }}>More</Typography>
        </Stack>
        <Grid container alignItems="center" spacing={2}>
          {isLoading ? Array.from(new Array(4)).map((_, index) => (
            <SkeletonGrid lg={3} key={index} />
          )) : getLostItem && getLostItem.data?.data.map((data) => (
            data ? <LostItemCard key={data.id} {...data} /> : null
          ))}
        </Grid>
      </Container>
    </Box >

  );
};
export default LostItemSection;
