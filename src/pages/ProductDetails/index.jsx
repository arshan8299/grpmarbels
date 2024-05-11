import { Box, Button, Container, Grid, MenuItem, Rating, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { client, urlFor } from '../../middleware/sanity';

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState()
    console.log(data);

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };
    useEffect(() => {
        async function fetchDocumentById(documentId) {
            try {
                const document = await client.getDocument(documentId);
                return document;
            } catch (error) {
                console.error('Error fetching document by ID:', error.message);
                throw error;
            }
        }
        const documentId = '010be86e-4a77-459c-8a43-3c99fff07053';
        fetchDocumentById(documentId)
            .then((document) => {
                setData(document);
            })
            .catch((error) => {
                console.error('Error fetching document by ID:', error.message);
            });
    }, [])


    return (
        <Container sx={{marginBlock:"2rem"}}>
            {data && <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    {data && <img src={urlFor(data?.productImage[0])?.url()} alt="Product" style={{ maxWidth: '100%', height: 'auto' }} />}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4" gutterBottom>
                        {data?.productName}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {data?.productDescription}
                    </Typography>
                    <Box display="flex" alignItems="center" mb={2}>
                        <Typography variant="body2">Rating:</Typography>
                        <Rating value={data?.productRatings} readOnly/>
                    </Box>
                    <Box sx={{display:"flex", flexDirection:"column"}}>
                        <Typography>Product Specifications</Typography>
                        <Typography>Specifications:1</Typography>
                        <Typography>Specifications:2</Typography>
                        <Typography>Specifications:3</Typography>
                    </Box>
                    <TextField
                        select
                        label="Quantity"
                        value={quantity}
                        onChange={handleQuantityChange}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    >
                        {[...Array(10).keys()].map((value) => (
                            <MenuItem key={value + 1} value={value + 1}>
                                {value + 1}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button variant="contained" color="primary" startIcon={<FaShoppingCart />} fullWidth>
                        Add to Cart
                    </Button>
                </Grid>
            </Grid>}
        </Container>
    );
};

export default ProductDetails;
