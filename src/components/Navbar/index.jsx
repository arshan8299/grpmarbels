import { Box } from "@mui/material"
import { NAVBAR_ROUTES } from "../../constants/navbar"
import { NavLink, useLocation } from "react-router-dom"
import { FaRegUser, FaShoppingCart } from "react-icons/fa"
import { RxCross1, RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const location = useLocation()
  return (
    <Box
      padding={{ xs: "1rem 1rem 1rem 1rem", md: "1rem 6rem 1rem 6rem" }}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color:"#fff",
        backgroundColor:location.pathname === "/home" ?"":"#016835"
      }}
    >
      <Box sx={{ width: "100px", height: "60px" }}>
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            marginBottom: "1rem",
            backgroundColor:"#fff"
          }}
          src="/grpmarbelslogo.png"
          alt="logo"
        />
      </Box>
      <Box sx={{ display:{xs:"none", md:"flex"}, gap: "2rem" }}>
        {NAVBAR_ROUTES?.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            style={({ isActive }) => {
              return {
                color: isActive ? "#f8c301" : "#fff",
                textDecoration: "none",
                fontSize: 20,
                fontWeight: 500,
              }
            }}
          >
            {item.title}
          </NavLink>
        ))}
      </Box>
      <Box sx={{ display: "flex", gap: "2rem" }}>
        <Box>
          <FaRegUser size={25} />
        </Box>
        <Box>
          <FaShoppingCart size={25} />
        </Box>
      </Box>
      <Box sx={{display:{xs:"block", md:"none"}}} onClick={toggleMenu}>
      {!showMenu && (
              <RxHamburgerMenu
                size={35}
              />
            )}
            {showMenu && (
              <RxCross1
                size={35}
              />
            )}
      {showMenu && (
          <Box
            transition={{ duration: 0.3, ease: "linear" }}
            sx={{background:"#fff",left:"0", top:"10%",position:"absolute", display:{xs:"flex", md:"none", width:"100vw", padding:"1.5rem", flexDirection:"column", gap:"1rem",borderTop:"1px solid #015835"}}}
          >
            {NAVBAR_ROUTES?.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={toggleMenu}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#f8c301" : "#000",
                textDecoration: "none",
                fontSize: 20,
                fontWeight: 500,
                  };
                }}
              >
                {item.title}
              </NavLink>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Navbar
