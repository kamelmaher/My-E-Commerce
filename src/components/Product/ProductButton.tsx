import { Box } from "@mui/material"
import { ReactNode } from "react";
type ProductButtonProps = {
    icon: ReactNode
    noActive?: boolean
    handleClick?: () => void
}
const ProductButton = ({ icon, noActive, handleClick }: ProductButtonProps) => {
    return (
        <Box
            width={52}
            height={52}
            border={"1px solid var(--border-color)"}
            color={"black"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            bgcolor={noActive ? "var(--bg-color)" : "transparent"}
            sx={{ cursor: noActive ? "not-allowed" : "pointer" }}
            onClick={handleClick}
        >
            {icon}
        </Box>
    )
}

export default ProductButton
