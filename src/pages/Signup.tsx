import { Typography, Box, TextField } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import { FormEvent, useEffect, useState } from "react";
import { UserType } from "../types/User";
import { signUp } from "../services/auth";
const Signup = () => {
    const [newUser, setNewUser] = useState<UserType>({} as UserType)
    const inputs = ["Name", "Age", "Email", "Password"]
    const [result, setResult] = useState({ success: false, error: "" })
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        if (result.success) {
            navigate("/auth/login")
        }
    }, [result.success])
    const handleOnSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const { signUpError } = await signUp(newUser.email, newUser.password!, newUser.name, newUser.age, setIsLoading)
        setResult({ success: signUpError ? false : true, error: signUpError })
    }
    return (
        <form style={{ padding: "20px", width: "350px" }} className="auth-form" onSubmit={handleOnSubmit}>
            <Typography variant="h5" textAlign={"center"} mb={2}>Sign Up</Typography>
            {
                inputs.map(input => <Box key={input} mb={3}>
                    <TextField id={input.toLowerCase()} label={`${input}:`} variant="outlined" onChange={e =>
                        setNewUser({ ...newUser, [input.toLowerCase()]: e.target.value })
                    } />
                </Box>)
            }
            <Box>
                <MyButton size="small" text="SignUp" w="100%" fs="17px" submit isLoading={isLoading} />
            </Box>
            {
                result.error && <p style={{ color: "red", textAlign: "center" }}>{result.error}</p>
            }
            <span style={{ fontSize: "15px" }}>Already have account ? <NavLink to={"/auth/login"} style={{ color: "var(--primary)", fontWeight: "600" }}>Log in</NavLink></span>
        </form>
    )
}

export default Signup
