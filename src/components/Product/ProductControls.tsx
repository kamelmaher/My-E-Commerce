import { Stack } from "@mui/material"
import MyButton from "../MyButton"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProductButton from "./ProductButton";
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
            <ProductButton icon={<FavoriteBorderOutlinedIcon />} />
        </Stack>
    )
}

export default ProductControls
