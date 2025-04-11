import "./App.css"
import Hero from "./components/Hero/Hero"
import React, { Suspense } from "react"
import { useFetch } from "./hooks/useFetch"
import { ProductType } from "./types/Product"
import Ads from "./components/Ads/Ads"
import { bannerImages } from "./data/BannerImages"
import Loading from "./components/Loading"
const App = () => {
  const products = useFetch<ProductType[]>("https://dummyjson.com/products?limit=250", true)
  const ProductsContainer = React.lazy(() => import('./components/Product/ProductsContainer'));
  const filtered = (category: string) => products.data!.filter(product => product.category == category)
  return (
    <>
      <Hero />
      {
        !products.isLoading ?
          <>
            <Suspense>
              <ProductsContainer title={"beauty"} products={filtered("beauty")} />
            </Suspense>
            <Ads images={bannerImages.slice(0, 2)} />
            <Suspense>
              <ProductsContainer title={"groceries"} products={filtered("groceries")} />
            </Suspense>
            <Suspense>
              <ProductsContainer title={"laptops"} products={filtered("laptops")} />
            </Suspense>
            <Ads images={bannerImages.slice(2, 5)} />
            <Suspense>
              <ProductsContainer title={"tablets"} products={filtered("tablets")} />
            </Suspense>
          </> : <Loading />
      }
    </>
  )
}

export default App
