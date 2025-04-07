import { Stack } from "@mui/material"
import { ProductType } from "../../types/Product"
import Product from "./Product"

type ProductsContainerProps = {
    products: ProductType[]
}
const ProductsContainer = ({ products }: ProductsContainerProps) => {
    return (
        <Stack
            direction={"row"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
        >
            {
                products.slice(0, 5).map(product => <Product key={product.id} product={product} />)
            }
        </Stack>
    )
}

export default ProductsContainer
