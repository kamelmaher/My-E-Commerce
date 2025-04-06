import { Box } from "@mui/material"
import { categories } from "../../data/Categories"
import Menu from "../Menu"
type CategoriesMenuProps = {
    showMenu: boolean,
    closeMenu: () => void
}
const CategoriesMenu = ({ showMenu, closeMenu }: CategoriesMenuProps) => {
    return (
        <Menu w="100%" show={showMenu} maxHeight="250px">
            {
                categories.map(category => <Box
                    key={category}
                    borderBottom={"1px solid var(--border-color)"}
                    padding={"5px 10px"}
                    className="pointer"
                    onClick={closeMenu}
                >{category}</Box>)
            }
        </Menu>
    )

}

export default CategoriesMenu
