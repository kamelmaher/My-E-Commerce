import { Button } from "@mui/material"
import { ReactNode } from "react"
type MyButtonProps = {
    leftIcon?: ReactNode,
    text?: string,
    rightIcon?: ReactNode,
    size: "small" | "medium",
    handleClick?: () => void
    isTitle?: boolean
}
const MyButton = ({ leftIcon, text, rightIcon, size, handleClick, isTitle }: MyButtonProps) => {
    return (
        <Button
            className="my-button"
            onClick={handleClick}
            style={{
                borderRadius: isTitle ? "0" : "4px",
                padding: size == "small" ? "10px" : "15px",
                justifyContent: "start",
                fontSize: size == "small" ? "12px" : "15px"
            }}
        >
            {leftIcon && leftIcon}
            <span>{text && text}</span>
            {rightIcon && rightIcon}
        </Button >
    )
}

export default MyButton
