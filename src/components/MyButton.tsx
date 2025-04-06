import { Button } from "@mui/material"
import { ReactNode } from "react"
type MyButtonProps = {
    leftIcon?: ReactNode,
    text?: string,
    rightIcon?: ReactNode,
    size: "small" | "medium",
    handleClick?: () => void
}
const MyButton = ({ leftIcon, text, rightIcon, size, handleClick }: MyButtonProps) => {
    return (
        <Button className="my-button" size={size} onClick={handleClick}>
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
