import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router.tsx'
import UserContextProvider from './context/UserContextProvider.tsx'
import CartContextProvider from './context/CartContext.tsx'

createRoot(document.getElementById('root')!).render(
  <UserContextProvider>
    <CartContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartContextProvider>
  </UserContextProvider>
)
