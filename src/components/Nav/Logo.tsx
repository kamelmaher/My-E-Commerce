import { Box } from "@mui/material"
import LogoImage from "/logo.png"

const Logo = () => {
    return (
        <Box
            width={"180px"}
        >
            <img src={LogoImage} alt="Logo" />
        </Box>
    )
}

export default Logo
