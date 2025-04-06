import { Box, Stack } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const NavIcons = () => {
    return (
        <Stack direction={"row"} spacing={2}>
            <Box className={"nav-icon"}>
                <Box className={"counter"}>1</Box>
                <FavoriteIcon className="pointer" fontSize="large" />
            </Box>
            <Box className={"nav-icon"}>
                <Box className={"counter"}>2</Box>
                <ShoppingCartIcon className="pointer" fontSize="large" />
            </Box>
        </Stack>
    )
}

export default NavIcons
