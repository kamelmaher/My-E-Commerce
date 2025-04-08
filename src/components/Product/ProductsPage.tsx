import { Typography, Stack } from "@mui/material"
import Product from "./Product"
import { ProductType } from "../../types/Product"
import Loading from "../Loading"
type ProductsPageProps = {
    title: string,
    products: ProductType[]
    isLoading: boolean
}
const ProductsPage = ({ title, products, isLoading }: ProductsPageProps) => {
    return (
        <>
            <Typography variant="h5" mb={2} fontSize={"23px"} >
                {title.toUpperCase()}
            </Typography >
            {
                !isLoading ?
                    <Stack
                        direction={"row"}
                        flexWrap={"wrap"}
                        justifyContent={"space-between"}
                    >
                        {
                            products.map(product => <Product key={product.id} product={product} isRow />)
                        }
                    </Stack> : <Loading />
            }
        </>
    )
}

export default ProductsPage
