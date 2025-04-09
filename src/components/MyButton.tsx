import { Button } from "@mui/material"
import { ReactNode } from "react"
import Loading from "./Loading"
type MyButtonProps = {
    leftIcon?: ReactNode,
    text?: string,
    rightIcon?: ReactNode,
    size: "small" | "medium",
    handleClick?: () => void
    isTitle?: boolean
    w?: string
    fs?: string
    submit?: boolean
    isLoading?: boolean
}
const MyButton = ({ leftIcon, text, rightIcon, size, handleClick, isTitle, w, fs, submit, isLoading }: MyButtonProps) => {
    return (
        <Button
            className="my-button"
            onClick={handleClick}
            style={{
                borderRadius: isTitle ? "0" : "4px",
                padding: size == "small" ? "10px" : "15px",
                fontSize: fs ? fs : "15px",
                width: w ? w : ""
            }}
            type={submit ? "submit" : "button"}
        >
            {
                isLoading ?
                    <Loading color="white" height={"fit-content"} />
                    :
                    <>
                        {leftIcon && leftIcon}
                        <span>{text && text}</span>
                        {rightIcon && rightIcon}
                    </>
            }
        </Button >
    )
}

export default MyButton
