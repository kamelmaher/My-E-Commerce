import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import Links from "./components/Links/Links"
const Layout = () => {
    return (
        <Box>

            <Box
                padding={{
                    xs: "0 20px 10px",
                    lg: "0 55px 10px"
                }}
                position={"fixed"}
                top={0}
                width={"100%"}
                bgcolor={"white"}
                zIndex={202}
                boxShadow={" 0 2px 8px rgba(0, 0, 0, 0.08)"}
            >
                <Nav />
                <Links />
            </Box>
            <Box
                mt={{
                    xs: "234px",
                    sm: "178px",
                }}
                padding={{
                    xs: "10px 20px",
                    lg: "10px 55px"
                }}>
                <Outlet />
            </Box>
            <Footer />
        </Box >
    )
}

export default Layout
