import UserFoundItemCard from "@/components/ui/profilePage/userFoundItem/UserFoundItemCard"
import { myFoundData } from "@/staticData"
import { Container, Grid, Typography } from "@mui/material"
const page = () => {
  return (
    <Container sx={{ paddingTop: "6rem" }}>
      <Typography variant="h5" paddingBottom="2rem">{myFoundData.allFoundReport}</Typography>
      <Grid container
        spacing={2}
        sx={{

        }}
      >
        {myFoundData.data.map((data) => (
          <UserFoundItemCard key={data.foundProductName} {...data} />
        ))}
      </Grid>
    </Container>
  )
}
export default page