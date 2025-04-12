import { ProductType } from "../../types/Product"
import ProductsContainer from "../../components/Product/ProductsContainer"

type RelatedProps = {
    products: ProductType[]
}
const Related = ({ products }: RelatedProps) => {
    return (
        <ProductsContainer title="Browse More" products={products} />
    )
}

export default Related
