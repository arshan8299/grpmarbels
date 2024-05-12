import { Box, Container, Grid, Typography, } from '@mui/material'
import { CATEGORY, SHOPBYCATEGORY } from '../../constants/home'

const Category = () => {
  // useEffect(() => {
  //   const query = '*[_type == "planters"]';

  //   client.fetch(query).then((data) => {
  //     setBenches(data);
  //   });
  // }, []);
  // async function fetchDocumentById(documentId) {
  //   try {
  //     const document = await client.getDocument(documentId);
  //     return document;
  //   } catch (error) {
  //     console.error('Error fetching document by ID:', error.message);
  //     throw error;
  //   }
  // }
  // const documentId = '010be86e-4a77-459c-8a43-3c99fff07053';
  // fetchDocumentById(documentId)
  //   .then((document) => {
  //     console.log('Document:', document);
  //   })
  //   .catch((error) => {
  //     console.error('Error fetching document by ID:', error.message);
  //   });
  // console.log(benches);
  //console.log(benches);
  return (
    <Container sx={{ display: "flex", flexDirection: "column",padding:{ xs: "2rem 1rem", md: "2rem 2rem", marginTop:"2rem" }}}>
      <Typography textAlign="center" fontSize={{ xs: 30, md: 50 }} fontWeight={500} marginBlock={2}>{SHOPBYCATEGORY}</Typography>

      <Grid container sx={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", padding: "2rem"}}>
        {CATEGORY?.map((item, index) => (
          <Grid item xs={6} md={4} key={index} padding="1rem" sx={{ display: "flex", flexDirection: "column", alignItems: "center", cursor:"pointer" }}>
            <Box sx={{ width: {xs:"130px", md:"300px"}, height:{xs:"130px", md:"300px"}, marginBottom: "1rem" }}>
              <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={item?.categoryImage} alt="icon" />
            </Box>
            <Typography marginBlock=".5rem" textAlign="center" color="#000" fontSize={20} fontWeight={500}>{item?.categoryTitle}</Typography>
          </Grid>
        ))}

      </Grid>
    </Container>
  )
}

export default Category