import Section from "../Section"
import { ProductType } from "../../types/Product"
import ProductsContainer from "../Product/ProductsContainer"
type HotDealsProps = {
    products: ProductType[]
}
const HotDeals = ({ products }: HotDealsProps) => {
    return (
        <Section title="Hot Deals">
            <ProductsContainer products={products} />
        </Section>
    )
}

export default HotDeals
