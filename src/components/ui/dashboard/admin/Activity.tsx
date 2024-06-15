"use client";
import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import { useGetDashboardStatsQuery } from "@/redux/api/endpoints/dashboardStats.api";
import { AxiosResponseType } from "@/types/globalType/global.type";
import SkeletonGrid from "@/components/skeleton/SkeletonGrid";

const WidgetCard = styled(Card)({
  display: "flex",
  alignItems: "center",
  padding: "16px",
  backgroundColor: "#ffffff",
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
});

const StatBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
  marginLeft: "16px",
});

const StatNumber = styled(Typography)({
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#3f51b5", // Primary color
});

const StatLabel = styled(Typography)({
  fontSize: "1rem",
  color: "#757575", // Text secondary color
});

const Dashboard = () => {
  const { data, isLoading } = useGetDashboardStatsQuery({});
  console.log(isLoading);

  return (
    <Grid container spacing={3}>
      {isLoading ? (
        Array.from(new Array(3)).map((_, i) => (
          <SkeletonGrid xs={12} sm={4} key={i} height={70} />
        ))
      ) : (
        <>
          <Grid item xs={12} sm={4}>
            <WidgetCard>
              <Box></Box>
              <StatBox>
                <StatNumber>{data.data.data.totalLostReports}</StatNumber>
                <StatLabel>Lost Items</StatLabel>
              </StatBox>
            </WidgetCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <WidgetCard>
              <Box></Box>
              <StatBox>
                <StatNumber>{data.data.data.totalFoundReports}</StatNumber>
                <StatLabel>Found Items</StatLabel>
              </StatBox>
            </WidgetCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <WidgetCard>
              <Box></Box>
              <StatBox>
                <StatNumber>{data.data.data.totalUsers}</StatNumber>
                <StatLabel>Total Users</StatLabel>
              </StatBox>
            </WidgetCard>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Dashboard;
