import { ReactNode, useEffect, useState } from "react"
import { userContext } from "../hooks/useUser"
import { getUserFromDb } from "../services/auth"
import { UserType } from "../types/User"
type UserContextProviderPRops = {
    children: ReactNode
}
const UserContextProvider = ({ children }: UserContextProviderPRops) => {
    const [isLogin, setIsLogin] = useState(false)
    const [id, setId] = useState("")
    const [user, setUser] = useState<UserType>({} as UserType)
    useEffect(() => {

        const fetchUser = async () => {
            const { user: fetchedUser } = await getUserFromDb(id)
            setUser(fetchedUser as UserType)
        }
        fetchUser()
    }, [id])
    return (
        <userContext.Provider value={{ isLogin, setIsLogin, id, setId, user }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider
