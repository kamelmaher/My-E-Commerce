import { Box, Stack } from "@mui/material"
import img1 from "/banner3_1.png"
import img2 from "/banner3_2.png"
import img3 from "/banner3_3.png"
import img4 from "/banner3_4.png"
const imgs = [img1, img2, img3, img4]
const HeroImages = () => {
    return (
        <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"} mt={2} mb={2} gap={2}>
            {imgs.map(img => <Stack
                key={img}
                direction={"row"}
                gap={1}
                bgcolor={"var(--bg-color)"}
                alignItems={"center"}
                justifyContent={"space-around"}
                padding={"15px"}
                width={{
                    xs: "calc(100% - 20px)",
                    md: "calc(100% / 2 - 20px)",
                    lg: "calc(100% / 4 - 20px)"
                }}
            >
                <img src={img} alt="banner img" style={{ width: "100px " }} />
                <Box>
                    <p style={{ fontWeight: "700" }}>Break Disc deals on this</p>
                    <p style={{ color: "grey" }}>Up to <span style={{ color: "var(--primary)", fontSize: "25px" }}>70%</span></p>
                    <span>Shop Now</span>
                </Box>
            </Stack>)}
        </Stack>
    )
}

export default HeroImages
