import { myClaimReport, myFoundData } from "@/staticData";
import { Box, Button, Grid, Typography } from "@mui/material";
import SkeletonGrid from "@/components/skeleton/SkeletonGrid";
import UserClaimItemCard from "./UserClaimItemCard";
import { useMyClaimReportsQuery } from "@/redux/api/endpoints/myServices.api";
import { toast } from "sonner";

const UserClaimItem = () => {

  const { data: claimItem, isLoading, error } = useMyClaimReportsQuery("")


  if (claimItem?.err) {
    toast.warning("fetch error")
  }
  return (
    <Box className="lost-report-section" >
      <Grid container spacing={2}>
        {
          isLoading ? Array.from(new Array(4)).map((_, i) => (
            <SkeletonGrid key={i} xs={12} md={6} lg={6} />
          )) :
            claimItem?.data?.data.map((item) => (
              <UserClaimItemCard key={item.id} {...item} />
            ))}
      </Grid>
    </Box>
  );
};
export default UserClaimItem;