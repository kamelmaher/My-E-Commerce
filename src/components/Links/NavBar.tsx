import { Stack } from "@mui/material"
import { pages } from "../../data/pages"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <Stack className="menu-links" direction={"row"} gap={3}>
            {
                pages.map(page =>
                    <NavLink
                        className={"nav-link"}
                        key={page}
                        to={`/${(page == "Mens" || page == "Womens") ? "products/" : ""}${page != "Home" ? page.toLowerCase() : ""}`}
                        style={{ fontSize: "17px" }}
                    >
                        {page}
                    </NavLink>
                )
            }
        </Stack>
    )
}

export default NavBar
