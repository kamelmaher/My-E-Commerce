import { ReactNode, useEffect, useState } from "react"
import { userContext } from "../hooks/useUser"
import { UserType } from "../types/User"
import { getCookie, getUserFromDb } from "../services/auth"
import { jwtDecode } from "jwt-decode"
type UserContextProviderPRops = {
    children: ReactNode
}

const UserContextProvider = ({ children }: UserContextProviderPRops) => {
    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState<UserType>({} as UserType)
    const [isLoading, setIsLoading] = useState(false)
    const getUser = async (id: string) => {
        const { user } = await getUserFromDb(id)
        setUser({ ...user, id: id } as UserType)
    }

    useEffect(() => {
        const token = getCookie("authToken")
        setIsLoading(true)
        if (token) {
            try {
                const decodedToken: { user_id: string } = jwtDecode(token);
                const id = decodedToken.user_id
                getUser(id)
                setIsLogin(true)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
    }, [isLogin])
    
    return (
        <userContext.Provider value={{ isLogin, setIsLogin, user, setUser, isLoading }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider
