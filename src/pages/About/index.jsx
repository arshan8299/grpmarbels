import { Box, Typography } from '@mui/material'
import { ABOUTUS, ABOUT_CONTENT, ABOUT_DESCRIPTION } from '../../constants/about'

const About = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography alignSelf="center" marginTop="2rem" fontSize={50} fontWeight={500}>{ABOUTUS}</Typography>
      <Typography textAlign="center" marginBlock="1rem" padding={{xs:"0rem 1rem", md:"0rem 12rem"}} fontSize={17} fontWeight={400}>{ABOUT_DESCRIPTION}</Typography>
      <Box sx={{ padding: { xs: "1rem", md: "2rem 4rem" } }}>
        {ABOUT_CONTENT?.map((item, index) => (
          <Box sx={{ display: "flex", gap: "1.5rem", marginBlock: "3rem", flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" }, justifyContent: "center" }} key={index}>
            <Box sx={{ width: { sm: "100%", md: "500px" }, height: { xs: "250px", sm: "500px", md: "400px" } }}>
              <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={item.image} alt="about-us" />
            </Box>
            <Box sx={{ width: { xs: "100%", md: "500px" }, height: "100%", display: "flex", flexDirection: "column", alignSelf: { md: "center" } }}>
              <Typography alignSelf="center" marginBlock="1rem" fontSize={30} fontWeight={500} >{item.aboutTitle}</Typography>
              <Typography textAlign="center" marginBlock="1rem" fontSize={17} lineHeight="1.5" fontWeight={400} >{item.aboutContent}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default About