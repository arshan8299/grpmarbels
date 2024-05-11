import { Box, Rating, Typography } from '@mui/material'

const Testimonials = () => {
    return (
        <Box sx={{ padding: { xs: "2rem 1rem", md: "2rem 4rem" } }}>
            <Typography textAlign="center" fontSize={40} fontWeight={500} marginBlock="1rem">What People Are Saying</Typography>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "1rem", justifyContent: "space-between" }}>
                <Box sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", padding: "1rem", borderRadius: "5px" }}>
                    <Rating name="read-only" value={5} readOnly />
                    <Typography fontSize={20} fontWeight={500}>Customer Service!</Typography>
                    <Typography>{"Anvouge's fashion collection is a game-changer! Their unique and trendy pieces have completely transformed my style.It's comfortable, stylish, and always on-trend."}</Typography>
                    <Typography>John Doe</Typography>
                    <Typography fontSize={13} fontWeight={500} marginTop=".5rem">{"August 13, 2024"}</Typography>
                </Box>
                <Box sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", padding: "1rem", borderRadius: "5px" }}>
                    <Rating name="read-only" value={5} readOnly />
                    <Typography fontSize={20} fontWeight={500}>Customer Service!</Typography>
                    <Typography>{"Anvouge's fashion collection is a game-changer! Their unique and trendy pieces have completely transformed my style.It's comfortable, stylish, and always on-trend."}</Typography>
                    <Typography>John Doe</Typography>
                    <Typography fontSize={13} fontWeight={500} marginTop=".5rem">{"August 13, 2024"}</Typography>
                </Box>
                <Box sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", padding: "1rem", borderRadius: "5px" }}>
                    <Rating name="read-only" value={5} readOnly />
                    <Typography fontSize={20} fontWeight={500}>Customer Service!</Typography>
                    <Typography>{"Anvouge's fashion collection is a game-changer! Their unique and trendy pieces have completely transformed my style.It's comfortable, stylish, and always on-trend."}</Typography>
                    <Typography>John Doe</Typography>
                    <Typography fontSize={13} fontWeight={500} marginTop=".5rem">{"August 13, 2024"}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Testimonials