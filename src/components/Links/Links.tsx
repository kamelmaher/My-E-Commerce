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
const Links = () => {
    const { user, isLoading } = useUser()
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
                !isLoading ? <Stack direction={"row"} gap={2} order={{
                    xs: 3,
                    sm: 2
                }}
                    alignItems={"center"}
                    minWidth={200}
                    justifyContent={"center"}
                >
                    {
                        user.name ? <>
                            <p>Hello {user.name}</p>
                            <MyButton size={"small"} text="Log out" leftIcon={<LoginIcon />} handleClick={logOut} />
                        </> : <Loading height="fit-content" />
                    }
                </Stack> : <AuthButtons />
            }
            <HiddenMenu />
        </Stack>
    )
}

export default Links
