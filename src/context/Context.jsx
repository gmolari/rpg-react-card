import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../util/api";

const Context = createContext()

function UserProvider({children}){
    const location = useLocation()
    const navigate = useNavigate()
    const [races, setRaces] = useState()

    async function handleApi(setter){
        let value = await api.get('races')
        setter(value.data)
    }

    useEffect(() => {
        if (location.pathname ==  "/") navigate('/home')
        let aLocation = location.pathname.substring(1, location.length)
        document.title = capitalize(aLocation)
        function capitalize(text){
            let newText = text.charAt(0).toUpperCase() + text.slice(1)
            return newText
        }
    }, [location])

    useEffect(() => {
        handleApi(setRaces)
    }, [])

    return (
        <Context.Provider 
        value={
            {
                location,
                navigate,
                races
            }
        }>
            {children}
        </Context.Provider>
    )
}

export {
    UserProvider,
    Context
}