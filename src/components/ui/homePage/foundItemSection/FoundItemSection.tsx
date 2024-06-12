"use client"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Grid, Skeleton, Stack } from "@mui/material";
import FoundItemCard from "./FoundItemCard";
import { myLostReport } from "@/staticData";
import SkeletonGrid from "@/components/skeleton/SkeletonGrid";
import { useGetAllLostItemQuery } from "@/redux/api/endpoints/lostItem.api";
import { useGetAllFoundItemQuery } from "@/redux/api/endpoints/foundItem.api";
import Link from "next/link";




const FoundItemSection = () => {
  const { data: getFoundItem, isLoading } = useGetAllFoundItemQuery({
    take: 4
  })

  return (
    <Box className="lost-item-section">
      <Container>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" marginBottom="2rem">Recent Found Report</Typography>
          <Link href="/allFoundItem">
            <Typography component="p" sx={{ cursor: "pointer" }}>More</Typography>
          </Link>
        </Stack>
        <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
          {isLoading ? Array.from(new Array(4)).map((_, index) => (
            <SkeletonGrid lg={3} key={index} />
          )) : getFoundItem && getFoundItem.data?.data.map((data) => (
            data ? <FoundItemCard key={data.id} {...data} /> : null
          ))}
        </Grid>
      </Container>
    </Box >

  );
};
export default FoundItemSection;
