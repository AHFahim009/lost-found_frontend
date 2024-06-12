import UserFoundItemCard from "@/components/ui/profilePage/userFoundItem/UserFoundItemCard"
import UserLostItemCard from "@/components/ui/profilePage/userLostItem/UserLostItemCard"
import { myFoundData, myLostReport } from "@/staticData"
import { Container, Grid, Typography } from "@mui/material"
const page = () => {
  return (
    <Container sx={{ paddingTop: "6rem" }}>
      <Typography variant="h5" paddingBottom="2rem">{myLostReport.allLostReport}</Typography>
      <Grid container
        spacing={2}
        sx={{

        }}
      >
        {myLostReport.data.map((data) => (
          <UserLostItemCard key={data.lostProductName} {...data} />
        ))}
      </Grid>
    </Container>
  )
}
export default page