import React, { useContext, useEffect } from "react";
import { Logo } from "./Logo.jsx";
import './Header.scss'
import { useNavigate } from "react-router-dom";
import { MyContext } from "../utils/ContextProvider.jsx";

export const MyNavbar = () => {
    const navigate = useNavigate()

    const { setIsDarkMode, isDarkMode } = useContext(MyContext)



    const handlDarkModeClick = (e) => {
        if (e.target.checked) {
            setIsDarkMode(true)
        } else {
            setIsDarkMode(false)
        }
    }

    return (
        <>
            <nav className="myNavbar w-[100%] fixed px-[10rem] py-[0.1rem] z-50">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex gap-[2rem]">
                        <a href="" className={` font-titiSemibold text-[1.1rem] transition duration-500 hover:text-lightViolet ${isDarkMode ? 'text-veryLightGray' : `text-darkViolet`}`}>About me</a>
                        <a href="" className={`font-titiSemibold text-[1.1rem] transition duration-500 hover:text-lightViolet ${isDarkMode ? 'text-veryLightGray' : `text-darkViolet`}`}>Works 'coming soon :/'</a>
                    </div>
                    <div className="flex items-center gap-7">
                        <button onClick={() => navigate('/deployportfolio/contact')} className="text-lightViolet border-2 border-lightViolet  rounded-3xl px-[1.7rem] py-[0.6rem] font-titiSemibold text-[1.1rem] flex items-center gap-3 transition duration-500 hover:bg-lightViolet hover:text-white ">Say Hello</button>
                        <input checked={isDarkMode} onClick={(e) => handlDarkModeClick(e)} id="checkboxdarkmode" type="checkbox" class="theme-checkbox" />
                    </div>
                </div>

            </nav>
        </>
    )
}