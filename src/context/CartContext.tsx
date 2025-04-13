import { ReactNode, useEffect, useState } from "react"
import { cartContext } from "../hooks/useCart"
import { CartType } from "../types/CartType"
import { ProductType } from "../types/Product"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { setDoc, doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"
type CartContextProviderProps = {
    children: ReactNode
}
const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [carts, setCarts] = useState<CartType[]>([])
    const navigate = useNavigate()

    const createCart = (userId: string) => {
        const newCarts = [...carts, { products: [], userId: userId, cartId: userId }]
        setCarts(newCarts)
        sendToDB(newCarts)
    }

    const sendToDB = async (carts: CartType[]) => {
        await setDoc(doc(db, "carts", "mainCart"), {
            carts
        });
    }

    const addToCart = async (product: ProductType, userId: string) => {
        if (!userId) return navigate("/auth/login")
        if (checkInCart(userId, product.id)) return
        const newCarts = carts.map(cart => cart.userId == userId ? { ...cart, products: [...cart.products, { product: product, quantity: 1 }] } : cart)
        console.log(newCarts)
        setCarts(newCarts)
        sendToDB(newCarts).then(() =>
            toast.success("Added to cart! 🛒")
        )
    }

    const removeFromCart = (productId: number, userId: string) => {
        const newCarts = carts.map(cart => cart.cartId == userId ? { ...cart, products: cart.products.filter(product => product.product.id != productId) } : cart)
        setCarts(newCarts)
        localStorage.setItem("carts", JSON.stringify(newCarts))
    }

    const getUserCart = (userId: string) => carts.filter(cart => cart.userId == userId)[0]

    const loadCarts = async () => {
        try {
            const cartsDocRef = doc(db, "carts", "mainCart");
            const cartsDoc = await getDoc(cartsDocRef);
            if (cartsDoc.exists()) {
                const carts = cartsDoc.data();
                return { carts, fetchCartsError: null };
            } else {
                const fetchcartsError = "User Not Found";
                return { carts: null, fetchcartsError };
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            const fetchCartsError = error.message;
            return { carts: null, fetchCartsError };
        }
    }

    const checkInCart = (userId: string, productId: number) => {
        if (!userId) return false
        let found = false
        carts.map(cart => {
            if (cart.cartId == userId)
                cart.products.map(product => product.product.id == productId ? found = true : undefined)
        })
        return found
    }

    const changeQuantity = (value: string, productId: number, userId: string) => {
        const cart = carts.filter(cart => cart.userId == userId)[0]
        const newProducts = cart.products.map(product => product.product.id == productId ? { ...product, quantity: value == "+" ? product.quantity + 1 : product.quantity > 0 ? product.quantity - 1 : 0 } : product)
        const newCarts = carts.map(cart => cart.userId == userId ? { ...cart, products: newProducts } : cart)
        setCarts(newCarts)
        localStorage.setItem("carts", JSON.stringify(newCarts))
    }

    useEffect(() => {
        loadCarts().then(carts => {
            setCarts(carts.carts!.carts as CartType[] || [])
            console.log(carts.carts!.carts)
        })
    }, [])
    return (
        <cartContext.Provider value={{ carts, addToCart, getUserCart, createCart, checkInCart, removeFromCart, changeQuantity }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider
