import { Box, Card, CardContent, Typography } from '@mui/material'

const CardBox = (data) => {
    return (
        <Box marginTop="2rem" sx={{ display: "grid", gridTemplateColumns: "auto auto auto", gap: "2rem" }}>
            {data?.data?.map((item, index) => (
                <Card sx={{ maxWidth:{xs:"100%", md:345}, cursor: "pointer" }} key={index}>
                    <Box sx={{ width: "100%", height: "245px" }} >
                        <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src="/marbles/WhatsApp Image 2024-05-09 at 5.12.08 PM.jpeg" alt="item" />
                    </Box>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item?.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item?.description?.slice(0, 120)}...
                        </Typography>
                    </CardContent>
                    <Box padding={2} sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography>{item?.price}</Typography>
                        <Typography sx={{ cursor: "pointer" }}>More Details</Typography>
                    </Box>
                </Card>
            ))}

        </Box>
    )
}

export default CardBox