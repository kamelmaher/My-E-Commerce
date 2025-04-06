import { Box } from "@mui/material"
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
            <Menu show={showMenu} maxHeight="180px" >
                {
                    pages.map(page => <p
                        key={page}
                        style={{
                            padding: "5px 10px"
                        }}
                        onClick={() => setShowMenu(false)}
                    >{page}</p>)
                }
            </Menu>
        </Box >
    )
}

export default HiddenMenu
