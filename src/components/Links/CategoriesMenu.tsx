import { Box } from "@mui/material"
import { categories } from "../../data/Categories"
import Menu from "../Menu"
import { NavLink } from "react-router-dom"
type CategoriesMenuProps = {
    showMenu: boolean,
    closeMenu: () => void
}
const CategoriesMenu = ({ showMenu, closeMenu }: CategoriesMenuProps) => {
    return (
        <Menu w="100%" show={showMenu} height="300px">
            {
                categories.map(category => <Box
                    key={category}
                    borderBottom={"1px solid var(--border-color)"}

                    className="pointer"
                    onClick={closeMenu}
                >
                    <NavLink style={{ width: "100%", display: "block", padding: "5px 10px" }} to={`/category/${category}`}>{category}</NavLink>
                </Box>)
            }
        </Menu >
    )

}

export default CategoriesMenu
