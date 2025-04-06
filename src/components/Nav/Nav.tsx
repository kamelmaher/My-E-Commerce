import { Stack } from "@mui/material"
import Logo from "./Logo"
import Search from "./Search"
import NavIcons from "./NavIcons"
const Nav = () => {
    return (
        <Stack
            direction={"row"}
            flex-wrap={"wrap"}
            padding={"15px 0"}
            justifyContent={"space-between"}
            alignItems={"center"}
        >
            <Logo />
            <Search />
            <NavIcons />
        </Stack>
    )
}

export default Nav
