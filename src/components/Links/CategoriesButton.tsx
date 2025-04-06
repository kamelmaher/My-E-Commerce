import MyButton from "../MyButton"
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const CategoriesButton = () => {
    return (
        <MyButton size="medium" text="Browse Categories" leftIcon={<MenuIcon />} rightIcon={<ArrowDropDownIcon />} />
    )
}

export default CategoriesButton
