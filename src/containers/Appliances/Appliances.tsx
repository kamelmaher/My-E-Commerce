import { ProductType } from "../../types/Product"
import ProductsContainer from "../../components/Product/ProductsContainer"
import Section from "../../components/Section"
type AppliancesProps = {
    products: ProductType[]
}
const Appliances = ({ products }: AppliancesProps) => {
    return (
        <Section>
            <ProductsContainer products={products} title="Appliances" />
        </Section>
    )
}

export default Appliances
