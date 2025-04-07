import { Stack } from "@mui/material"
import Section from "../Section"
import Product from "../Product/Product"
import products from "../../products.json"
const HotDeals = () => {
    const hotDealsProducts = products.filter(product => product.old_price)
    return (
        <Section title="Hot Deals">
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
            >
                {
                    hotDealsProducts.slice(0, 5).map(product => <Product key={product.id} product={product} />)
                }
            </Stack>
        </Section>
    )
}

export default HotDeals
