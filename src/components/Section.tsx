import { Box } from "@mui/material"
import { ReactNode } from "react"
type SectionProps = {
    children: ReactNode,
}
const Section = ({ children }: SectionProps) => {
    return (
        <Box mt={2} mb={2}>
            {children}
        </Box>
    )
}

export default Section
