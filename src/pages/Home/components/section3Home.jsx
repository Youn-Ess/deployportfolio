import { useContext } from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../../utils/ContextProvider";


export const Section3Home = () => {

    const navigate = useNavigate()

    const { isDarkMode } = useContext(MyContext)
    return (
        <>

            <div className="relative flex flex-col items-center">
                <div className="w-[100%] flex flex-col items-center pt-[10rem] pb-[20rem] ">
                    <h1 className={`text-[2rem] font-titiBold text-center transition duration-1000 ${isDarkMode? `text-white` : `text-darkViolet`} `}>My Recent Work</h1>
                    <p className={`w-[55%] text-center text-[1.2rem] font-titiRegular transition duration-1000 ${isDarkMode? `text-veryLightGray` : `text-darkGray`} `}>coming soon</p>
                </div>
                <div className="w-[80%]  bg-darkViolet absolute top-[67vh] rounded-xl flex justify-between items-center px-[6.5rem] py-[3.5rem]">
                    <h1 className="text-[2.2rem] font-titiBold text-center text-white ">Start a project</h1>
                    <p className="w-[40%] text-center text-[1.2rem] font-titiRegular text-white">Interested in working together? Let's pick a time to chat. I'll cover the coffee.</p>
                    <button onClick={() => navigate('/contact')} className="text-white border-2 border-lightGreen rounded-3xl px-[1.7rem] py-[0.6rem] text-[1.1rem] flex items-center gap-3 hover:bg-lightGreen hover:text-darkViolet transition duration-500"><AiOutlineFileDone className="text-[1.5rem]" /> <p>Let's do this</p></button>
                </div>
            </div>
        </>
    )
}