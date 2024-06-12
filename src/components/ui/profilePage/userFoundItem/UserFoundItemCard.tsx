"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { memo, useEffect, useRef, useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditNoteIcon from "@mui/icons-material/EditNote";
import noImage from "../../../../assests/No_Image_Available.jpg";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditFoundReport from "./EditFoundReport";
import DeleteLostReport from "../userLostItem/DeleteLostReport";
import { TFoundItemRes } from "@/types/responseType/response.type";

const UserFoundItemCard = ({
  id,
  foundItemName,
  location,
  foundDate,
  description,
  photo,
}: TFoundItemRes) => {
  const [isExpand, setIsExpand] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [foundItemId, setFoundItemId] = useState("");
  const [deleteId, setDeleteId] = useState("");

  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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

  const handleClickOpen = (id: string) => {
    setFoundItemId(id);
    setOpen(true);
  };

  const handleOpenAlert = (id: string) => {
    setOpenAlert((pre) => !pre);
    setDeleteId(id);
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        {/* main content */}
        <Card ref={cardRef}>
          {/* image => overlay div */}
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
              src={photo ? photo : noImage}
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
              <IconButton onClick={() => handleClickOpen(id)}>
                <EditNoteIcon
                  sx={{ width: "40px", height: "40px", color: "white" }}
                />
              </IconButton>
              <IconButton onClick={() => handleOpenAlert(id)}>
                <DeleteIcon
                  sx={{ width: "40px", height: "40px", color: "white" }}
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
                Product Name: {foundItemName}
              </Typography>

              <IconButton
                onClick={() => setIsExpand((pre) => !pre)}
                sx={{ cursor: "pointer" }}
              >
                {isExpand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Stack>
            <Typography component="p"> Found Date: 20-12-2024</Typography>

            {/* expandable div */}
            <Box
              ref={contentRef}
              sx={{
                height: "0px",
                overflow: "hidden",
                transition: "height 0.3s ease",
              }}
            >
              <Typography component="p">Location: {location}</Typography>
              <Typography component="p">Found Date: {foundDate}</Typography>
              <Typography component="p">{description}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {open && (
        <EditFoundReport
          open={open}
          setOpen={setOpen}
          foundItemId={foundItemId}
        />
      )}

      {openAlert && (
        <DeleteLostReport
          openAlert={openAlert}
          setOpenAlert={setOpenAlert}
          deleteId={deleteId}
        />
      )}
    </>
  );
};

export default UserFoundItemCard;
