import { Box } from "@mui/material"
import Nav from "./components/Nav/Nav"
import "./App.css"
import Links from "./components/Links/Links"
import Hero from "./components/Hero/Hero"
import HotDeals from "./containers/HotDeals/HotDeals"
import Electronics from "./containers/Electronics/Electronics"
import Appliances from "./containers/Appliances/Appliances"
import Ads from "./containers/Ads/Ads"
import products from "./products.json"
import { bannerImages } from "./data/BannerImages"
import Mobiles from "./containers/Mobiles/Mobiles"
import Footer from "./components/Footer/Footer"
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
        <HotDeals products={products.filter(product => product.old_price)} />
        <Ads images={bannerImages.slice(0, 2)} />
        <Electronics products={products.filter(product => product.category == "electronics")} />
        <Appliances products={products.filter(product => product.category == "appliances")} />
        <Ads images={bannerImages.slice(2, 5)} />
        <Mobiles products={products.filter(product => product.category == "mobiles")} />
      </Box>
      <Footer />
    </Box>
  )
}

export default App
