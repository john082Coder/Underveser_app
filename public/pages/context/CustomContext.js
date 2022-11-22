import { useState, createContext, useEffect } from "react";

export const ModeContext = createContext();

export const MyContextProvider = (props) => {
    const [ account, setAccount ] = useState();
    return (
        <ModeContext.Provider 
            value={{
                account,
                setAccount
            }}
        >
            {props.children}
        </ModeContext.Provider>
    )   
}