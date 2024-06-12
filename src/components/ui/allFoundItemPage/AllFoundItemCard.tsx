"use client";
import { Card, Grid, CardContent, Typography, Box } from "@mui/material";
import Image from "next/image";
import noImage from "../../../assests/No_Image_Available.jpg";
import { TFoundItemRes } from "@/types/responseType/response.type";
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import Link from "next/link";


const AllFoundItemCard = ({
  id,
  foundItemName,
  location,
  foundDate,
  description,
  photo,
}: TFoundItemRes) => {


  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        className="lost-item-card"
        sx={{
          position: "relative",
          cursor: "pointer",
          ":hover": {
            ".overlay": {
              opacity: 1,
            },
          },
        }}
      >
        <Box sx={{
          width: "100%", height: {
            xs: "100%",
            sm: "190px",
            md: "190px"
          }
        }}>
          <Image
            src={photo ? photo : noImage}
            alt="no image"
            style={{ objectFit: "contain", width: "100%", height: "100%" }}

          />
        </Box>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          <Typography component="p">{foundItemName} </Typography>
          <Typography component="p"> Data: {foundDate}</Typography>
          <Typography component="p"> Location: {location}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description.substring(0, 50) + "...."}
          </Typography>
        </CardContent>
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            right: 0,
            opacity: 0,
            transition: "opacity 0.3s ease",
            backgroundColor: "#0000006b",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >

          <Link href={`/claimPage/${id}`}>
            <VisibilitySharpIcon />
          </Link>
        </Box>
      </Card>
    </Grid>
  );
};
export default AllFoundItemCard;
