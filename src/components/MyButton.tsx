import { Button } from "@mui/material"
import { ReactNode } from "react"
type MyButtonProps = {
    leftIcon?: ReactNode,
    text?: string,
    rightIcon?: ReactNode,
    size: "small" | "medium"
}
const MyButton = ({ leftIcon, text, rightIcon, size }: MyButtonProps) => {
    return (
        <Button className="my-button" size={size}>
            <span>
                {leftIcon && leftIcon}
            </span>
            <span>{text && text}</span>
            <span>
                {rightIcon && rightIcon}
            </span>
        </Button>
    )
}

export default MyButton
