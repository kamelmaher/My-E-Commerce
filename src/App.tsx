import { Box } from "@mui/material"
import Nav from "./components/Nav/Nav"
import "./App.css"
import Links from "./components/Links/Links"
const App = () => {
  return (
    <Box
      padding={{
        xs: "0 20px",
        lg: "0 55px"
      }}
    >
      <Nav />
      <Links />
    </Box>
  )
}

export default App
