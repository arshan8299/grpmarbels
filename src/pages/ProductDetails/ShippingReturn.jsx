import { Box, Typography } from '@mui/material'
import { RETURN_POLICY, RETURN_POLICY_DESCRIPTION, SHIPPING, SHIPPING_DESCRIPTION } from '../../constants/productDetails'

const ShippingReturn = () => {
    return (
        <Box>
            <Typography fontSize={18} fontWeight={600} marginBlock=".5rem">{RETURN_POLICY}</Typography>
            <p style={{ fontSize: "16px" }}>{RETURN_POLICY_DESCRIPTION}</p>
            <Typography fontSize={18} fontWeight={600} marginBlock=".5rem" >{SHIPPING}</Typography>
            <p style={{ fontSize: "16px" }}>{SHIPPING_DESCRIPTION}</p>
        </Box>
    )
}

export default ShippingReturn