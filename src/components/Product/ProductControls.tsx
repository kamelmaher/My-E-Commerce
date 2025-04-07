import { Box, Stack } from "@mui/material"
import MyButton from "../MyButton"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const ProductControls = () => {
    return (
        <Stack
            direction={"row"}
            gap={2}
            alignItems={"center"}
            justifyContent={"center"}
            mt={2}
        >
            <MyButton size="small" text="add to cart" leftIcon={<ShoppingCartIcon />} />
            <Box
                width={52}
                height={52}
                border={"1px solid var(--border-color)"}
                color={"black"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                className="pointer"
            >
                <FavoriteBorderOutlinedIcon />
            </Box>
        </Stack>
    )
}

export default ProductControls
