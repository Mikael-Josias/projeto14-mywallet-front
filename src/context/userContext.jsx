import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({children}){
    const [userData, setUserData] = useState({
        name: "",
        token: "",
    });

    return (
        <UserContext.Provider value={{userData, setUserData}}>
            {children}
        </UserContext.Provider>
    );
}