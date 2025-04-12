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
    const { data, isLoading } = useFetch<ProductType>(`https://dummyjson.com/products/${productId}`)
    console.log(data)
    if (isLoading) return <Loading />
    return (
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
                <ProductImages images={data!.images} />
                <ProductPageDesc product={data!} />
            </Stack>
            <Related category={data!.category} id={+productId!} />
        </Box>
    )
}

export default ProductPage
