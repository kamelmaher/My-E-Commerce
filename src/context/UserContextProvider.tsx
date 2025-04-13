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
    const [fetchUserLoading, setFetchUserLoading] = useState(true)
    const [user, setUser] = useState<UserType>({} as UserType)

    const getUser = async (id: string) => {
        const { user } = await getUserFromDb(id)
        setUser({ ...user, id: id } as UserType)
    }

    const getId = async (token: string) => {
        const decodedToken: { user_id: string } = await jwtDecode(token);
        const id = decodedToken.user_id
        return id
    }

    useEffect(() => {
        const token = getCookie("authToken")
        if (token) {
            getId(token).then(id => {
                getUser(id).then(() => {
                    setIsLogin(true)
                }).finally(() => {
                    setFetchUserLoading(false)
                })
            })
        } else {
            setFetchUserLoading(false)
        }
    }, [fetchUserLoading])

    return (
        <userContext.Provider value={{ isLogin, setIsLogin, user, setUser, fetchUserLoading, setFetchUserLoading }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider
