"use client";
import {
  Card,
  CardContent,

  IconButton,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid"
import { memo, useEffect, useRef, useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/DeleteForeverOutlined";
import noImage from "../../../../assests/No_Image_Available.jpg";
import Image from "next/image";
import EditLostReport from "./EditLostReport";
import DeleteLostReport from "./DeleteLostReport";
import { TLostItemRes } from "@/types/responseType/response.type";


// card info done;
// edit info








const UserLostItemCard = ({
  id,
  photo,
  lostItemName,
  description,
  location,
  lostDate,
}: TLostItemRes) => {
  const [isExpand, setIsExpand] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [lostItemId, setLostItemId] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (contentRef.current) {
      if (isExpand) {
        const scrollHeight = contentRef.current.scrollHeight;
        contentRef.current.style.height = `${scrollHeight}px`;

        setTimeout(() => {
          if (cardRef.current) {
            cardRef.current.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            });
          }
        }, 200);
      } else {
        contentRef.current.style.height = "0px";
      }
    }
  }, [isExpand]);

  const handleClickOpen = (id: string) => {
    setLostItemId(id);
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
          {/* Image => overlay */}
          <Box
            className="image-relative"
            sx={{
              position: "relative",
              width: "100%",
              padding: "1rem",
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
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
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
                Product Name: {lostItemName}
              </Typography>

              <IconButton
                onClick={() => setIsExpand((pre) => !pre)}
                sx={{ cursor: "pointer" }}
              >
                {isExpand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Stack>
            <Typography component="p"> Lost Date: {lostDate}</Typography>
            <Typography variant="body2" color="text.secondary"></Typography>

            <Box
              ref={contentRef}
              sx={{
                height: "0px",
                overflow: "hidden",
                transition: "height 0.3s ease",
              }}
            >
              <Typography component="p">Location: {location}</Typography>
              <Typography component="p">{description}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      {open && (
        <EditLostReport open={open} setOpen={setOpen} lostItemId={lostItemId} />
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
// const MemoizedEditLostReport = memo(EditLostReport);
// const MemoizedDeleteLostReport = memo(DeleteLostReport);
export default UserLostItemCard;
