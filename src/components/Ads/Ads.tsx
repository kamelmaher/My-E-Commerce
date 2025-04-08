import { Box, Stack } from "@mui/material"
import Section from "../../components/Section"
import Animated from "../../components/Animated"
type AdsProps = {
    images: string[]
}
const Ads = ({ images }: AdsProps) => {
    return (
        <Section>
            <Stack
                direction={"row"}
                flexWrap={"wrap"}
                justifyContent={"space-between"}
            >
                {
                    images.map(img => <Box
                        borderRadius={1}
                        overflow={"hidden"}
                        mb={2}
                        width={{
                            xs: "100%",
                            md: `calc(100% / ${images.length} - 10px)`
                        }}
                        key={img}
                    >
                        <Animated>
                            <img src={img} alt="banner Box" loading="lazy" />
                        </Animated>
                    </Box>)
                }
            </Stack>
        </Section>
    )
}

export default Ads
