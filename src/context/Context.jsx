import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useRaces from "../hooks/useRaces";


const Context = createContext()

function UserProvider({children}){
    const location = useLocation()
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({});

    const {races, setChangeRaces, setWhichRaces} = useRaces()

    function handleInput(e){
        setInputs((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value 
        }))
        console.log(inputs)
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

    return (
        <Context.Provider 
        value={
            {
                location,
                navigate,
                races,
                setWhichRaces,
                setChangeRaces,
                handleInput,
                inputs
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