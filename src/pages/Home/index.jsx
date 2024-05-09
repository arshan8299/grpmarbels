import { Box } from '@mui/material'
import Category from './Category'

const Home = () => {
  return (
    <>
    <Box width="100vw" height="70vh">
        <img style ={{width:"100%", height:"100%"}}src="/jpeg-optimizer_ai (1).jpg" alt="" />
      </Box>
    <Box padding={{ xs: "2rem 1rem", md: "2rem 6rem" }}>
      <Category/>
    </Box>
    </>
  )
}

export default Home