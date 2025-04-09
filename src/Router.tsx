import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout'
import App from './App'
import CategoryProducts from './pages/CategoryProducts'
import ProductsByGender from './pages/ProductsByGender'
import Login from './pages/Login'
import Auth from './pages/Auth'
import Signup from './pages/Signup'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Layout />}>
                <Route index element={<App />}></Route>
                <Route path='category/:categoryName' element={<CategoryProducts />}></Route>
                <Route path='products/:gender' element={<ProductsByGender />}></Route>
            </Route>
            <Route path='auth' element={<Auth />}>
                <Route path='login' element={<Login />}></Route>
                <Route path='signup' element={<Signup />}></Route>
            </Route>
        </Route>
    )
)


