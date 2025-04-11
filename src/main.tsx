import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router.tsx'
import UserContextProvider from './context/UserContextProvider.tsx'
import CartContextProvider from './context/CartContext.tsx'
import { Slide, ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <UserContextProvider>
    <CartContextProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        position="top-right"
        autoClose={100000}
        hideProgressBar
        closeOnClick
        pauseOnFocusLoss
        draggable
        theme="light"
        transition={Slide}
        className={"toast"}
      />
    </CartContextProvider>
  </UserContextProvider>
)
