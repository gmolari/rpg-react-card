import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useRaces from "../hooks/useRaces";


const Context = createContext()

function UserProvider({children}){
    const location = useLocation()
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({});

    const {content, setChangeRaces, setWhichRaces, refetch} = useRaces()

    function handleInput(e){
        setInputs((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value 
        }))
    }

    useEffect(() => {
        if (location.pathname ==  "/") navigate('/home')
        let aLocation = location.pathname.substring(1, location.length)
        document.title = capitalize(aLocation)
        function capitalize(text){
            let newText = "D&D CARD: "+ text.charAt(0).toUpperCase() + text.slice(1)
            return newText
        }
    }, [location])

    return (
        <Context.Provider 
        value={
            {
                location,
                navigate,
                content,
                setWhichRaces,
                setChangeRaces,
                handleInput,
                inputs,
                setInputs,
                refetchContent: refetch
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