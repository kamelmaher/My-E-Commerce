import { Stack } from "@mui/material"
import img1 from "/banner3_1.webp"
import img2 from "/banner3_2.webp"
import img3 from "/banner3_3.webp"
import img4 from "/banner3_4.webp"
import Section from "../Section"
import HeroImage from "./HeroImage"
const imgs = [img1, img2, img3, img4]
const HeroImages = () => {
    return (
        <Section>
            <Stack
                direction={"row"}
                flexWrap={"wrap"}
                justifyContent={{
                    xs: "center",
                    md: "space-between"
                }}
                gap={2}
            >
                {imgs.map(img => <HeroImage key={img} img={img} />)}
            </Stack>
        </Section>
    )
}

export default HeroImages
