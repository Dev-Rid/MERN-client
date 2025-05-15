import { useContext } from "react"
import { AuthContext } from "../components/context/AuthContext"

export const useWorkoutsContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error("useAuthContext must be used inside an AuthContextProvider")
    }

    return context
}