import { Box } from "@mui/material"
import { NAVBAR_ROUTES } from "../../constants/navbar";
import { NavLink } from "react-router-dom";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box padding={{ xs: "2rem 1rem", md: "2rem 6rem" }} sx={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
      <Box sx={{ width: "60px", height: "fit-content" }}>
        <img style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          marginBottom: "1rem",
        }} src="/grpmarbelslogo.png" alt="logo" />
      </Box>
      <Box sx={{display:"flex", gap:"2rem"}}>
        {NAVBAR_ROUTES?.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            style={({ isActive }) => {
              return {
                color: isActive ? "green" : "#000",
                textDecoration:"none"
              };
            }}
          >
            {item.title}
          </NavLink>
        ))}
      </Box>
      <Box sx={{ display: "flex", gap: "1rem" }}>
            <Box>
              <FaRegUser size={25} />
            </Box>
            <Box>
              <FaShoppingCart size={25} />
            </Box>
          </Box>
    </Box>
  )
}

export default Navbar