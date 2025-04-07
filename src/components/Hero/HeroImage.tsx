import { Stack, Box } from "@mui/material"

type HeroImageProps = {
    img: string
}
const HeroImage = ({ img }: HeroImageProps) => {
    return (
        <Stack
            key={img}
            direction={"row"}
            gap={1}
            bgcolor={"var(--bg-color)"}
            alignItems={"center"}
            justifyContent={"space-around"}
            padding={"15px"}
            width={{
                xs: "100%",
                md: "calc(100% / 2 - 20px)",
                lg: "calc(100% / 4 - 20px)"
            }}
        >
            <img src={img} alt="banner img" style={{ width: "100px " }} loading="lazy" />
            <Box>
                <p style={{ fontWeight: "700" }}>Break Disc deals on this</p>
                <p style={{ color: "grey" }}>Up to <span style={{ color: "var(--primary)", fontSize: "25px" }}>70%</span></p>
                <span>Shop Now</span>
            </Box>
        </Stack>
    )
}

export default HeroImage
