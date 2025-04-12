import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout'
import App from './App'
import CategoryProducts from './pages/CategoryProducts'
import ProductsByGender from './pages/ProductsByGender'
import Auth from './pages/Auth/Auth'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import ProductPage from './pages/ProductPage/ProductPage'
import MainLayout from './MainLayout'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<MainLayout />}>
            <Route path='/' element={<Layout />}>
                <Route index element={<App />}></Route>
                <Route path='category/:categoryName' element={<CategoryProducts />}></Route>
                <Route path='products/gender/:gender' element={<ProductsByGender />}></Route>
                <Route path='product/:productId' element={<ProductPage />}></Route>
            </Route>
            <Route path='/auth' element={<Auth />}>
                <Route path='login' element={<Login />}></Route>
                <Route path='signup' element={<Signup />}></Route>
            </Route>
        </Route>
    )
)


