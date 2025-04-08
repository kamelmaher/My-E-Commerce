import ProductsContainer from "../../components/Product/ProductsContainer"
import Section from "../../components/Section"
import { ProductType } from "../../types/Product"
type ElectronicsProps = {
    products: ProductType[]
}
const Electronics = ({ products }: ElectronicsProps) => {
    return (
        <Section>
            <ProductsContainer products={products} title="Electronics" />
        </Section>
    )
}

export default Electronics
