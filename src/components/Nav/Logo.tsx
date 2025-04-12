import { Box } from "@mui/material"
import LogoImage from "/logo.webp"
import { NavLink } from "react-router-dom"

const Logo = () => {
    return (
        <Box
            width={"180px"}
        >
            <NavLink to={"/"}>
                <img src={LogoImage} alt="Logo" />
            </NavLink>
        </Box>
    )
}

export default Logo
