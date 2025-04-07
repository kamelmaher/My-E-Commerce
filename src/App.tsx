import { Box } from "@mui/material"
import Nav from "./components/Nav/Nav"
import "./App.css"
import Links from "./components/Links/Links"
import Hero from "./components/Hero/Hero"
import HotDeals from "./components/HotDeals/HotDeals"
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
      <HotDeals />
    </Box>
  )
}

export default App
