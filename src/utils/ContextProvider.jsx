import { createContext, useEffect, useState } from "react"
export const MyContext = createContext()

export const ContextProvider = ({ children }) => {



    const savedDarkMode = localStorage.getItem("isDarkMode") === "true";

    // Use the callback form of useState to ensure immediate state update
    const [isDarkMode, setIsDarkMode] = useState(() => savedDarkMode);

    // Update localStorage whenever isDarkMode changes
    useEffect(() => {
        localStorage.setItem("isDarkMode", isDarkMode);
    },);

    return (
        <>
            <MyContext.Provider value={{ isDarkMode, setIsDarkMode }}>
                {children}
            </MyContext.Provider>
        </>
    )
}