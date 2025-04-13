import { Box, Stack } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { useCart } from "../../hooks/useCart";
const NavIcons = () => {
    const { user } = useUser()
    const { getUserCart } = useCart()
    const cart = getUserCart(user.id)
    return (
        <Stack direction={"row"} spacing={2}>
            <Box className={"nav-icon"}>
                <Box className={"counter"}>1</Box>
                <FavoriteIcon className="pointer" fontSize="large" />
            </Box>

            <NavLink to={`/cart/${user.id}`} className={"nav-icon"} >
                <Box className={"counter"}>{cart ? cart.products.length : 0}</Box>
                <ShoppingCartIcon className="pointer" fontSize="large" />
            </NavLink>
        </Stack>
    )
}

export default NavIcons
