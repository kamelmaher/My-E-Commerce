import { ProductType } from "../../types/Product"
import ProductsContainer from "../../components/Product/ProductsContainer"
import Section from "../../components/Section"
type AppliancesProps = {
    products: ProductType[]
}
const Appliances = ({ products }: AppliancesProps) => {
    return (
        <Section title="Appliances">
            <ProductsContainer products={products} />
        </Section>
    )
}

export default Appliances
