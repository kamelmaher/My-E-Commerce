import { Box } from "@mui/material"
import { ProductType } from "../../types/Product"
import ProductRating from "./ProductRating"
import ProductsDetails from "./ProductsDetails"
import ProductControls from "./ProductControls"
import ProductImg from "./ProductImg"
import Animated from "../Animated"
type ProductProps = {
    product: ProductType
}
const Product = ({ product }: ProductProps) => {
    return (
        <Box>
            <Animated>
                <Box
                    borderRadius={2}
                    boxShadow={"0 2px 8px rgba(0, 0, 0, 0.08)"}
                    border={"1px solid var(--border-color)"}
                    padding={"13px"}
                    mb={2}
                    position={"relative"}
                >
                    <ProductImg img={product.main_img} name={product.name} />
                    <ProductRating rating={product.rating} />
                    <ProductsDetails name={product.name} price={product.price} desc={product.description} />
                    <ProductControls />
                    {/* {
                        product.old_price &&
                        <Discount price={product.price} old_price={product.old_price} />
                    } */}
                </Box>
            </Animated>
        </Box>
    )
}

export default Product
