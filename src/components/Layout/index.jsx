import { Box } from '@mui/material'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const Layout = () => {
    return (
        <Box>
            <Navbar />
            <Outlet />
            <Footer />
        </Box>
    )
}

export default Layout