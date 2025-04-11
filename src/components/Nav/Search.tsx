import { Box, Stack, } from "@mui/material"
import MyButton from "../MyButton"
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {
    return (
        <Stack
            bgcolor={"var(--bg-color)"}
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            display={{
                xs: "none",
                md: "flex"
            }}
        >
            <Box
                padding={"0 10px"}
                minWidth={300}
            >
                <input className="search" placeholder="Search For Products" />
            </Box>
            <MyButton size="small" leftIcon={<SearchIcon />} />
        </Stack>
    )
}

export default Search
