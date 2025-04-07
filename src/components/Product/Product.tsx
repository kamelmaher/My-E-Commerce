import { Box } from "@mui/material"
import { ProductType } from "../../types/Product"
import ProductRating from "./ProductRating"
import ProductsDetails from "./ProductsDetails"
import ProductControls from "./ProductControls"
import ProductImg from "./ProductImg"
import Discount from "./Discount"
import Animated from "../Animated"
type ProductProps = {
    product: ProductType
}
const Product = ({ product }: ProductProps) => {
    return (
        <Box width={{
            xs: "100%",
            sm: "calc(100% / 2 - 10px)",
            md: "calc(100% / 3 - 10px)",
            lg: "calc(100% / 5 - 10px)"
        }}>
            <Animated>
                <Box
                    boxShadow={"0 2px 8px rgba(0, 0, 0, 0.08)"}
                    border={"1px solid var(--border-color)"}
                    padding={"13px"}
                    mb={2}
                    position={"relative"}
                >
                    <ProductImg img={product.img} name={product.name} />
                    <ProductRating rating={product.rating} />
                    <ProductsDetails name={product.name} price={product.price} old_price={product.old_price} />
                    <ProductControls />
                    {
                        product.old_price &&
                        <Discount price={product.price} old_price={product.old_price} />
                    }
                </Box>
            </Animated>
        </Box>
    )
}

export default Product
