import { Box, Button, Typography } from "@mui/material"
import Category from "./Category"
import Testimonials from "../../components/Testimonials"
import AdditionalDetails from "./AdditionalDetails"
import { HOMEPAGE_MAIN_DESCRIPTION, HOMEPAGE_MAIN_TITLE } from "../../constants/home"

const Home = () => {
  return (
    <>
      <Box sx={{ width: "100vw", height: { xs: "75vh", md: "100vh" }, position: "absolute", top: 0, left: 0, zIndex: -1 }}>
        <video src="/videos/grp_marbels.mp4" controls={false} autoPlay loop muted playsInline style={{ objectFit: "cover", width: "100%", height: "100%" }} />
      </Box>
      <Box
        width={{ xs: "100%", md: "100vw" }}
        height={{ xs: "60vh", md: "80vh" }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: { xs: "1rem", md: "2rem 4rem" },
        }}
      >
        <Box sx={{ backgroundColor: "#01583596", width: { xs: "100%", md: "55vw" }, minWidth: { xs: "100%", md: "500px" }, padding: { xs: "1rem", md: "2rem 2rem" }, borderRadius: "10px" }}>
          <Typography color="#f8c301" fontSize={{ xs: 25, md: 50 }} fontWeight={600} marginBlock="1rem">{HOMEPAGE_MAIN_TITLE}</Typography>
          <Typography color="#fff" fontSize={{ xs: 14, md: 20 }} fontWeight={400}>{HOMEPAGE_MAIN_DESCRIPTION}</Typography>
          <Button sx={{ width: "fit-content", backgroundColor: "#f8c301", color: "#015835", '&:hover': { backgroundColor: "#015835", color: "#f8c301" }, padding: ".5rem", marginBlock: "1rem" }}>Shop Now</Button>
        </Box>
      </Box>

      <Category />
      <AdditionalDetails />
      <Testimonials />

    </>
  )
}

export default Home
