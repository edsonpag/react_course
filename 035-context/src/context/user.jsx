import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {

    const [ user, setUser ] = useState({
        name: "Edson"
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(UserContext);
}