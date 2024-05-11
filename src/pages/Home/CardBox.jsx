import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import { urlFor } from '../../middleware/sanity';

const CardBox = (data) => {
    return (
        <Box marginTop="2rem" sx={{alignSelf:"center",display: "grid", gridTemplateColumns: {xs:"auto", md:"auto auto auto"}, gap: "2rem", }}>
            {data?.data?.map((item, index) => (
                <Card sx={{ maxWidth: { xs: "100%", md: 345 }, cursor: "pointer" }} key={index}>
                    <Box sx={{ width: "100%", height: "245px" }} >
                        <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={urlFor(item?.productImage[0]).url()} alt="logo" />
                    </Box>

                    <CardContent sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {item?.productName}
                        </Typography>
                        <Typography variant="body2" >
                            {item?.productDescription?.slice(0, 120)}...
                        </Typography>
                        {item?.productVarient[0]?.price && <Typography textAlign="center">₹{item?.productVarient[0]?.price}</Typography>}
                        <Button alignSelf="center" sx={{ cursor: "pointer", marginTop:"1rem" }}>Buy Now</Button>
                    </CardContent>
                </Card>
            ))}

        </Box>
    )
}

export default CardBox