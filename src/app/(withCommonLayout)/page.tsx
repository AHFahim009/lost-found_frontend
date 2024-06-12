import HeroSection from "@/components/ui/homePage/HeroSection/HeroSection"
import AboutUs from "@/components/ui/homePage/aboutUs/AboutUs"
import FoundItemSection from "@/components/ui/homePage/foundItemSection/FoundItemSection"
import LostItemSection from "@/components/ui/homePage/lostItemSection/LostItemSection"
import { Box } from "@mui/material"

const HomePage = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: "2rem"
    }}>
      <HeroSection />
      <AboutUs />
      <LostItemSection />
      <FoundItemSection />
    </Box>
  )
}
export default HomePage