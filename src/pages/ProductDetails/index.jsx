import { Box, Button, Container, Grid, Rating, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { FaShoppingCart, FaWhatsapp } from 'react-icons/fa';
import { client, urlFor } from '../../middleware/sanity';
import ReverseCountdownTimer from './ReverseCountdownTimer';
import ProductTabs from "./ProductTabs"
import useScreenSize from '../../hooks/useScreeenSize';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const screenSize = useScreenSize()
    const params = useParams()
    const endDate = new Date(2024, 5, 13, 10, 0, 0); // Replace with your desired date/time
    const label = 'Offer Ends In:';
    const [data, setData] = useState()

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
        const documentId = params?.id ;
        fetchDocumentById(documentId)
            .then((document) => {
                setData(document);
            })
            .catch((error) => {
                console.error('Error fetching document by ID:', error.message);
            });
    }, [params?.id])


    return (
        <Container sx={{ marginBlock: "2rem" }}>
            {data && <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    {data && <img src={urlFor(data?.productImage[0])?.url()} alt="Product" style={{ maxWidth: '100%', height: '100%' }} />}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography fontSize={23} fontWeight={600} color="#121212">
                        {data?.productName}
                    </Typography>
                    <Typography fontSize={14} color="#f8c301" marginBlock=".5rem">In Stock</Typography>
                    <Typography fontSize={20} fontWeight={600} >Rs 999</Typography>
                    <Typography fontSize={14}>Tax Included</Typography>
                    <ReverseCountdownTimer endDate={endDate} label={label} />
                    <Typography fontSize={14} color="#f8c301" sx={{ backgroundColor: "#016835", width: "fit-content", padding: ".4rem", marginBlock: "1rem" }}>Hurry Only 11 left</Typography>
                    <Box display="flex" alignItems="center" mb={2}>
                        <Typography variant="body2">Rating:</Typography>
                        <Rating value={data?.productRatings} readOnly />
                    </Box>
                    <Box display="flex" alignItems="center" gap="2rem">
                        <Button sx={{ width: "fit-content", backgroundColor: "#f8c301", color: "#fff", '&:hover': { backgroundColor: "#015835" }, padding: ".5rem 1rem" }} startIcon={<FaShoppingCart />}>
                            Add to Cart
                        </Button>
                        <Button sx={{ width: "fit-content", backgroundColor: "#016835", color: "#fff", '&:hover': { backgroundColor: "#f8c301" }, padding: ".5rem 1rem" }} startIcon={<FaWhatsapp />}>
                            Inquiry
                        </Button>
                    </Box>
                    <Box display="flex" flexDirection={{ xs: "column", md: "row" }} marginBlock="1rem">
                        <Typography fontSize={16} fontWeight={400}>Expected Delivery on</Typography>
                        <Typography fontSize={16} fontWeight={600}>Thursday 16 May - Wednesday 22 May.</Typography>
                    </Box>
                    <Box sx={{ padding: "1rem", backgroundColor: "#f5f5f5" }}>
                        <Typography textAlign="center" fontSize={18} fontWeight={600} color="#121212" marginBlock="1rem">GUARANTEED SAFE CHECKOUT</Typography>
                        <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src="/payment_paartners.jpg" alt="payment" />
                    </Box>

                </Grid>
                <Grid item xs={12}>
                    {screenSize.width > 900 && <ProductTabs />}
                </Grid>
            </Grid>}
        </Container>
    );
};

export default ProductDetails;
