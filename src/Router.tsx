import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout'
import App from './App'
import CategoryProducts from './pages/CategoryProducts'
import ProductsByGender from './pages/ProductsByGender'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<App />}></Route>
            <Route path='category/:categoryName' element={<CategoryProducts />}></Route>
            <Route path='products/:gender' element={<ProductsByGender />}></Route>
        </Route>
    )
)


