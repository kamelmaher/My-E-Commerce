import MyButton from "../MyButton"
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box } from "@mui/material";
import CategoriesMenu from "./CategoriesMenu";
import { useState } from "react";
const CategoriesButton = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <Box position={"relative"}>
            <MyButton size="medium" text="Browse Categories" leftIcon={<MenuIcon />} rightIcon={<ArrowDropDownIcon />} handleClick={() => setShowMenu(!showMenu)} />
            <CategoriesMenu showMenu={showMenu} closeMenu={() => setShowMenu(false)} />
        </Box>
    )
}

export default CategoriesButton
