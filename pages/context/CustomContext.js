import { useState, createContext, useEffect } from "react";

export const ModeContext = createContext();

 const MyContextProvider = (props) => {
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
export default MyContextProvider;