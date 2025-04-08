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
                    xs: "0 20px",
                    lg: "0 55px"
                }}
            >
                <Nav />
                <Links />
                <Box mt={3}>
                    <Outlet />
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}

export default Layout
