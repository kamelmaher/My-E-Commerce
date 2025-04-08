import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { ProductType } from "../types/Product"
import ProductsPage from "../components/Product/ProductsPage"

const CategoryProducts = () => {
    const { categoryName } = useParams()
    const products = useFetch<ProductType[]>(`https://dummyjson.com/products/category/${categoryName}`)
    return (
        <>
            <ProductsPage title={categoryName!.split("-").join(" ")} products={products.data!} isLoading={products.isLoading} />
        </>
    )
}

export default CategoryProducts
