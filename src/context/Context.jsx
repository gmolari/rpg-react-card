import { createContext } from "react";

const Context = createContext();

function UserProvider({children}){
    const alo = "ALO MUNDOR"

    return (
        <Context.Provider 
        value={
            {
                alo
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