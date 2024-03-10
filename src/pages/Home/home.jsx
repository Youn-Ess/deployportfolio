import './home.scss'
import { MyNavbar } from '../../layouts/Header'
import { Section1Home } from './components/section1Home'
import { Section2Home } from './components/section2Home'
import { Section3Home } from './components/section3Home'
import { Footer } from '../../layouts/Footer'
import { useContext } from 'react'
import { MyContext } from "../../utils/ContextProvider"
import { motion } from "framer-motion"


export const Home = () => {

    const { isDarkMode, setIsDarkMode } = useContext(MyContext)

    return (
        <>
            <div className={`w-[100%] homepage ${isDarkMode ? 'bg-black' : ``} `}>
                <div className='w-[100%] h-[100vh] fixed'>
                    <div className='w-[100$] h-[100%] flex justify-center items-center'>
                        <motion.div
                            className=" shapes-container w-[80%] h-[90%]"
                            variants={{
                                hidden: { rotate: 0 },
                                visible: { rotate: 360 }
                            }}

                            initial="hidden"
                            animate="visible"

                            transition={{ duration: 30, repeat: Infinity }}
                        >
                            <motion.div className="shape-1 myBlur myOpacity"
                                variants={{
                                    hidden: { x: 0 },
                                    visible: { x: 800 },
                                }}

                                initial="hidden"
                                animate="visible"

                                transition={{ duration: 27, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }}
                            ></motion.div>
                            <motion.div className="shape-2 myBlur myOpacity"
                                variants={{
                                    hidden: { x: 0, y: 0 },
                                    visible: { x: 800, y: -200 },
                                }}

                                initial="hidden"
                                animate="visible"

                                transition={{ duration: 27, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }}
                            ></motion.div>
                            <motion.div className="shape-3 myBlur myOpacity"

                                variants={{
                                    hidden: { x: 0, y: 0 },
                                    visible: { x: 150, y: 500 },
                                }}

                                initial="hidden"
                                animate="visible"

                                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }}
                            ></motion.div>
                            <motion.div className="shape-4 myBlur myOpacity"
                                animate={{
                                    x: [0, 500, 500, 0, 0],
                                    y: [0, 0, 500, 500, 0],
                                }}
                                transition={{ duration: 27, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                            ></motion.div>
                            <motion.div className="shape-5 myBlur myOpacity"
                                animate={{
                                    x: [0, 500, 500, 0, 0, 500],
                                    y: [0, 0, 500, 500, 0, 0],
                                }}
                                transition={{ duration: 27, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                            ></motion.div>
                            <motion.div className="shape-6 myBlur myOpacity"
                                variants={{
                                    hidden: { x: 0, y: 0 },
                                    visible: { x: -200, y: 500 },
                                }}

                                initial="hidden"
                                animate="visible"

                                transition={{ duration: 27, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }}
                            ></motion.div>
                        </motion.div>
                    </div>
                </div>
                <div className="relative">
                    <MyNavbar />
                    <div className='pt-[5.94rem]'>
                        <Section1Home />
                        <Section2Home />
                        <Section3Home />
                        <Footer />
                    </div>
                </div>
            </div >
        </>
    )
}
