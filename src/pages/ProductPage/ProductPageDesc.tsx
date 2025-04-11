import { Box, Typography } from "@mui/material"
import { ProductType } from "../../types/Product"
import ProductRating from "../../components/Product/ProductRating"
import ProductControls from "../../components/Product/ProductControls"
import { useCart } from "../../hooks/useCart"
import { useUser } from "../../hooks/useUser"
type ProductDescProps = {
    product: ProductType
}
const ProductPageDesc = ({ product }: ProductDescProps) => {
    const { user } = useUser()
    const { addToCart, checkInCart } = useCart()
    return (
        <Box
            width={{
                xs: "100%",
                lg: "calc(100% / 2)"
            }}
            p={2}
            borderLeft={{
                xs: "",
                md: "1px solid var(--primary)"
            }}
        >
            <Typography
                variant="h3"
                fontSize={"30px"}
                color="#2c1d0b"
                mb={2}
            >
                {product.name}
            </Typography>
            <p style={{ fontSize: "16px", color: "#666666", lineHeight: "1.4" }}>{product.description}</p>
            <Typography variant="h4" mt={3} mb={1}>$ {product.price}</Typography>
            <ProductRating rating={product.rating} />
            <ProductControls addToCart={() => addToCart(product, user.id)} inCart={checkInCart(user.id, product.id)} />
        </Box>
    )
}

export default ProductPageDesc
