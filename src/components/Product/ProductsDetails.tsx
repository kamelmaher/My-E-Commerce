import { Box, Typography } from "@mui/material"
type ProductsDetailsProps = {
    name: string,
    price: number,
    old_price?: number
    desc: string
}
const ProductsDetails = ({ name, price, old_price, desc }: ProductsDetailsProps) => {
    return (
        <Box>
            <Typography
                variant="h6"
                fontSize={"18px"}
                color="#2c1d0b"
            >
                {name}
            </Typography>
            <p className="product-desc" style={{ color: "#666666" }}>
                {desc}
            </p>
            <p>
                <span style={{ fontSize: "18px", fontWeight: "600", color: "var(--primary)" }}>${price}</span>
                {
                    old_price &&
                    <span style={{ fontSize: "15px", textDecoration: "line-through", color: "gray", display: "inline-block", marginLeft: "5px" }}>${old_price}</span>
                }

            </p>
        </Box >
    )
}

export default ProductsDetails
