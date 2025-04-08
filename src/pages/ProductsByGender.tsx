import { Box } from "@mui/material"
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { ProductType } from "../types/Product"
import ProductsPage from "../components/Product/ProductsPage"

const ProductsByGender = () => {
    const { gender } = useParams()
    const products = useFetch<ProductType[]>(`https://dummyjson.com/products/category/${gender}`)
    return (
        <Box>
            <ProductsPage
                title={`${gender} Products`}
                products={products.data!}
                isLoading={products.isLoading}
            />
        </Box>
    )
}

export default ProductsByGender
