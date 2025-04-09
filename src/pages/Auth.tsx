import { Outlet } from "react-router-dom"
import { Box, Stack } from "@mui/material"
import Logo from "../components/Nav/Logo"
const Auth = () => {
    return (
        <Box
            padding={5}
        >
            <Stack
                direction={"row"}
                justifyContent={"center"}
                paddingRight={4}
            >
                <Logo />
            </Stack>
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                padding={"30px 0"}
            >

                <Outlet />
            </Box>
        </Box>
    )
}

export default Auth
