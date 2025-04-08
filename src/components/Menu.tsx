import { Box } from "@mui/material"
import { ReactNode } from "react"
type MenuProps = {
    children: ReactNode
    w?: string
    show: boolean
    height?: string
}
const Menu = ({ children, w, show, height }: MenuProps) => {
    return (
        <Box
            height={0}
        >
            <Box
                position={"absolute"}
                boxShadow={"0 2px 8px rgba(0, 0, 0, 0.08)"}
                zIndex={1542}
                bgcolor={"white"}
                width={w}
                height={show ? height ? height : "200px" : "0"}
                overflow={"auto"}
                sx={{ transition: "height 0.2s ease-in-out" }}
            >
                {children}
            </Box>
        </Box >
    )
}

export default Menu
