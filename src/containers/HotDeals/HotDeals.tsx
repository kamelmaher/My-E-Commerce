import ProductsContainer from "../../components/Product/ProductsContainer"
import Section from "../../components/Section"
import { ProductType } from "../../types/Product"
type HotDealsProps = {
    products: ProductType[]
}
const HotDeals = ({ products }: HotDealsProps) => {
    return (
        <Section>
            <ProductsContainer products={products} title="Hot Deals" />
        </Section>
    )
}

export default HotDeals
