import { Box } from "@mui/material"

type ProductImgPropps = {
    img: string,
    name: string
}
const ProductImg = ({ img, name }: ProductImgPropps) => {
    return (
        <Box
            width={130}
            height={130}
            m={"auto"}
            mb={2}
        >
            <img src={img} alt={name} />
        </Box>
    )
}

export default ProductImg
