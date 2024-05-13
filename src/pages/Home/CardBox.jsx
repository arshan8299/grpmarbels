import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import { urlFor } from '../../middleware/sanity';
import { useNavigate } from 'react-router-dom';

const CardBox = (data) => {
    const navigate = useNavigate()
    return (
        <Box marginTop="2rem" sx={{alignSelf:"center",display: "grid", gridTemplateColumns: {xs:"auto", md:"auto auto auto"}, gap: "2rem" }}>
            {data?.data?.map((item, index) => (
                <Card sx={{ maxWidth: { xs: "100%", md: 345 }, cursor: "pointer" }} key={index} onClick={()=>navigate(`/product-details/${item?._id}`)}>
                    <Box sx={{ width: "100%", height: "245px" }} >
                        {item?.productImage[0] &&<img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={urlFor(item?.productImage[0])?.url()} alt="logo" />}
                    </Box>

                    <CardContent sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {item?.productName}
                        </Typography>
                        <Typography variant="body2" >
                            {item?.productDescription?.slice(0, 120)}...
                        </Typography>
                        {item?.productVarient[0]?.price && <Typography textAlign="center">₹{item?.productVarient[0]?.price}</Typography>}
                        <Button sx={{ cursor: "pointer", marginTop:"1rem", alignSelf:"center" }}>Buy Now</Button>
                    </CardContent>
                </Card>
            ))}

        </Box>
    )
}

export default CardBox