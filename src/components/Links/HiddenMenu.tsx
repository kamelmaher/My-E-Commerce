import { Box } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useRef, useState } from "react";
import { pages } from "../../data/pages";
import Menu from "../Menu";
import { NavLink } from "react-router-dom";
import { getLink } from "../../utils/getLink";
const HiddenMenu = () => {

    const [showMenu, setShowMenu] = useState(false)

    const menuRef = useRef<HTMLDivElement | null>(null)
    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node))
            setShowMenu(false)
    }
    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside)
        return () => window.addEventListener("mousedown", handleClickOutside)
    }, [])
    return (
        <Box
            className={"pointer hidden-menu"}
            position={"relative"}
            order={{
                xs: 2,
                sm: 3
            }}
            ref={menuRef}
            zIndex={2515}
        >
            <Box
                onClick={() => setShowMenu(!showMenu)}
            >
                <MenuIcon />
            </Box>
            <Menu show={showMenu} height="180px">
                {
                    pages.map(page => <NavLink
                        key={page}
                        style={{
                            padding: "5px 10px",
                            display: "block"
                        }}
                        to={getLink(page)}
                        onClick={() => setShowMenu(false)}
                    >{page}</NavLink>)
                }
            </Menu>
        </Box>
    )
}

export default HiddenMenu
