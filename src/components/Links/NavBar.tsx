import { Stack, Typography } from "@mui/material"
import { pages } from "../../data/pages"

const NavBar = () => {
    return (
        <Stack className="menu-links" direction={"row"} gap={3}>
            {
                pages.map(page => <Typography
                    variant="h6"
                    className="pointer"
                    key={page}
                >
                    {page}
                </Typography>)
            }

        </Stack>
    )
}

export default NavBar
