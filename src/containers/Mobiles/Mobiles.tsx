import ProductsContainer from "../../components/Product/ProductsContainer"
import Section from "../../components/Section"
import { ProductType } from "../../types/Product"
type MobilesProps = {
    products: ProductType[]
}
const Mobiles = ({ products }: MobilesProps) => {
    return (
        <Section title="Mobiles">
            <ProductsContainer products={products} />
        </Section>
    )
}

export default Mobiles