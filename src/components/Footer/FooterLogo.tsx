import { Box } from "@mui/material"
import logo from "/white_logo.png"

const FooterLogo = () => {
    return (
        <Box
            width={{
                xs: "100%",
                md: "calc(100% / 2)",
                lg: "calc(100% / 4)"
            }}
            padding={"10px 0"}
            textAlign={{
                xs: "center",
                md: "start"
            }}
        >
            <Box width={"180px"} m={{
                xs: "auto",
                md: "0"
            }}>
                <img src={logo} alt="Logo" loading="lazy" />
            </Box>
            <Box mt={2} fontSize={"14px"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, aliquam.
            </Box>
        </Box>
    )
}

export default FooterLogo
