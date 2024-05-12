import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../constants/routes"
import { SUBTITLE, TITLE } from "../../constants/pageNotFound"


const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "80vh" }}>
            <Typography fontSize={30} fontWeight={500} marginBlock=".5rem">{TITLE}</Typography>
            <Typography fontSize={18} fontWeight={400} marginBlock=".5rem">{SUBTITLE}</Typography>
            <Button onClick={() => navigate(ROUTES.HOME)} variant="contained" sx={{ width: "fit-content", backgroundColor: "#f8c301", color: "#fff", '&:hover': { backgroundColor: "#015835" } }}>Continue Shopping</Button>
        </Box>
    )
}

export default PageNotFound