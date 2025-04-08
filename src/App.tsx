import "./App.css"
import { Box } from "@mui/material"
import Nav from "./components/Nav/Nav"
import Links from "./components/Links/Links"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import React, { Suspense } from "react"
import { useFetch } from "./hooks/useFetch"
import { ProductType } from "./types/Product"
import Ads from "./components/Ads/Ads"
import { bannerImages } from "./data/BannerImages"
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
            <>
              <Suspense>
                <ProductsContainer id={"beauty"} title={"beauty"} products={filtered("beauty")} />
              </Suspense>
              <Ads images={bannerImages.slice(0, 2)} />
              <Suspense>
                <ProductsContainer id={"groceries"} title={"groceries"} products={filtered("groceries")} />
              </Suspense>
              <Suspense>
                <ProductsContainer id={"laptops"} title={"laptops"} products={filtered("laptops")} />
              </Suspense>
              <Ads images={bannerImages.slice(2, 5)} />
              <Suspense>
                <ProductsContainer id={"tablets"} title={"tablets"} products={filtered("tablets")} />
              </Suspense>
            </> : <p>Loading</p>
        }
      </Box>
      <Footer />
    </Box >
  )
}

export default App
