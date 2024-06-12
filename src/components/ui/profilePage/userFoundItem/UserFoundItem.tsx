import { myFoundData } from "@/staticData";
import { Box, Button, Grid, Typography } from "@mui/material";
import UserFoundItemCard from "./UserFoundItemCard";
import SkeletonGrid from "@/components/skeleton/SkeletonGrid";
import { useMyClaimReportsQuery, useMyFoundReportQuery } from "@/redux/api/endpoints/myServices.api";

const UserFoundItem = () => {
  const { data: foundItems, isLoading } = useMyFoundReportQuery("")

  return (
    <Box className="lost-report-section" >
      <Grid container spacing={2}>
        {isLoading ? (
          Array.from(new Array(4)).map((_, i) => (
            <SkeletonGrid key={i} xs={12} md={6} lg={6} />
          ))
        ) : (
          foundItems?.data?.data && foundItems.data.data.length > 0 ? (
            foundItems.data.data.map((item) => (
              <UserFoundItemCard key={item.id} {...item} />
            ))
          ) : (
            <Typography >No data found</Typography>
          )
        )}
      </Grid>

    </Box>
  );
};
export default UserFoundItem;
