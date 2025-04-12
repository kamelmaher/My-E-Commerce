import React, { Suspense } from "react"
import { useFetch } from "../../hooks/useFetch"
import { ProductType } from "../../types/Product"
import Loading from "../../components/Loading"

type RelatedProps = {
    category: string
    id: number
}
const Related = ({ category, id }: RelatedProps) => {
    const ProductContainer = React.lazy(() => import("../../components/Product/ProductsContainer"))
    const products = useFetch<ProductType[]>(`https://dummyjson.com/products/category/${category}`, true)
    return (
        !products.isLoading ?
            <Suspense>
                <ProductContainer title="Browse More" products={products.data!.filter(product => product.id != id)} />
            </Suspense> : <Loading />
    )
}

export default Related
