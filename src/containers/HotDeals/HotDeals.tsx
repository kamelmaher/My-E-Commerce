import ProductsContainer from "../../components/Product/ProductsContainer"
import Section from "../../components/Section"
import { ProductType } from "../../types/Product"
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
