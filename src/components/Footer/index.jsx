import { Box, Grid, Typography } from "@mui/material"
import {
  CONTACT_DETAILS,
  CUSTOMER_SERVICES,
  FOOTER_ROUTES,
  INFORMATION,
  SERVICES,
} from "../../constants/footer"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa"

const Footer = () => {
  return (
    <Box padding={{ xs: "2rem 1rem", md: "2rem 6rem" }} sx={{backgroundColor:"#015835", color:"#fff"}}>
      <Grid container>
        <Grid item xs={12} md={12} sx={{height: "fit-content", display:"flex", gap:{xs:"0", md:"2rem"} , flexDirection:{xs:"column", md:"row"}, marginBottom:"1rem" }}>
          <img
            style={{
              width: "100px",
              height: "100%",
              objectFit: "cover",
              marginBottom: "1rem",
              backgroundColor:"#fff"
            }}
            src="/grpmarbelslogo.png"
            alt="logo"
          />
          <Box>
          {CONTACT_DETAILS?.map((item, index) => (
            <Typography key={index}>
              <span style={{ fontWeight: "500!important" }}>{item?.id}</span>
              {item?.value}
            </Typography>
          ))}
          </Box>
          <Box sx={{ display: "flex", gap: "1rem", marginTop:"1rem" }}>
            <Box>
              <FaFacebookSquare size={30} />
            </Box>
            <Box>
              <FaTwitterSquare size={30} />
            </Box>
            <Box>
              <FaInstagram size={30} />
            </Box>
            <Box>
              <FaWhatsapp size={30} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} md={3} marginBottom="1rem">
          <Typography fontWeight={500} fontSize={20} marginBottom={2}>
            {INFORMATION}
          </Typography>
          {FOOTER_ROUTES?.map((item, index) => (
            <Typography fontSize={16} marginTop={0.5} key={index}>
              {item.title}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={6} md={3} marginBottom="1rem">
          <Typography fontWeight={500} fontSize={20} marginBottom={2}>
            {INFORMATION}
          </Typography>
          {FOOTER_ROUTES?.map((item, index) => (
            <Typography fontSize={16} marginTop={0.5} key={index}>
              {item.title}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={6} md={3} marginBottom="1rem">
          <Typography fontWeight={500} fontSize={20} marginBottom={2}>
            {INFORMATION}
          </Typography>
          {FOOTER_ROUTES?.map((item, index) => (
            <Typography fontSize={16} marginTop={0.5} key={index}>
              {item.title}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={6} md={3} marginBottom="1rem">
          <Typography fontWeight={500} fontSize={20} marginBottom={2}>
            {CUSTOMER_SERVICES}
          </Typography>
          {SERVICES?.map((item, index) => (
            <Typography fontSize={16} marginTop={0.5} key={index}>
              {item.title}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
