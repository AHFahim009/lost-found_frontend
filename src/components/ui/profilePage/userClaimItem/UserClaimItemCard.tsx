"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect, useRef, useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditNoteIcon from "@mui/icons-material/EditNote";
import noImage from "../../../../assests/No_Image_Available.jpg";
import Image from "next/image";
import { TClaimRes } from "@/types/responseType/response.type";



const UserClaimItemCard = ({
  status,
  lostDate,
  distinguishingFeatures,
  foundItem
}: TClaimRes) => {
  const [isExpand, setIsExpand] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // expandable div smooth animation and always in scroll view
  useEffect(() => {
    if (contentRef.current) {
      if (isExpand) {
        const scrollHeight = contentRef.current.scrollHeight;
        contentRef.current.style.height = `${scrollHeight}px`;

        setTimeout(() => {
          cardRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }, 200);
      } else {
        contentRef.current.style.height = "0px";
      }
    }
  }, [isExpand]);

  const handleEdit = (data: any) => {

  };

  return (
    <Grid item xs={12} sm={6} md={6} lg={6}>
      {/* main content div */}
      <Card ref={cardRef}>
        {/* image and overlay div */}
        <Box
          sx={{
            position: "relative",
            height: "250px",
            cursor: "pointer",
            ":hover": {
              ".overlay": {
                opacity: 1,
              },
            },
          }}
        >
          <Image
            src={foundItem && foundItem?.photo ? foundItem.photo : noImage}
            alt="no image"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />

          <Box
            className="overlay"
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#0000006b",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: 0,
              transition: "opacity 0.3s ease",
            }}
          >
            <IconButton onClick={handleEdit}>
              <EditNoteIcon
                sx={{ width: "50px", height: "50px", color: "white" }}
              />
            </IconButton>
          </Box>
        </Box>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography component="p">
              Status: {status}
            </Typography>

            <IconButton
              onClick={() => setIsExpand((pre) => !pre)}
              sx={{ cursor: "pointer" }}
            >
              {isExpand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Stack>
          <Typography component="p">Lost Date: {lostDate}</Typography>

          {/* expandable div */}
          <Box
            ref={contentRef}
            sx={{
              height: "0px",
              overflow: "hidden",
              transition: "height 0.3s ease",
            }}
          >

            <Typography component="p">{distinguishingFeatures}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default UserClaimItemCard;
