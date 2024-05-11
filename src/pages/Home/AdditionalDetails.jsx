import { Box, Grid, Typography } from '@mui/material'
import { ADDITIONALS_DETAILS } from '../../constants/home'

const AdditionalDetails = () => {
  return (
    <Grid container sx={{ marginBlock: "1rem", padding: { xs: "2rem 1rem", md: "2rem 4rem" } }}>
      {ADDITIONALS_DETAILS?.map((item, index) => (
        <Grid item xs={6} md={3} key={index} padding="1rem" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Box sx={{ width: "120px", height: "120px", marginBottom: "1rem" }}>
            <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={item?.icon} alt="icon" />
          </Box>
          <Typography marginBlock=".5rem" textAlign="center" fontSize={20} fontWeight={500}>{item?.title}</Typography>
          <Typography textAlign="center" fontSize={15} fontWeight={400}>{item?.description}</Typography>
        </Grid>
      ))}
    </Grid>
  )
}

export default AdditionalDetails