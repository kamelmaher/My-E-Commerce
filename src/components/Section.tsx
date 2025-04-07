import { Box } from "@mui/material"
import { ReactNode } from "react"
import MyButton from "./MyButton"
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
type SectionProps = {
    children: ReactNode,
    title?: string
}
const Section = ({ children, title }: SectionProps) => {
    return (
        <Box mt={2} mb={2}>
            {
                title &&
                <Box
                    borderBottom={"3px solid var(--primary)"}
                    mb={2}
                >
                    <MyButton size="medium" text={title} leftIcon={<LabelImportantIcon />} isTitle />
                </Box>
            }
            {children}
        </Box>
    )
}

export default Section
