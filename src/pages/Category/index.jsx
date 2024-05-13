import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { client } from "../../middleware/sanity";
import CardBox from "../Home/CardBox";
import { useParams } from "react-router-dom";


const Category = () => {
  const [products, setProducts] = useState()
  const params = useParams()
  console.log("parmas", params?.id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);
  useEffect(() => {
    const query = `*[_type == "${params?.id}"]`;

    client.fetch(query).then((data) => {
      setProducts(data);
    });
  }, []);
  console.log(products);
  return (
    <Box sx={{display:"flex", flexDirection:"column"}}>
      <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", backgroundPosition: "center", backgroundSize: "cover", width: "100vw", height: "40vh", backgroundImage: `url("/4k-marble-background-3cmdd4f1m8tv2rw8.jpg")` }}>
        <Typography fontSize={60} color="#f8c301" fontWeight={500}>{params?.id?.toLocaleUpperCase()}</Typography>
      </Box>
      <Typography textAlign="center" marginBlock="2rem" fontSize={40}fontWeight={500}>See our top sellers</Typography>
      <CardBox data={products}/>
    </Box>
  )
}

export default Category