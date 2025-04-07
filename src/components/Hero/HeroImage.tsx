import { Stack, Box } from "@mui/material"
import Animated from "../Animated"

type HeroImageProps = {
    img: string
}
const HeroImage = ({ img }: HeroImageProps) => {
    return (
        <Box
            width={{
                xs: "100%",
                md: "calc(100% / 2 - 20px)",
                lg: "calc(100% / 4 - 20px)"
            }}
        >
            <Animated>
                <Stack
                    alignItems={"center"}
                    padding={"15px"}
                    bgcolor={"var(--bg-color)"}
                    gap={1}
                    direction={"row"}
                    justifyContent={"space-around"}
                >
                    <img src={img} alt="banner img" style={{ width: "100px " }} loading="lazy" />
                    <Box>
                        <p style={{ fontWeight: "700" }}>Break Disc deals on this</p>
                        <p style={{ color: "grey" }}>Up to <span style={{ color: "var(--primary)", fontSize: "25px" }}>70%</span></p>
                        <span>Shop Now</span>
                    </Box>
                </Stack>
            </Animated>
        </Box>
    )
}

export default HeroImage
