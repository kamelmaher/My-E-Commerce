import { Box } from "@mui/material"
type DiscountProps = {
    price: number
    old_price: number
}
const Discount = ({ price, old_price }: DiscountProps) => {
    return (
        <Box
            position={"absolute"}
            top={0}
            right={0}
            padding={"4px 7px"}
            bgcolor={"red"}
            color={"white"}
            fontSize={"14px"}
        >
            {(((old_price - price) / old_price) * 100).toFixed(0)}%
        </Box>
    )
}

export default Discount
