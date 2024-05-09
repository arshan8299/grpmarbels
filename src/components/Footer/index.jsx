import { Box, Typography } from "@mui/material"
import {
  CONTACT_DETAILS,
  CUSTOMER_SERVICES,
  FOOTER_ROUTES,
  INFORMATION,
  SERVICES,
  SOCIALS,
} from "../../constants/footer"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaPinterestSquare,
  FaYoutube,
} from "react-icons/fa"

const Footer = () => {
  return (
    <Box padding={{ xs: "2rem 1rem", md: "2rem 6rem" }}>
      <Box
        sx={{
          display:"flex",
          alignItems:"flex-start",
          gap:"1rem",
          flexWrap:"wrap",
          justifyContent:{xs:"flex-start", md:"space-between"},
        }}
      >
        <Box sx={{height: "fit-content" }}>
          <img
            style={{
              width: "100px",
              height: "100%",
              objectFit: "cover",
              marginBottom: "1rem",
            }}
            src="/grpmarbelslogo.png"
            alt="logo"
          />
          {CONTACT_DETAILS?.map((item, index) => (
            <Typography key={index}>
              <span style={{ fontWeight: "500!important" }}>{item?.id}</span>
              {item?.value}
            </Typography>
          ))}
        </Box>
        <Box>
          <Typography fontWeight={500} fontSize={20} marginBottom={2}>
            {INFORMATION}
          </Typography>
          {FOOTER_ROUTES?.map((item, index) => (
            <Typography fontSize={16} marginTop={0.5} key={index}>
              {item.title}
            </Typography>
          ))}
        </Box>
        <Box>
          <Typography fontWeight={500} fontSize={20} marginBottom={2}>
            {CUSTOMER_SERVICES}
          </Typography>
          {SERVICES?.map((item, index) => (
            <Typography fontSize={16} marginTop={0.5} key={index}>
              {item.title}
            </Typography>
          ))}
        </Box>
        <Box>
          <Typography fontWeight={500} fontSize={20} marginBottom={2}>
            {SOCIALS}
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem" }}>
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
              <FaPinterestSquare size={30} />
            </Box>
            <Box>
              <FaYoutube size={30} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
