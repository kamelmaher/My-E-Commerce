import { Box, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { pages } from "../../data/pages";
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
            {
                showMenu &&
                <Box
                    position={"absolute"}
                    boxShadow={"0 2px 8px rgba(0, 0, 0, 0.08)"}
                    zIndex={15122}
                    bgcolor={"white"}
                    borderRadius={4}
                >
                    {
                        pages.map(page => <Typography
                            padding={"0 10px"}
                            mb={2}
                            key={page}
                            variant="h6"
                        >{page}</Typography>)
                    }
                </Box>
            }
        </Box>
    )
}

export default HiddenMenu
