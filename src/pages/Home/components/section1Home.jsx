import { ImgSection1Home } from "../../../layouts/ImgSection1Home"
import img from "../../../assets/images/img.jpg"
import { Text1Section1Home } from "../../../layouts/Text1Section1Home"
import { motion, useAnimation, useInView } from "framer-motion"
import { useContext, useEffect, useRef } from "react"
import { MyContext } from "../../../utils/ContextProvider"

export const Section1Home = () => {

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
            <div className="flex flex-col items-center gap-[8rem] pt-[6rem]">
                <div>
                    <Text1Section1Home />

                    <motion.p className={`font-titiLight text-[2rem] text-center transition duration-1000 ${isDarkMode ? `text-veryLightGray` : `text-darkGray`}`}
                        ref={ref}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >I engineer elegantly simple solutions, finding joy in the art of coding</motion.p>
                </div>
                <div className="w-[15vw] ">
                    <motion.img
                        ref={ref}
                        variants={{
                            hidden: { opacity: 0, },
                            visible: { opacity: 1, }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src={img} alt="" className="rounded-full" />
                </div>
                <div>
                    <ImgSection1Home />
                </div>
            </div>
        </>
    )
}