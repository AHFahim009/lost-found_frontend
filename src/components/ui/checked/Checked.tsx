"use client"
import { Box, Button, Paper, Typography } from "@mui/material"
import Image from "next/image"
import noImage from "../../../assests/No_Image_Available.jpg"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { ClaimStatusUpdate } from "./ClaimStatus"
import { useState } from "react"
import FullScreenDialog from "@/components/Dialog/useFullScreenDialog/UseFullDialog"
import { useAdminAllFoundItemQuery, useSingleFoundItemQuery } from "@/redux/api/endpoints/foundItem.api"

type TProp = {
  fullDialogOpen: boolean;
  setFullDialogOpen: any;
  foundItemId: string
}

const CheckedDialog = ({ fullDialogOpen, setFullDialogOpen, foundItemId }: TProp) => {
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [claimId, setClaimId] = useState("");

  const { data, isLoading } = useSingleFoundItemQuery(foundItemId)

  const handleSelector = (id: string) => {
    setSelectorOpen(true);
    setClaimId(id)
  };

  const handleClose = () => {
    setSelectorOpen(false);
  };

  const allData = data?.data?.data ?? null
  console.log(allData);




  return (
    <FullScreenDialog fullDialogOpen={fullDialogOpen} setFullDialogOpen={setFullDialogOpen}>
      {
        isLoading ? "loading" :
          <Box
            className="layout-center"
            sx={{
              width: "100%",
              padding: "0px 1rem",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Box sx={{ width: "100%", maxWidth: "800px" }}>
              <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                <Image src={allData?.photo || noImage} width={350} height={350} alt="image" />
              </Box>

              <Grid2 container spacing={3}>
                <Grid2 lg={12} xs={12}>
                  <Paper sx={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Found Product</Typography>
                    <Typography><strong>ID:</strong> {allData?.id}</Typography>
                    <Typography><strong>Name:</strong> {allData?.foundItemName}</Typography>
                    <Typography><strong>Found Date:</strong> {allData?.foundDate}</Typography>
                    <Typography><strong>Description:</strong> {allData?.description}</Typography>
                  </Paper>
                </Grid2>

                <Grid2 lg={12} xs={12}>
                  <Paper sx={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Claim Information</Typography>
                    <Typography><strong>Product ID:</strong>{allData?.Claim?.foundItemId}</Typography>
                    <Typography><strong>Lost Date:</strong> {allData?.Claim?.lostDate}</Typography>
                    <Typography><strong>Distinguishing Features:</strong>{allData?.Claim?.distinguishingFeatures}</Typography>
                    <Typography><strong>Status:</strong> {allData?.Claim?.status}</Typography>
                    <Button variant="contained" color="primary" onClick={() => handleSelector(allData?.id!)}>Change Status</Button>
                  </Paper>
                  <ClaimStatusUpdate
                    setFullDialogOpen={setFullDialogOpen}
                    selectorOpen={selectorOpen}
                    setSelectorOpen={setSelectorOpen}
                    userId={claimId}
                    onClose={handleClose}
                  />
                </Grid2>
              </Grid2>
            </Box>
          </Box>
      }
    </FullScreenDialog>
  );
};

export default CheckedDialog