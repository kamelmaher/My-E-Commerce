import { Stack } from "@mui/material"
import MyButton from "../MyButton"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProductButton from "./ProductButton";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
type ProductControlsProps = {
    addToCart: () => void
    inCart: boolean
}
const ProductControls = ({ addToCart, inCart }: ProductControlsProps) => {
    return (
        <Stack
            direction={"row"}
            gap={2}
            alignItems={"center"}
            justifyContent={"center"}
            mt={2}
        >
            <MyButton size="small" text={inCart ? "In Cart" : "Add To Cart"} leftIcon={<ShoppingCartIcon />} handleClick={addToCart} />
            <ProductButton icon={<FavoriteBorderOutlinedIcon />} />
        </Stack>
    )
}

export default ProductControls
