import { Box } from "@mui/material"
type ProductsDetailsProps = {
    name: string,
    price: number,
    old_price?: number
    desc: string
}
const ProductsDetails = ({ name, price, old_price, desc }: ProductsDetailsProps) => {
    return (
        <Box>
            <p className="product-name">
                <a>
                    {name}
                </a>
                <span>
                    {desc}
                </span>
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
