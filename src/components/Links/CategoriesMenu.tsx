import { Typography } from "@mui/material"
import { categories } from "../../data/Categories"
import Menu from "../Menu"
type CategoriesMenuProps = {
    showMenu: boolean,
    closeMenu: () => void
}
const CategoriesMenu = ({ showMenu, closeMenu }: CategoriesMenuProps) => {
    return (
        <Menu w="100%" show={showMenu}>
            {
                categories.map(category => <Typography
                    key={category}
                    variant="h6"
                    borderBottom={"1px solid var(--border-color)"}
                    padding={"5px 10px"}
                    className="pointer"
                    onClick={closeMenu}
                >{category}</Typography>)
            }
        </Menu>
    )

}

export default CategoriesMenu
