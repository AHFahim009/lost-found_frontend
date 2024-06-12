"use client"
import { Box, Button, Paper, Typography } from "@mui/material"
import Image from "next/image"
import laptop from "../../../assests/laptop.jpg"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { ClaimStatusUpdate } from "./ClaimStatus"
import { useState } from "react"

const Checked = () => {
  const [selectorOpen, setSelectorOpen] = useState(false)
  const [claimId, setClaimId] = useState("234")

  const handleSeletor = () => {
    console.log("clicked");

    setSelectorOpen(true)

  }
  const handleClose = () => {
    setSelectorOpen(false)
  }
  return (
    <Box className="layout-center"
      sx={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src={laptop} width={350} height={350} alt="image" />
        </Box>

        <Grid2
          container
          alignItems="center"
          spacing={3}
        >
          <Grid2 lg={6}>
            <Paper sx={{
              padding: "1rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}>
              {/* found product */}

              <Typography>
                id: c845b41c-b315-48da-bc6b-666346a67780
              </Typography>
              <Typography>
                name: Laptop
              </Typography>
              <Typography>
                Found Date: 24/08/2024
              </Typography>
              <Typography>
                Description: i lost my smart watch which is very joss. please allah
              </Typography>

            </Paper>
          </Grid2>
          <Grid2 lg={6}>
            <Paper
              sx={{
                padding: "1rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
              }}
            >

              {/* claim information */}
              <Typography>
                product id: c845b41c-b315-48da-bc6b-666346a67780
              </Typography>
              <Typography>
                lostDate:  24/08/2024
              </Typography>
              <Typography>
                distinguishingFeatures:  black and white mixing
              </Typography>
              <Typography>
                status:  pending
              </Typography>
              <Button onClick={() => handleSeletor()}>Change Status</Button>
            </Paper>
            <ClaimStatusUpdate selectorOpen={selectorOpen} setSelectorOpen={setSelectorOpen} userId={claimId} onClose={handleClose} />
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  )
}
export default Checked