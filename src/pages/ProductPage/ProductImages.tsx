import { Box, Stack } from "@mui/material"
import { useState } from "react"
type ProductImagesProps = {
    images: string[]
}
const ProductImages = ({ images }: ProductImagesProps) => {
    const [selectedImg, setSelectedImg] = useState(images[0])
    return (
        <Stack
            width={{
                xs: "100%",
                lg: "calc(100% / 2)"
            }}
            direction={{
                xs: "column",
                md: "row"
            }}
            justifyContent={{
                xs: "start",
                md: "space-around"
            }}
            alignItems={{
                xs: "center",
                md: "start"
            }}
            p={2}
            gap={2}
            borderRight={{
                xs: "",
                md: "1px solid var(--primary)"
            }}
        >
            <Box>
                <Box
                    width={"320px"}
                    bgcolor={"#edede8"}
                    borderRadius={2}
                >
                    <img src={selectedImg} alt="Product Img" />
                </Box>
            </Box>
            <Stack
                direction={{
                    xs: "row",
                    md: "column"
                }}
                gap={2}
                width={{
                    xs: "320px",
                    md: "fit-content"
                }}
                justifyContent={"space-between"}
            >
                {
                    images.map(img => <Box
                        key={img}
                        width={"70px"}
                        bgcolor={"#edede8"}
                        borderRadius={2}
                        className="pointer"
                        border={`2px solid ${selectedImg == img ? "var(--primary)" : "none"}`}
                        onClick={() => setSelectedImg(img)}
                    >
                        <img src={img} alt="Product Img" />
                    </Box>)
                }
            </Stack>
        </Stack >
    )
}

export default ProductImages
