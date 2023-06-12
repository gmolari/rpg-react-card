import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Context = createContext()

function UserProvider({children}){
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname ==  "/") navigate('/home')
        let aLocation = location.pathname.substring(1, location.length)
        document.title = capitalize(aLocation)
        function capitalize(text){
            let newText = text.charAt(0).toUpperCase() + text.slice(1)
            return newText
        }
    }, [location])

    return (
        <Context.Provider 
        value={
            {
                location,
                navigate
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