import { Stack } from "@mui/material"
import CategoriesButton from "./CategoriesButton"
import NavBar from "./NavBar"
import AuthButtons from "./AuthButtons"
import HiddenMenu from "./HiddenMenu"
import { useUser } from "../../hooks/useUser"
import MyButton from "../MyButton"
import LoginIcon from '@mui/icons-material/Login';
import { logOut } from "../../services/auth"
import Loading from "../Loading"
import { useNavigate } from "react-router-dom"
const Links = () => {
    const { user, isLogin, fetchUserLoading } = useUser()
    const navigate = useNavigate()
    return (
        <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
            gap={{
                xs: 2,
                md: 0
            }}
        >
            <CategoriesButton />
            <NavBar />
            {
                !fetchUserLoading ? <Stack direction={"row"} gap={2} order={{
                    xs: 3,
                    sm: 2
                }}
                    alignItems={"center"}
                    minWidth={200}
                    justifyContent={"center"}
                >
                    {
                        isLogin ?
                            <>
                                <p>Hello {user.name}</p>
                                <MyButton size={"small"} text="Log out" leftIcon={<LoginIcon />} handleClick={() => {
                                    navigate("/")
                                    logOut()
                                }} />
                            </> : <AuthButtons />
                    }
                </Stack> : <Loading height="fit-content" />
            }
            <HiddenMenu />
        </Stack >
    )
}

export default Links
