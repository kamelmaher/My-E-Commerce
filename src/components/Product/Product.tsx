import { Box } from "@mui/material"
import { ProductType } from "../../types/Product"
import ProductRating from "./ProductRating"
import ProductsDetails from "./ProductsDetails"
import ProductControls from "./ProductControls"
import ProductImg from "./ProductImg"
import Animated from "../Animated"
import { useCart } from "../../hooks/useCart"
import { useUser } from "../../hooks/useUser"
import { useNavigate } from "react-router-dom"
type ProductProps = {
    product: ProductType
    isRow?: boolean
}
const Product = ({ product, isRow }: ProductProps) => {
    const { user } = useUser()
    const { addToCart, checkInCart } = useCart()
    const navigate = useNavigate()
    const handleAddToCart = () => {
        if (checkInCart(user.id, product.id)) return
        if (!addToCart(product, user.id)) navigate("/auth/login")
    }
    return (
        <Box
            width={
                isRow ?
                    {
                        xs: "100%",
                        md: "calc(100% / 3 - 5px)",
                        lg: "calc(100% / 4 - 5px)"
                    } :
                    "initial"
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
                    bgcolor={"white"}
                >
                    <ProductImg img={product.main_img} name={product.name} />
                    <ProductRating rating={product.rating} />
                    <ProductsDetails name={product.name} price={product.price} desc={product.description} />
                    <ProductControls addToCart={handleAddToCart} inCart={checkInCart(user.id, product.id)} />
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
