import { Box, Stack } from "@mui/material"
import Section from "../../components/Section"
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
                        mb={2}
                        width={{
                            xs: "100%",
                            md: `calc(100% / ${images.length} - 10px)`
                        }}
                        key={img}
                    >
                        <img src={img} alt="" loading="lazy" />
                    </Box>)
                }
            </Stack>
        </Section>
    )
}

export default Ads
