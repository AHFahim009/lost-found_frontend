"use client";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Skeleton,
} from "@mui/material";
import Image from "next/image";
import noImage from "../../../../assests/No_Image_Available.jpg";
import { useGetSingleLostItemQuery } from "@/redux/api/endpoints/lostItem.api";

type TProp = {
  params: {
    id: string;
  };
};

const LostReportDetail = ({ params }: TProp) => {
  const lostItemId = params.id;

  const { data: singleLostItem, isLoading } =
    useGetSingleLostItemQuery(lostItemId);

  const {
    lostItemName,
    description,
    lostDate,
    location,
    photo,
    phoneNumber,
    email,
  } = singleLostItem?.data?.data || {};

  return (
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
              {lostItemName}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "#555" }}>
              <strong>Location:</strong> {location}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "#555" }}>
              <strong>Date:</strong> {lostDate}
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
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default LostReportDetail;
