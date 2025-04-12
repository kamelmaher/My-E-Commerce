/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Stack } from "@mui/material"
import { useParams } from "react-router-dom"
import ProductImages from "./ProductImages"
import ProductPageDesc from "./ProductPageDesc"
import { useFetch } from "../../hooks/useFetch"
import { ProductType } from "../../types/Product"
import Loading from "../../components/Loading"
import Related from "./Related"
import { useEffect, useState } from "react"
import axios from "axios"
import { Root } from "../../types/Root"

const ProductPage = () => {
    const { productId } = useParams()
    const { data, isLoading } = useFetch<ProductType>(`https://dummyjson.com/products/${productId}`)
    const [category, setCategory] = useState<string | null>()
    const [related, setRelated] = useState<ProductType[]>([])
    useEffect(() => {
        scrollTo(0, 0)
    }, [productId])
    useEffect(() => {
        if (data && data.category != category) {
            setCategory(data.category)
        }
    }, [data])
    useEffect(() => {
        if (category)
            axios.get(`https://dummyjson.com/products/category/${category}`).then(({ data }) => setRelated(data.products.map((product: Root) => {
                return {
                    id: product.id,
                    main_img: product.thumbnail,
                    images: product.images,
                    name: product.title,
                    rating: product.rating,
                    category: product.category,
                    description: product.description,
                    price: product.price,
                }
            })))
    }
        , [category])
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
            {
                related.length <= 0 ? <Loading /> :
                    <Related products={related.filter(product => product.id != +productId!)} />
            }
        </Box>
    )
}

export default ProductPage
