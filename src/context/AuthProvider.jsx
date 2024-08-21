import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapid_api";

export const AuthContext = createContext()

export default function AuthProvider({children}){
    const [loading,setLoading] = useState(false)
    const [data, sestData] = useState([])
    const [value,setValue] = useState("New")

    useEffect(() => {
        fetchAlldata(value)
    }, [value])

    const fetchAlldata = (query) => {
        setLoading(true)
        fetchData(`search/?q=${query}`).then(({contents})=>{
            sestData(contents);
            setLoading(false);
        })
    }
    return (
        <AuthContext.Provider value={{loading, data, value, setValue}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>useContext(AuthContext)