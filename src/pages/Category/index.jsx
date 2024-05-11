import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { client } from "../../middleware/sanity";
import CardBox from "../Home/CardBox";


const Category = () => {
  const [benches, setBenches] = useState()
  useEffect(() => {
    const query = '*[_type == "benches"]';

    client.fetch(query).then((data) => {
      setBenches(data);
    });
  }, []);
  console.log(benches);
  return (
    <Box sx={{display:"flex", flexDirection:"column"}}>
      <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", backgroundPosition: "center", backgroundSize: "cover", width: "100vw", height: "40vh", backgroundImage: `url("/4k-marble-background-3cmdd4f1m8tv2rw8.jpg")` }}>
        <Typography fontSize={60} color="#f8c301" fontWeight={500}>Benches</Typography>
      </Box>
      <Typography textAlign="center" marginBlock="2rem" fontSize={40}fontWeight={500}>See our top sellers</Typography>
      <CardBox data={benches}/>
    </Box>
  )
}

export default Category