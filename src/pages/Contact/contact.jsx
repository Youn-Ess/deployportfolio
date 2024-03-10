import { Logo } from "../../layouts/Logo"
import img from "../../assets/images/img.jpg"
import { HiOutlineXMark } from "react-icons/hi2";
import { IoMdRefresh } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { MyContext } from "../../utils/ContextProvider";
import { useContext, useRef } from "react";
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';



export const Contact = () => {


    const SERVICE_ID = "service_6vn9yed";
    const TEMPLATE_ID = "template_e2mxyk2";
    const PUBLIC_KEY = "LhR555qMst-2O3Or_";


    const name = useRef(``)
    const email = useRef(``)
    const message = useRef(``)

    const { isDarkMode, setIsDarkMode } = useContext(MyContext)

    const handlDarkModeClick = (e) => {
        if (e.target.checked) {
            setIsDarkMode(true)
        } else {
            setIsDarkMode(false)
        }
    }


    const navigate = useNavigate()

    const handleRefresh = () => {
        window.location.reload();
    };

    const handlFormSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()

    }

    return (
        <>

            <>
                <div className={`w-[100%] homepage ${isDarkMode ? `bg-black` : ``}`}>
                    <div className='w-[100%] h-[100vh] fixed'>
                        <div className='w-[100$] h-[100%] flex justify-center items-center'>
                            {/* <div className=" shapes-container w-[80%] h-[90%]">
                                <div className="shape-1 myBlur myOpacity"></div>
                                <div className="shape-2 myBlur myOpacity"></div>
                                <div className="shape-3 myBlur myOpacity"></div>
                                <div className="shape-4 myBlur myOpacity"></div>
                                <div className="shape-5 myBlur myOpacity"></div>
                                <div className="shape-6 myBlur myOpacity"></div>
                            </div> */}
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
                        <div className="border-b-2 border-lightViolet relative py-[0.5rem] px-[5rem]">
                            <div className="flex justify-between items-center">
                                <Logo />
                                <div className="flex gap-[2rem]">

                                    <IoMdRefresh onClick={handleRefresh} className="text-[1.7rem] text-lightViolet cursor-pointer" />
                                    <HiOutlineXMark onClick={() => navigate('/')} className="text-[1.7rem] text-lightViolet cursor-pointer" />
                                    <input checked={isDarkMode} onClick={(e) => handlDarkModeClick(e)} id="checkboxdarkmode" type="checkbox" class="theme-checkbox" />

                                </div>
                            </div>
                            <div className="absolute top-[3rem] left-1/2 transform -translate-x-1/2 ">
                                <img src={img} alt="" className="w-[10vw] rounded-full" />
                            </div>
                        </div>
                        <div className="px-[25rem] flex flex-col py-[8rem]">
                            <h1 className={`font-titiLight text-[2.5rem] text-center transition duration-1000  ${isDarkMode ? `text-white` : `text-darkViolet`} `}>Looking forward to learning about your project. Shall we begin?</h1>
                            <form className="px-[4rem] flex flex-col gap-[1rem]" onSubmit={handlFormSubmit}>
                                <div className="flex flex-col">
                                    <label htmlFor="from_name" className={`text-[1.3rem] font-titiLight transition duration-1000  ${isDarkMode ? `text-white ` : `text-darkViolet`} `}>Name</label>
                                    <input required name="from_name" id="from_name" ref={name} type="text" placeholder="Name" className={`text-[1.1rem] bg-transparent border rounded-[0.3rem] px-[1rem] py-[1rem]  placeholder:font-titiLight font-titiSemibold focus:outline-none focus:border-lightViolet transition duration-1000 ${isDarkMode ? `border-veryLightGray placeholder:text-veryLightGray text-white` : `border-darkGray placeholder:text-darkGray text-darkViolet`} `} />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="from_email" className={`text-[1.3rem] font-titiLight transition duration-1000 ${isDarkMode ? `text-white ` : `text-darkViolet`} `}>Email</label>
                                    <input required name="from_email" id="from_email" ref={email} type="email" placeholder="Email" className={`text-[1.1rem] bg-transparent border rounded-[0.3rem] px-[1rem] py-[1rem]  placeholder:font-titiLight font-titiSemibold focus:outline-none focus:border-lightViolet transition duration-1000 ${isDarkMode ? `border-veryLightGray placeholder:text-veryLightGray text-white` : `border-darkGray placeholder:text-darkGray text-darkViolet`} `} />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="message" className={`text-[1.3rem] font-titiLight transition duration-1000 ${isDarkMode ? `text-white ` : `text-darkViolet`} `}>Message</label>
                                    <textarea required name="message" id="message" ref={message} cols="30" rows="8" placeholder="Message" className={`text-[1.1rem] bg-transparent border rounded-[0.3rem] px-[1rem] py-[1rem]  placeholder:font-titiLight font-titiSemibold focus:outline-none focus:border-lightViolet transition duration-1000 ${isDarkMode ? `border-veryLightGray placeholder:text-veryLightGray text-white` : `border-darkGray placeholder:text-darkGray text-darkViolet`} `} />
                                </div>

                                <div className="flex justify-center">
                                    <button className="w-[30%] text-lightViolet border-2 border-lightViolet  rounded-3xl px-[1.7rem] py-[0.6rem] font-titiSemibold text-[1.1rem]  transition duration-500 hover:bg-lightViolet hover:text-white ">Submit</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}