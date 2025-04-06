import { Box, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { pages } from "../../data/pages";
import Menu from "../Menu";
const HiddenMenu = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <Box
            className={"pointer hidden-menu"}
            position={"relative"}
            order={{
                xs: 2,
                sm: 3
            }}

        >
            <Box
                onClick={() => setShowMenu(!showMenu)}
            >
                <MenuIcon />
            </Box>
            <Menu show={showMenu} maxHeight="210px" >
                {
                    pages.map(page => <Typography
                        key={page}
                        variant="h6"
                        padding={"5px 10px"}
                        onClick={() => setShowMenu(false)}
                    >{page}</Typography>)
                }
            </Menu>
        </Box >
    )
}

export default HiddenMenu
