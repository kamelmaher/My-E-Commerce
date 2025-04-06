import { Stack } from "@mui/material"
import MyButton from "../MyButton"
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
const AuthButtons = () => {
    return (
        <Stack direction={"row"} gap={2} order={{
            xs: 3,
            sm: 2
        }}>
            <MyButton size="small" text="Login" rightIcon={<LoginIcon />} />
            <MyButton size="small" text="Sign Up" rightIcon={<PersonAddAltIcon />} />
        </Stack>
    )
}

export default AuthButtons
