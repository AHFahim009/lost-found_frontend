"use client";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Skeleton,
  Button,
} from "@mui/material";
import Image from "next/image";
import noImage from "../../../../assests/No_Image_Available.jpg";
import { useGetSingleLostItemQuery } from "@/redux/api/endpoints/lostItem.api";
import { useSingleFoundItemQuery } from "@/redux/api/endpoints/foundItem.api";
import ClaimPage from "@/components/ui/claimPage/ClaimPage";
import { useState } from "react";

type TProp = {
  params: {
    id: string;
  };
};

const ClaimFoundItemPage = ({ params }: TProp) => {
  const [open, setOpen] = useState(false);
  const [foundItemId, setFoundItemId] = useState("");
  const foundId = params.id;

  const { data: singleFoundItem, isLoading } = useSingleFoundItemQuery(foundId);

  const {
    id,
    foundItemName,
    description,
    foundDate,
    location,
    photo,
    phoneNumber,
    email,
  } = singleFoundItem?.data?.data || {};

  const handleOpenClaim = (id: string) => {
    setOpen(true);
    setFoundItemId(id);
  };

  return (
    <>
      <Container
        sx={{
          paddingTop: "6rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isLoading ? (
          "loading"
        ) : (
          <Card
            sx={{
              width: "100%",
              padding: "2rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              boxShadow: 1,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            {/* Image part start */}

            <CardMedia
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxHeight: "400px",
                width: "100%",
                maxWidth: "500px",
                overflow: "hidden", // add this to remove the overflow of the image
              }}
            >
              <Image
                src={photo ? photo : noImage}
                alt="lost item name"
                style={{
                  borderRadius: "8px",
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                }}
              />
            </CardMedia>

            {/* Detail part start */}

            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                padding: "0 2rem",
                maxWidth: "450px",
                width: "100%",
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#333" }}
              >
                {foundItemName}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#555" }}>
                <strong>Location:</strong> {location}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#555" }}>
                <strong>Date:</strong> {foundDate}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ color: "#666", lineHeight: 1.6 }}
              >
                <strong>Description:</strong> {description}
              </Typography>
              <Divider sx={{ borderTop: "1px solid #1accfd" }} />
              <Typography variant="subtitle1" sx={{ color: "#555" }}>
                <strong>Contact:</strong>{" "}
                {phoneNumber ? phoneNumber : "not provided "}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#555" }}>
                <strong>Email:</strong> {email ? email : "not provided "}
              </Typography>
              <Button onClick={() => handleOpenClaim(id!)}>Claim Report</Button>
            </CardContent>
          </Card>
        )}
      </Container>
      {open && (
        <ClaimPage open={open} setOpen={setOpen} foundItemId={foundItemId} />
      )}
    </>
  );
};

export default ClaimFoundItemPage;
