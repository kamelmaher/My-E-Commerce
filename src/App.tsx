import "./App.css"
import { Box } from "@mui/material"
import Nav from "./components/Nav/Nav"
import Links from "./components/Links/Links"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import { categories } from "./data/Categories"
import React, { Suspense } from "react"
import { useFetch } from "./hooks/useFetch"
import { ProductType } from "./types/Product"
const App = () => {
  const products = useFetch<ProductType[]>("https://dummyjson.com/products?limit=250")
  const ProductsContainer = React.lazy(() => import('./components/Product/ProductsContainer'));
  const filtered = (category: string) => products.data!.filter(product => product.category == category)
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
          !products.isLoading ?
            categories.map(category => <Suspense key={category}>
              <ProductsContainer id={category} title={category} products={filtered(category)} />
            </Suspense>) : <p>Loading ...</p>
        }
      </Box>
      <Footer />
    </Box >
  )
}

export default App
