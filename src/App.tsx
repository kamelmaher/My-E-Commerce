import { Box } from "@mui/material"
import Nav from "./components/Nav/Nav"
import "./App.css"
import Links from "./components/Links/Links"
import Hero from "./components/Hero/Hero"
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
      <Hero />
    </Box>
  )
}

export default App
