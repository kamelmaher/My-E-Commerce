import "./App.css"
import { Box } from "@mui/material"
import Nav from "./components/Nav/Nav"
import Links from "./components/Links/Links"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
// import ProductsContainer from 
import { categories } from "./data/Categories"
import React, { Suspense } from "react"
const App = () => {
  const ProductsContainer = React.lazy(() => import('./components/Product/ProductsContainer'));
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
          categories.map(category => <Suspense key={category} fallback={<p>Loading...</p>}>
            <ProductsContainer id={category} title={category} />
          </Suspense>)
        }
      </Box>
      <Footer />
    </Box >
  )
}

export default App
