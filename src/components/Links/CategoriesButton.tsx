import MyButton from "../MyButton"
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box } from "@mui/material";
import CategoriesMenu from "./CategoriesMenu";
import { useEffect, useRef, useState } from "react";
const CategoriesButton = () => {
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
        <Box position={"relative"} ref={menuRef}>
            <MyButton size="medium" text="Browse Categories" leftIcon={<MenuIcon />} rightIcon={<ArrowDropDownIcon />} handleClick={() => setShowMenu(!showMenu)} />
            <CategoriesMenu showMenu={showMenu} closeMenu={() => setShowMenu(false)} />
        </Box>
    )
}

export default CategoriesButton
