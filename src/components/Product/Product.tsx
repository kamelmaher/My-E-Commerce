import { Box } from "@mui/material"
import { ProductType } from "../../types/Product"
import ProductRating from "./ProductRating"
import ProductsDetails from "./ProductsDetails"
import ProductControls from "./ProductControls"
import ProductImg from "./ProductImg"
import Animated from "../Animated"
type ProductProps = {
    product: ProductType
    isRow?: boolean
}
const Product = ({ product, isRow }: ProductProps) => {
    return (
        <Box
            width={
                !isRow ? "initial" :
                    {
                        xs: "100%",
                        md: "calc(100% / 3 - 5px)",
                        lg: "calc(100% / 4 - 5px)"
                    }
            }
        >
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
