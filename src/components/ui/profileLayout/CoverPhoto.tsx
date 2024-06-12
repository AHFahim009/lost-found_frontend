import { profileDemoDate } from "@/profileDemoData"
import { Box } from "@mui/material"
import Image from "next/image"

const CoverPhoto = () => {
  return (

    <Box
      sx={{
        paddingTop: "4rem",
        width: "100%",
        height: "300px",
        overflow: "hidden"
      }}
    >
      <Image src={profileDemoDate.coverPhoto} alt="cover photo" style={{ objectFit: "cover", width: "100%", height: '100%' }} />
    </Box>


  )
}
export default CoverPhoto