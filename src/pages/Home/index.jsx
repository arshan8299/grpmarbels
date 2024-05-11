import { Box, Typography } from "@mui/material"
import Category from "./Category"
import Testimonials from "../../components/Testimonials"
import AdditionalDetails from "./AdditionalDetails"

const Home = () => {
  return (
    <>
      <Box
        width="100vw"
        height="80vh"
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "2rem 4rem",
          backgroundImage: `url("/fountain-trevi-italy-rome.jpg")`,
          color: "green"
        }}
      >
        <Typography fontSize={60} fontWeight={500}>Welcome to GRP Marbels</Typography>
        <Typography fontSize={50} fontWeight={500}>Where art meets marbel</Typography>
      </Box>

      <Category />
      <AdditionalDetails />
      <Testimonials />
    </>
  )
}

export default Home
