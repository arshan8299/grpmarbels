import { Box, Rating, Typography } from '@mui/material'

const Testimonials = () => {
    return (
        <Box>
            <Typography>What People Are Saying</Typography>
            <Box sx={{display:"flex", gap:"1rem", justifyContent:"space-between"}}>
                <Box sx={{ backgroundColor: "#ccc", padding: "1rem", borderRadius: "5px" }}>
                    <Rating name="read-only" value={5} readOnly />
                    <Typography>Customer Service!</Typography>
                    <Typography>{"Anvouge's fashion collection is a game-changer! Their unique and trendy pieces have completely transformed my style.It's comfortable, stylish, and always on-trend."}</Typography>
                    <Typography>John Doe</Typography>
                    <Typography>{"August 13, 2024"}</Typography>
                </Box>
                <Box sx={{ backgroundColor: "#ccc", padding: "1rem", borderRadius: "5px" }}>
                    <Rating name="read-only" value={5} readOnly />
                    <Typography>Customer Service!</Typography>
                    <Typography>{"Anvouge's fashion collection is a game-changer! Their unique and trendy pieces have completely transformed my style.It's comfortable, stylish, and always on-trend."}</Typography>
                    <Typography>John Doe</Typography>
                    <Typography>{"August 13, 2024"}</Typography>
                </Box>
                <Box sx={{ backgroundColor: "#ccc", padding: "1rem", borderRadius: "5px" }}>
                    <Rating name="read-only" value={5} readOnly />
                    <Typography>Customer Service!</Typography>
                    <Typography>{"Anvouge's fashion collection is a game-changer! Their unique and trendy pieces have completely transformed my style.It's comfortable, stylish, and always on-trend."}</Typography>
                    <Typography>John Doe</Typography>
                    <Typography>{"August 13, 2024"}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Testimonials