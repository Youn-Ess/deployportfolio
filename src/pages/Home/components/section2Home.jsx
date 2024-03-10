import { IoCodeSlashOutline } from "react-icons/io5";
import { BsDatabaseSlash } from "react-icons/bs";
import { useContext, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { MyContext } from "../../../utils/ContextProvider";

export const Section2Home = () => {

    const { isDarkMode } = useContext(MyContext)

    const ref = useRef(null)

    const isInView = useInView(ref,)

    const mainControls = useAnimation()
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        } else {
            // Reset the animation when isInView is false
            mainControls.stop(); // Stop any ongoing animations
            mainControls.set("hidden"); // Set to the initial state (hidden)
        }
    }, [isInView, mainControls])

    return (
        <>
            <div className=" flex flex-col items-center relative pb-[80vh] ">
                <div className="w-[100%] flex flex-col items-center gap-[1.5rem] bg-lightViolet bg-opacity-40 pt-[10rem] pb-[20rem]">
                    <motion.h1 className={`text-[2rem] font-titiBold text-center transition duration-1000 ${isDarkMode ? `text-white` : `text-darkViolet`}`}
                        ref={ref}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >Hi, I'm Youness. Nice to meet you</motion.h1>
                    <motion.p className={`w-[55%] text-center text-[1.2rem] font-titiRegular transition duration-1000  ${isDarkMode ? `text-veryLightGray` : `text-darkGray`}`}
                        ref={ref}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >I'm a web developer with strong skills in backend technologies. I specialize in creating secure and efficient web applications, focusing on making sure everything runs smoothly on the technical side.</motion.p>
                </div>

                <div className={`w-[50%] bg-opacity-90 absolute top-[55vh] rounded-xl flex flex-col py-[5rem] px-[0.5rem] transition duration-1000 shadow-lg ${isDarkMode ? `bg-black` : `bg-white`}`}>
                    <div className="flex">
                        <div className="w-[50%] border-r border-b pb-[1rem] flex flex-col items-center gap-[1.5rem]">
                            <div className="flex flex-col items-center gap-[1.2rem]">
                                <IoCodeSlashOutline className="text-[5rem] bg-lightGreen rounded-full p-[0.7rem]" />
                                <h1 className={`font-titiSemibold text-[1.5rem] transition duration-1000  ${isDarkMode ? `text-white` : `text-darkViolet`}`}>Frontend Developer</h1>
                                <p className={`text-center text-[1.1rem]  px-[1.4rem] font-titiLight transition duration-1000 ${isDarkMode ? `text-veryLightGray` : `text-darkGray`}`}>I take pleasure in crafting visually engaging user interfaces and turning design concepts into vibrant, interactive experiences in the browser.</p>
                            </div>
                            <div>
                                <h1 className="text-lightViolet font-titiRegular text-[1.2rem] ">Languages I speak:</h1>
                                <p className={`text-center text-[0.9rem] font-titiLight ${isDarkMode ? `text-veryLightGray` : `text-darkGray`}`}>HTML, CSS, Sass, JS,  </p>
                            </div>
                            <div>
                                <h1 className="text-lightViolet font-titiRegular text-[1.2rem]">Frame work:</h1>
                                <p className={`text-center text-[0.9rem] font-titiLight ${isDarkMode ? `text-veryLightGray` : `text-darkGray`}`}>ReactJs</p>
                            </div>
                        </div>
                        <div className="w-[50%] border-l border-b pb-[1rem] flex flex-col items-center gap-[1.5rem]">
                            <div className="flex flex-col items-center gap-[1.2rem]">
                                <BsDatabaseSlash className="text-[5rem] bg-lightGreen rounded-full p-[0.7rem]" />
                                <h1 className={`font-titiSemibold text-[1.5rem] transition duration-1000  ${isDarkMode ? `text-white` : `text-darkViolet`}`}>Backend Developer</h1>
                                <p className={`text-center text-[1.1rem] px-[1.4rem] transition duration-1000 font-titiLight ${isDarkMode ? `text-veryLightGray` : `text-darkGray`}`}>My satisfaction comes from building robust server-side logic and databases, transforming abstract concepts into fully functional and efficient web applications.</p>
                            </div>
                            <div>
                                <h1 className="text-lightViolet font-titiRegular text-[1.2rem]">Languages I speak:</h1>
                                <p className={`text-center text-[0.9rem] font-titiLight transition duration-1000 ${isDarkMode ? `text-veryLightGray` : `text-darkGray`}`}>PHP, C#, JAVA</p>
                            </div>
                            <div>
                                <h1 className="text-lightViolet font-titiRegular text-[1.2rem]">Frame work:</h1>
                                <p className={`text-center text-[0.9rem] font-titiLight transition duration-1000 ${isDarkMode ? `text-veryLightGray` : `text-darkGray`}`}>Laravel</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center pt-[2rem]">
                        <h1 className="text-lightViolet font-titiRegular text-[1.2rem] ">Dev Tools:</h1>
                        <div>
                            <p className={`text-center text-[0.9rem] font-titiLight transition duration-1000 ${isDarkMode ? `text-veryLightGray` : `text-darkGray`}`}>Bootstrap</p>
                            <p className={`text-center text-[0.9rem] font-titiLight transition duration-1000 ${isDarkMode ? `text-veryLightGray` : `text-darkGray`}`}>tailwind</p>
                            <p className={`text-center text-[0.9rem] font-titiLight transition duration-1000 ${isDarkMode ? `text-veryLightGray` : `text-darkGray`}`}>Git</p>
                            <p className={`text-center text-[0.9rem] font-titiLight transition duration-1000 ${isDarkMode ? `text-veryLightGray` : `text-darkGray`}`}>Github</p>
                            <p className={`text-center text-[0.9rem] font-titiLight transition duration-1000 ${isDarkMode ? `text-veryLightGray` : `text-darkGray`}`}>VSCode</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}