import "./App.css"
import { Box } from "@mui/material"
import Nav from "./components/Nav/Nav"
import Links from "./components/Links/Links"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import ProductsContainer from "./components/Product/ProductsContainer"
import { categories } from "./data/Categories"
const App = () => {
  return (
    <Box>
      <Box
        padding={{
          xs: "0 20px",
          lg: "0 55px"
        }}
      >
        <Nav />
        <Links />
        <Hero />
        {
          categories.map(category => <ProductsContainer key={category} id={category} title={category} />)
        }
      </Box>
      <Footer />
    </Box >
  )
}

export default App
