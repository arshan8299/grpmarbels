import { Box, Button, Typography } from '@mui/material'
import { BENCHES } from '../../constants/product';

const ProductCategory = () => {
    // useEffect(() => {
    //     const query = '*[_type == "planters && _id == 010be86e-4a77-459c-8a43-3c99fff07053"]';

    //     client.fetch(query).then((data) => {
    //         setBenches(data);
    //     });
    // }, []);
//     async function fetchDocumentById(documentId) {
//         try {
//           const document = await client.getDocument(documentId);
//           return document;
//         } catch (error) {
//           console.error('Error fetching document by ID:', error.message);
//           throw error;
//         }
//       }
//       const documentId = '010be86e-4a77-459c-8a43-3c99fff07053';
// fetchDocumentById(documentId)
//   .then((document) => {
//     console.log('Document:', document);
//   })
//   .catch((error) => {
//     console.error('Error fetching document by ID:', error.message);
//   });
    // console.log(benches);
    return (
        <Box sx={{ display: "flex", flexDirection: "column", padding: "2rem", border: "1px solid #ccc", margin:"1rem" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography fontSize={22} fontWeight={500}>Benches</Typography>
                <Button>View All</Button>
            </Box>

            <Box sx={{ display: "flex", padding: "1rem 0rem", gap: "3rem", overflowX: "scroll" }} >
                {BENCHES?.map((item, index) => (
                    <Box key={index} sx={{ display: "flex", flexDirection: "column", border: "1px solid #ccc", borderRadius: "5px", }}>
                        <Box sx={{ width: 250, height: 250, overflow: "hidden" }}>
                            <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="/public/marbles/WhatsApp Image 2024-05-09 at 5.12.08 PM.jpeg" alt="" />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", padding: "1rem", alignItems: "center" }}>
                            <Typography>{item?.title}</Typography>
                            <Typography fontSize={16} fontWeight={600}>₹{item?.price}</Typography>

                        </Box>
                    </Box>
                ))}
            </Box>

        </Box>
    )
}

export default ProductCategory