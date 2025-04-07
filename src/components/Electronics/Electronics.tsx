import { ProductType } from "../../types/Product"
import Section from "../Section"
import ProductsContainer from "../Product/ProductsContainer"
type ElectronicsProps = {
    products: ProductType[]
}
const Electronics = ({ products }: ElectronicsProps) => {
    return (
        <Section title="Electronics">
            <ProductsContainer products={products} />
        </Section>
    )
}

export default Electronics
