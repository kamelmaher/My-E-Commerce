import { Stack } from "@mui/material"
import MyButton from "../MyButton"
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useNavigate } from "react-router-dom";
const AuthButtons = () => {
    const navigate = useNavigate();
    return (
        <Stack direction={"row"} gap={2} order={{
            xs: 3,
            sm: 2
        }}>
            <MyButton size="small" text="Login" rightIcon={<LoginIcon />} handleClick={() => navigate("/auth/login")} />
            <MyButton size="small" text="Sign Up" rightIcon={<PersonAddAltIcon />} handleClick={() => navigate("/auth/signup")} />
        </Stack>
    )
}

export default AuthButtons
