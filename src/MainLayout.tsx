import { ToastContainer, Slide } from "react-toastify"
import CartContextProvider from "./context/CartContext"
import UserContextProvider from "./context/UserContextProvider"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <UserContextProvider>
            <CartContextProvider>
                <ToastContainer
                    position="top-right"
                    autoClose={1500}
                    hideProgressBar
                    closeOnClick
                    pauseOnFocusLoss
                    draggable
                    theme="light"
                    transition={Slide}
                    className={"toast"}
                />
                <Outlet />
            </CartContextProvider>
        </UserContextProvider>
    )
}

export default MainLayout
