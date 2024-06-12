import { heroData } from "@/staticData";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Box
      sx={{
        alignContent: "center",
        marginBottom: "3rem",
      }}
    >
      <Box
        className="section-one"
        sx={{
          paddingTop: "6rem",
          backgroundColor: "rgb(255, 250, 238)",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "3rem",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <Typography variant="h4" fontWeight={700} marginBottom={2}>
              {heroData.heading}
            </Typography>
            <Typography component="p">{heroData.subHeading}</Typography>
          </Box>
          <Box
            sx={{
              maxWidth: "500px",
              width: "100%",
            }}
          >
            <Image src={heroData.photo} alt="banner" width={450} />
          </Box>
        </Container>
      </Box>

      <Container>
        <Box
          className="section-two"
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              position: "relative",
              border: "1px solid rgb(242, 241, 243)",
              borderRadius: "4px",
              background: "rgb(253, 251, 224)",
              width: "100%",
              maxWidth: "550px",
            }}
          >
            <Box
              sx={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "stretch",
                gap: "5px",
              }}
            >
              <Typography variant="h6">{heroData.title1}</Typography>
              <Typography>{heroData.des1}</Typography>
              <Box>
                <Link href="/lostItemReport">
                  <Button
                    sx={{
                      backgroundColor: "rgb(116, 81, 235)",
                      marginTop: "5px",
                    }}
                  >
                    Lost Report
                  </Button>
                </Link>
              </Box>
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: "0px",
                left: "0px",
                right: "0px",
                background:
                  "linear-gradient(90deg, rgb(242, 233, 63) 0%, rgb(249, 171, 45) 100%)",
                height: "8px",
              }}
            ></Box>
          </Box>

          <Box
            sx={{
              position: "relative",
              borderRadius: "4px",
              background: "rgb(206 234 248)",
              width: "100%",
              maxWidth: "550px",
            }}
          >
            <Box
              sx={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "stretch",
                gap: "5px",
              }}
            >
              <Typography variant="h6">{heroData.title2}</Typography>
              <Typography>{heroData.des2}</Typography>
              <Box>
                <Link href="/foundItemReport">
                  <Button
                    sx={{
                      backgroundColor: "rgb(116, 81, 235)",
                      marginTop: "5px",
                    }}
                  >
                    Found Report
                  </Button>
                </Link>
              </Box>
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: "0px",
                left: "0px",
                right: "0px",
                background:
                  "linear-gradient(90deg, rgb(157, 169, 243) 0%, rgb(156, 199, 242) 100%);",

                height: "8px",
              }}
            ></Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default HeroSection;
