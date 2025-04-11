import { Box, Stack } from "@mui/material"
import { useParams } from "react-router-dom"
import ProductImages from "./ProductImages"
import ProductPageDesc from "./ProductPageDesc"
import { useFetch } from "../../hooks/useFetch"
import { ProductType } from "../../types/Product"
import Loading from "../../components/Loading"
import Related from "./Related"

const ProductPage = () => {
    const { productId } = useParams()
    const product = useFetch<ProductType>(`https://dummyjson.com/products/${productId}`)
    return (
        !product.isLoading ?
            <Box>
                <Stack
                    direction={{
                        xs: "column",
                        md: "row"
                    }}
                    pt={3}
                    pb={3}
                    justifyContent={"center"}
                >
                    <ProductImages images={product.data!.images} />
                    <ProductPageDesc product={product.data!} />
                </Stack>
                <Related category={product.data!.category} />
            </Box> : <Loading />
    )
}

export default ProductPage
