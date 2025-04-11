import React, { Suspense } from "react"
import { useFetch } from "../../hooks/useFetch"
import { ProductType } from "../../types/Product"
import Loading from "../../components/Loading"

type RelatedProps = {
    category: string
}
const Related = ({ category }: RelatedProps) => {
    const ProductContainer = React.lazy(() => import("../../components/Product/ProductsContainer"))
    const products = useFetch<ProductType[]>(`https://dummyjson.com/products/category/${category}`, true)
    return (
        !products.isLoading ?
            <Suspense>
                <ProductContainer title="Browse More" products={products.data!} />
            </Suspense> : <Loading />
    )
}

export default Related
