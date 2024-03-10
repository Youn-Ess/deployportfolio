
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { Logo2 } from "./Logo2.jsx"
import { LuCopyright } from "react-icons/lu";
export const Footer = () => {
    return (
        <>
            <div className="w-[100%] bg-lightViolet  pt-[13rem] pb-[5rem] ">
                <div className="flex flex-col items-center gap-[2.5rem]">
                    <Logo2 />
                    <p className="text-center  text-[1.5rem] font-titiLight text-veryLightGray w-[35%]">Crafting code, mastering skills, and advancing through the world of web development every day.</p>
                    <div className="flex gap-[1.5rem]">
                        <FaLinkedinIn className="border-2 border-veryLightGray text-white text-[2.7rem] p-[0.55rem] rounded-full transition duration-300 hover:bg-white hover:text-lightViolet hover:border-white" />
                        <FiGithub className="border-2 border-veryLightGray text-white text-[2.7rem] p-[0.55rem] rounded-full transition duration-300 hover:bg-white hover:text-lightViolet hover:border-white" />
                        <FaInstagram className="border-2 border-veryLightGray text-white text-[2.7rem] p-[0.55rem] rounded-full transition duration-300 hover:bg-white hover:text-lightViolet hover:border-white" />
                    </div>

                    <div className="">
                        <p className="text-center  text-[0.9rem] font-titiLight text-veryLightGray m-0 flex items-center gap-1" >Sculpted by <span className="font-semibold">Youness,</span><LuCopyright /> a masterpiece in the making.</p>
                    </div>
                </div>
            </div>
        </>
    )
}