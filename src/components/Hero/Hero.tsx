import { Box } from "@mui/material"
import Slider from "./Slider"
import HeroImages from "./HeroImages"
const Hero = () => {
    return (
        <Box mt={3}>
            <Slider />
            <HeroImages />
        </Box>
    )
}

export default Hero
