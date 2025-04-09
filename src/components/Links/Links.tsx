import { Stack } from "@mui/material"
import CategoriesButton from "./CategoriesButton"
import NavBar from "./NavBar"
import AuthButtons from "./AuthButtons"
import HiddenMenu from "./HiddenMenu"
import { useUser } from "../../hooks/useUser"
const Links = () => {
    const { user } = useUser()
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
                user ? <p>Hello {user.name}</p> : <AuthButtons />
            }
            <HiddenMenu />
        </Stack>
    )
}

export default Links
