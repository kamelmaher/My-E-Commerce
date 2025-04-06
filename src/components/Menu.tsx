import { Box } from "@mui/material"
import { ReactNode } from "react"
type MenuProps = {
    children: ReactNode
    w?: string
    show: boolean
    maxHeight?: string
}
const Menu = ({ children, w, show, maxHeight }: MenuProps) => {
    return (
        <Box
            height={0}
        >
            <Box
                position={"absolute"}
                boxShadow={"0 2px 8px rgba(0, 0, 0, 0.08)"}
                zIndex={15122}
                bgcolor={"white"}
                width={w}
                height={show ? maxHeight ? maxHeight : "300px" : "0"}
                overflow={"hidden"}
                sx={{ transition: "height 0.2s ease-in-out" }}
            >
                {children}
            </Box>
        </Box >
    )
}

export default Menu
