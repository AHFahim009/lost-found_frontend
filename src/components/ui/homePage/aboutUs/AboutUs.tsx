import * as React from 'react';
import { Box, Typography, Grid, Paper, Container } from '@mui/material';
import Image from 'next/image';
import { aboutUs, teamMembers } from '@/staticData';

export default function AboutUs() {
  return (
    <Container>
      <Typography variant='h4' textAlign="center">{aboutUs.heading}</Typography>
      <Box
        sx={{
          marginTop: "2rem",
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          gap: {
            xs: "2rem",
            lg: '9rem',
          },
          alignItem: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '500px',
            alignContent: 'center',
          }}
        >

          {
            aboutUs.data.map((data) => (

              <Paper key={data.title} elevation={1} sx={{ p: 2, marginBottom: "10px" }}>
                <Typography variant="h6" gutterBottom>
                  {data.title}
                </Typography>
                <Typography variant="body2">
                  {data.des}
                </Typography>
              </Paper>


            ))
          }
        </Box>

        <Box
          sx={{
            maxWidth: '500px',
            width: '100%',
            overflow: 'hidden',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px"
          }}
        >
          <Typography > Meet our members </Typography>
          <Grid container>
            {
              teamMembers.map((data) =>
                <Grid xs={6} item key={data.title} height={165} sx={{ position: "relative", height: "175px" }} >
                  <Image src={data.photo} alt={data.title} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </Grid>
              )
            }
          </Grid>
        </Box>
      </Box>

    </Container >
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },

];
