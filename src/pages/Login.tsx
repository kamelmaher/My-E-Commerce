import { Box, TextField, Typography } from "@mui/material";
import MyButton from "../components/MyButton";
import { NavLink, useNavigate } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { LoginUser } from "../services/auth";
import { useUser } from "../hooks/useUser";
import { UserType } from "../types/User";
const Login = () => {
    const inputs = ["email", "password"]
    const [user, setUser] = useState<UserType>({} as UserType)
    const [result, setResult] = useState({ success: false, error: "" })
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const { setIsLogin, setId } = useUser()
    useEffect(() => {
        if (result.success) {
            setIsLogin(true)
            navigate("/")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result.success])
    const handleOnSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const { loginError, user: returnedUser } = await LoginUser(user.email, user.password!, setIsLoading)
        setResult({ success: loginError ? false : true, error: loginError })
        if (!loginError && returnedUser)
            setId(returnedUser.uid)
    }
    return (
        <form style={{ padding: "20px", width: "350px" }} className="auth-form" onSubmit={handleOnSubmit}>
            <Typography variant="h5" textAlign={"center"} mb={2}>Log in</Typography>
            {
                inputs.map(input => <Box key={input} mb={3}>
                    <TextField id={input} label={`${input}:`} variant="outlined" onChange={e => setUser({ ...user, [input]: e.target.value })} />
                </Box>)
            }
            <Box>
                <MyButton size="small" text="Log in" w="100%" fs="17px" submit isLoading={isLoading} />
            </Box>
            {
                result.error && <p style={{ color: "red", textAlign: "center" }}>{result.error}</p>
            }
            <span style={{ fontSize: "15px" }}>dont have an account ? <NavLink to={"/auth/signup"} style={{ color: "var(--primary)", fontWeight: "600" }}>Sign Up</NavLink></span>
        </form>
    )
}

export default Login
