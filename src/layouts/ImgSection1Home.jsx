import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"



export const ImgSection1Home = () => {

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
            <motion.svg

                ref={ref}

                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.8, ease: "easeOut" }}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 461" width="900" height="420" >
                <g>
                    <path
                        fill="#7510F7"
                        d="M696 277.29s10-178-141-227-227-13-275 33-64 76-119 82-106 16-132 83 7 120 57 153 108-2 154 19 75 56 169 60 97-23 145-65 133 2 142-138z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M696 277.29s10-178-141-227-227-13-275 33-64 76-119 82-106 16-132 83 7 120 57 153 108-2 154 19 75 56 169 60 97-23 145-65 133 2 142-138z"
                        opacity="0.7"
                    ></path>
                </g>
                <g>
                    <path
                        fill="#263238"
                        d="M600.09 292.26c3.73 1.62 12.83 1.42 12.84 1.42s-2-6-2.13-6.32c-2-4.18-8.32-11.08-13.46-10.39a6.15 6.15 0 00-4.93 7.7c.86 3.56 4.51 6.2 7.68 7.59z"
                    ></path>
                    <path
                        fill="#263238"
                        d="M603.24 318.63c3.86.57 12-1.79 12.63-2a108.6 108.6 0 004.93 13.64c1.11 2.58 2.32 5.16 3.56 7.72-.74-1.09-1.41-2.05-1.52-2.18-3-3.5-10.94-8.49-15.72-6.46a6.14 6.14 0 00-2.72 8.72c1.76 3.21 6 4.8 9.41 5.3s10.44-1.37 12.28-1.89c.49 1 1 2 1.46 2.94 2.35 4.69 4.72 9.35 6.9 14 .77 1.64 1.47 3.28 2.17 4.92-.66-1-1.22-1.77-1.32-1.89-3-3.5-10.95-8.49-15.72-6.46a6.14 6.14 0 00-2.72 8.72c1.76 3.21 6 4.8 9.41 5.3s9.76-1.19 12-1.8c.67 1.7 1.34 3.41 1.92 5.08.36 1.16.8 2.25 1.1 3.42s.64 2.32 1 3.46c.53 2.21 1.1 4.5 1.56 6.67.33 1.51.62 3 .92 4.41-.75-1.64-2.28-4.81-2.43-5.06-2.47-3.93-9.54-10-14.57-8.77a6.13 6.13 0 00-4 8.21c1.25 3.43 5.19 5.64 8.49 6.65 3.65 1.12 11.71.1 12.72 0 .48 2.41.93 4.75 1.32 7 .86 4.9 1.51 9.3 2 13h3.4c-.59-3.85-1.37-8.44-2.39-13.59-.48-2.45-1.05-5.05-1.65-7.72a68.82 68.82 0 007.09-3.34c2.66 2.87 9.46 6.24 10.34 6.67-.92 2.27-1.84 4.48-2.75 6.55-1.88 4.33-3.67 8.17-5.24 11.43h3.67c1.36-3 2.85-6.44 4.4-10.24.95-2.3 1.92-4.79 2.89-7.35 1 .2 9 1.82 12.68 1 3.38-.76 7.47-2.67 9-6a6.15 6.15 0 00-3.39-8.49c-4.92-1.65-12.42 3.93-15.17 7.66-.17.22-1.66 2.8-2.58 4.45.39-1 .79-2.06 1.18-3.15.78-2.14 1.5-4.29 2.28-6.61l1-3.44c.37-1.14.61-2.39.93-3.59.66-2.81 1.2-5.69 1.69-8.6 1.87.69 8.56 3 12 2.77s7.78-1.51 9.78-4.58a6.14 6.14 0 00-2.06-8.9c-4.61-2.38-12.88 2-16.16 5.27-.21.21-2.3 2.82-3.42 4.27.27-1.75.56-3.5.78-5.28.64-5.14 1.12-10.37 1.63-15.58.15-1.6.33-3.19.5-4.78.66.25 8.56 3.19 12.44 2.92 3.45-.24 7.78-1.51 9.78-4.58a6.14 6.14 0 00-2.07-8.9c-4.61-2.38-12.87 2-16.15 5.27-.25.25-3.26 4-4 5 .37-3.5.77-7 1.3-10.41a108.93 108.93 0 013-13.7c.31.12 8.54 3.22 12.52 2.94 3.45-.24 7.78-1.51 9.78-4.58a6.15 6.15 0 00-2.07-8.9c-4.61-2.38-12.87 2-16.16 5.27-.25.26-3.49 4.31-4 5.08.08-.26.13-.54.21-.79a79.58 79.58 0 015.42-13c1.18-2.31 2.44-4.45 3.71-6.5 1.47.73 8.24 4 11.85 4.16s7.9-.64 10.22-3.47a6.15 6.15 0 00-1.07-9.08c-4.32-2.87-13 .58-16.64 3.47-.2.16-2 2-3.33 3.32.58-.92 1.17-1.88 1.75-2.75 2.17-3.27 4.36-6.13 6.32-8.64 1.12-1.42 2.17-2.69 3.16-3.86 1.82 0 9.16-.25 12.37-1.76s6.71-4.21 7.47-7.8a6.13 6.13 0 00-5.13-7.55c-5.16-.56-11.29 6.51-13.17 10.74-.16.37-2.05 6.38-2 6.38h.11c-1 1.1-2 2.3-3.11 3.64-2 2.48-4.28 5.29-6.53 8.53a110.24 110.24 0 00-6.71 10.77 80.48 80.48 0 00-5.78 13v.17c0-1.52 0-5.77-.08-6.1-.59-4.59-4.44-13.12-9.55-14.06a6.14 6.14 0 00-7.08 5.77c-.29 3.65 2.35 7.3 4.93 9.61 2.91 2.6 11 5.11 11.63 5.31a108.3 108.3 0 00-3.41 14.1c-.49 2.77-.91 5.58-1.29 8.4 0-1.31 0-2.49-.06-2.65-.6-4.59-4.45-13.12-9.55-14.06a6.13 6.13 0 00-7.08 5.77c-.3 3.65 2.35 7.3 4.93 9.61s9.46 4.62 11.28 5.2c-.14 1.09-.28 2.17-.41 3.25-.62 5.21-1.22 10.41-2 15.49-.26 1.79-.59 3.54-.9 5.3 0-1.17 0-2.15-.07-2.3-.59-4.6-4.44-13.12-9.54-14.07a6.15 6.15 0 00-7.09 5.78c-.29 3.65 2.35 7.3 4.93 9.61s8.8 4.39 11 5.09c-.38 1.79-.76 3.58-1.2 5.3-.34 1.16-.57 2.31-1 3.46s-.74 2.28-1.1 3.41c-.78 2.14-1.57 4.36-2.39 6.43-.55 1.44-1.11 2.81-1.66 4.18.28-1.77.76-5.27.76-5.57a23.87 23.87 0 00-3.22-11.58 7.71 7.71 0 00-.09-1.36 6.14 6.14 0 00-7.51-5.21c-5 1.34-8.19 10.14-8.42 14.76 0 .28.16 3.25.3 5.13-.25-1.09-.48-2.15-.75-3.27-.53-2.22-1.12-4.41-1.75-6.78-.34-1.13-.68-2.28-1-3.43s-.81-2.33-1.22-3.51c-1-2.71-2.12-5.41-3.33-8.1 1.94-.47 8.81-2.22 11.57-4.33s5.65-5.55 5.63-9.22a6.14 6.14 0 00-6.63-6.28c-5.16.56-9.64 8.77-10.57 13.31-.06.28-.37 3.61-.5 5.45-.74-1.62-1.46-3.23-2.26-4.84-2.31-4.64-4.79-9.27-7.24-13.89-.75-1.42-1.48-2.84-2.22-4.26.69-.16 8.9-2.06 12-4.43 2.74-2.11 5.66-5.56 5.63-9.22a6.14 6.14 0 00-6.63-6.28c-5.16.56-9.63 8.77-10.57 13.31-.07.34-.5 5.14-.55 6.36-1.63-3.13-3.22-6.26-4.66-9.41a108.49 108.49 0 01-5.06-13.07c.32-.08 8.89-2 12.06-4.45 2.74-2.11 5.65-5.56 5.63-9.22a6.14 6.14 0 00-6.63-6.28c-5.16.56-9.64 8.77-10.57 13.31-.08.36-.54 5.51-.55 6.45-.09-.25-.2-.51-.27-.77a78.79 78.79 0 01-2.63-13.81c-.29-2.58-.42-5.06-.49-7.47 1.63-.2 9.09-1.19 12.18-3.06s6.23-4.9 6.6-8.54a6.14 6.14 0 00-5.89-7c-5.19 0-10.54 7.67-12 12.07-.08.24-.6 2.77-.95 4.61 0-1.09-.06-2.21-.05-3.26 0-3.92.25-7.51.5-10.69.15-1.81.33-3.44.51-5 1.5-1 7.5-5.27 9.34-8.3s3.28-7.22 1.93-10.62a6.13 6.13 0 00-8.45-3.47c-4.61 2.38-5.82 11.65-5.06 16.22.07.4 1.81 6.45 1.89 6.4l.09-.06c-.2 1.46-.4 3-.59 4.75-.31 3.18-.64 6.78-.73 10.72a111 111 0 00.3 12.72 79.36 79.36 0 002.36 14c0 .05 0 .11.05.16-.82-1.28-3.22-4.79-3.43-5-3-3.5-10.95-8.49-15.72-6.46a6.14 6.14 0 00-2.72 8.72c1.71 3.27 5.93 4.85 9.36 5.35z"
                    ></path>
                    <path
                        fill="#263238"
                        d="M692.19 294.26c.08.05 1.66-6.05 1.71-6.45.64-4.58-.82-13.82-5.49-16.08a6.13 6.13 0 00-8.35 3.7c-1.26 3.44.33 7.66 2.21 10.57 2.21 3.41 9.92 8.26 9.92 8.26z"
                    ></path>
                    <path
                        fill="#fff"
                        stroke="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M680.4 460.5L630.63 460.5 624.41 405.22 686.62 405.22 680.4 460.5z"
                    ></path>
                    <path
                        fill="#263238"
                        d="M625.55 415.35L626.15 420.71 684.88 420.71 685.48 415.35 625.55 415.35z"
                    ></path>
                    <path
                        fill="#263238"
                        d="M683.55 432.49L684.15 427.13 626.87 427.13 627.48 432.49 683.55 432.49z"
                    ></path>
                </g>
                <g>
                    <path
                        fill="#263238"
                        stroke="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M391.04 337.85H421.26V459.78000000000003H391.04z"
                    ></path>
                    <path
                        fill="#263238"
                        stroke="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M223.12 136.72H604.54V368.07H223.12z"
                    ></path>
                    <path
                        fill="#7510F7"
                        stroke="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M215.44 136.72H596.86V368.07H215.44z"
                    ></path>
                    <path
                        fill="#fff"
                        stroke="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M229.18 145.05H583.11V359.73H229.18z"
                    ></path>
                    <path
                        fill="#fff"
                        stroke="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M229.18 346.81H583.11V359.74H229.18z"
                    ></path>
                    <path
                        fill="#263238"
                        stroke="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M407.8 446.1L295.75 453.34 295.75 460.64 516.55 460.64 516.55 453.34 407.8 446.1z"
                    ></path>
                    <path
                        fill="#fff"
                        stroke="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M229.18 145.05H583.11V359.73H229.18z"
                    ></path>
                    <path
                        fill="#fff"
                        stroke="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M405.08 156.71H575.74V205.06H405.08z"
                    ></path>
                    <path
                        fill="#fff"
                        stroke="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M467.45 216.64H575.06V280.65999999999997H467.45z"
                    ></path>
                    <path
                        fill="#263238"
                        stroke="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M467.45 280.66L504.91 250.69 520.57 262.27 553.26 237.07 574.37 257.5 574.37 280.66 467.45 280.66z"
                    ></path>
                    <path
                        fill="#263238"
                        stroke="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M493.33 233a7.49 7.49 0 11-7.49-7.5 7.5 7.5 0 017.49 7.5z"
                    ></path>
                    <path
                        fill="#fff"
                        stroke="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M467.45 289.51H575.06V353.53H467.45z"
                    ></path>
                    <path
                        fill="#263238"
                        stroke="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M467.45 353.53L504.91 323.56 520.57 335.14 553.26 309.94 574.37 330.38 574.37 353.53 467.45 353.53z"
                    ></path>
                    <path
                        fill="#263238"
                        stroke="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M493.33 305.86a7.49 7.49 0 11-7.49-7.49 7.5 7.5 0 017.49 7.49z"
                    ></path>
                    <path
                        fill="#263238"
                        d="M413.91 320.57l-4.19-25.72h3l2.76 18.48 3.45-18.33h2.54l3.53 18.43 2.7-18.58h2.93l-4.13 25.72h-2.61l-3.59-19.05-3.62 19.05z"
                    ></path>
                    <path
                        fill="none"
                        stroke="#263238"
                        strokeMiterlimit="10"
                        d="M434.49 296.41L459.65 296.41"
                    ></path>
                    <path
                        fill="none"
                        stroke="#263238"
                        strokeMiterlimit="10"
                        d="M434.49 303.35L459.65 303.35"
                    ></path>
                    <path
                        fill="none"
                        stroke="#263238"
                        strokeMiterlimit="10"
                        d="M434.49 310.29L459.65 310.29"
                    ></path>
                    <path
                        fill="none"
                        stroke="#263238"
                        strokeMiterlimit="10"
                        d="M434.49 317.23L459.65 317.23"
                    ></path>
                    <path
                        fill="none"
                        stroke="#263238"
                        strokeMiterlimit="10"
                        d="M434.49 324.17L459.65 324.17"
                    ></path>
                    <path
                        fill="none"
                        stroke="#263238"
                        strokeMiterlimit="10"
                        d="M434.49 331.11L459.65 331.11"
                    ></path>
                    <path
                        fill="none"
                        stroke="#263238"
                        strokeMiterlimit="10"
                        d="M434.49 338.05L459.65 338.05"
                    ></path>
                    <path
                        fill="none"
                        stroke="#263238"
                        strokeMiterlimit="10"
                        d="M434.49 344.99L459.65 344.99"
                    ></path>
                    <path
                        fill="none"
                        stroke="#263238"
                        strokeMiterlimit="10"
                        d="M434.49 351.93L459.65 351.93"
                    ></path>
                    <path
                        fill="#263238"
                        stroke="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M419.47 217.66a34.55 34.55 0 00-19.3 5.86v-78.47h-171v214.68h171v-78.46a34.73 34.73 0 1019.3-63.61z"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M246.97 177.82L323.93 177.82"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M246.97 200.85L287.15 200.85"
                    ></path>
                    <path
                        fill="none"
                        stroke="#7510F7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M246.97 188.18L284.43 188.18"
                    ></path>
                    <path
                        fill="none"
                        stroke="#7510F7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M292.6 188.18L312.35 188.18"
                    ></path>
                    <path
                        fill="none"
                        stroke="#7510F7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M323.93 188.18L343.68 188.18"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M246.97 210.64L284.43 210.64"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M292.6 210.64L312.35 210.64"
                    ></path>
                    <path
                        fill="none"
                        stroke="#7510F7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M323.93 210.64L343.68 210.64"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M246.97 233.09L284.43 233.09"
                    ></path>
                    <path
                        fill="none"
                        stroke="#7510F7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M292.6 233.09L312.35 233.09"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M323.93 233.09L343.68 233.09"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M270.12 242.88L298.61 242.88"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M304.83 242.88L319.85 242.88"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M328.65 242.88L343.68 242.88"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M270.12 254.97L298.61 254.97"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M304.83 254.97L319.85 254.97"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M328.65 254.97L343.68 254.97"
                    ></path>
                    <path
                        fill="none"
                        stroke="#7510F7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M246.97 268.21L323.93 268.21"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M246.97 291.24L287.15 291.24"
                    ></path>
                    <path
                        fill="none"
                        stroke="#7510F7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M246.97 278.57L284.43 278.57"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M292.6 278.57L312.35 278.57"
                    ></path>
                    <path
                        fill="none"
                        stroke="#7510F7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M323.93 278.57L343.68 278.57"
                    ></path>
                    <path
                        fill="none"
                        stroke="#7510F7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M246.97 301.03L284.43 301.03"
                    ></path>
                    <path
                        fill="none"
                        stroke="#7510F7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M292.6 301.03L312.35 301.03"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M323.93 301.03L343.68 301.03"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M246.97 323.48L284.43 323.48"
                    ></path>
                    <path
                        fill="none"
                        stroke="#7510F7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M292.6 323.48L312.35 323.48"
                    ></path>
                    <path
                        fill="none"
                        stroke="#7510F7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M323.93 323.48L343.68 323.48"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M270.12 333.27L298.61 333.27"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M304.83 333.27L319.85 333.27"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M328.65 333.27L343.68 333.27"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M270.12 345.36L298.61 345.36"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M304.83 345.36L319.85 345.36"
                    ></path>
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M328.65 345.36L343.68 345.36"
                    ></path>
                    <path
                        fill="#fff"
                        stroke="#fff"
                        strokeMiterlimit="10"
                        d="M249.07 164l7.23-3.73v1.08l-6.09 3.06v0l6.09 3.05v1.08l-7.23-3.73zM260.63 169.2l4.37-11.3h1l-4.36 11.3zM277.57 164.87l-7.23 3.71v-1.08l6.14-3.05v0l-6.14-3.06v-1.08l7.23 3.71z"
                    ></path>
                </g>
                <g stroke="#263238">
                    <path
                        fill="none"
                        strokeDasharray="5"
                        strokeMiterlimit="10"
                        d="M352.72 95.81L322.37 141.83"
                    ></path>
                    <path
                        fill="#7510F7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M401 71.27V60.82l-10.4-1.16a25.39 25.39 0 00-2.6-6.22l6.59-8.25-7.39-7.39-8.2 6.57a25 25 0 00-6.2-2.6l-1.17-10.49h-10.42l-1.16 10.44a25 25 0 00-6.22 2.56l-8.24-6.59-7.39 7.39 6.56 8.21a25 25 0 00-2.6 6.2l-10.48 1.17v10.45l10.43 1.16a25.39 25.39 0 002.56 6.22l-6.59 8.24 7.39 7.39 8.21-6.56a25 25 0 006.2 2.6l1.17 10.48h10.45l1.16-10.43a25.39 25.39 0 006.22-2.56l8.24 6.59 7.39-7.39-6.51-8.21a25 25 0 002.6-6.2zm-34.68 7.17A12.48 12.48 0 11378.83 66a12.48 12.48 0 01-12.48 12.44z"
                    ></path>
                    <path
                        fill="#263238"
                        strokeMiterlimit="10"
                        d="M442.11 50.29L441 43.37l-7 .39a16.52 16.52 0 00-2.38-3.83l3.38-6.19-5.71-4.08-4.71 5.26a16.34 16.34 0 00-4.39-1l-1.94-6.82-6.92 1.16.39 7a16.79 16.79 0 00-3.84 2.38l-6.18-3.45-4.08 5.71 5.26 4.71a16.34 16.34 0 00-1 4.39L395 51l1.16 6.92 7-.39a16.79 16.79 0 002.38 3.84l-3.45 6.18 5.71 4.08 4.71-5.26a16.34 16.34 0 004.39 1l1.94 6.82 6.97-1.19-.39-7a16.52 16.52 0 003.83-2.38l6.19 3.38 4.08-5.71-5.26-4.71a16.34 16.34 0 001-4.39zm-22.17 8.59a8.37 8.37 0 116.88-9.64 8.38 8.38 0 01-6.88 9.64z"
                    ></path>
                </g>
                <g>
                    <path
                        fill="none"
                        stroke="#263238"
                        strokeMiterlimit="10"
                        d="M263.56 96.29L264.05 98.75"
                    ></path>
                    <path
                        fill="none"
                        stroke="#263238"
                        strokeDasharray="4.701129913330078,4.701129913330078"
                        strokeMiterlimit="10"
                        d="M264.97 103.36L271.84 137.94"
                    ></path>
                    <path
                        fill="none"
                        stroke="#263238"
                        strokeMiterlimit="10"
                        d="M272.3 140.24L272.79 142.7"
                    ></path>
                    <path
                        fill="#7510F7"
                        stroke="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M270.6 39.43H284.72V92H270.6z"
                        transform="rotate(180 277.66 65.715)"
                    ></path>
                    <path
                        fill="#263238"
                        stroke="#263238"
                        strokeMiterlimit="10"
                        d="M251.77 51.2H265.89V92H251.77z"
                        transform="rotate(180 258.83 71.6)"
                    ></path>
                    <path
                        fill="#7510F7"
                        stroke="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M232.94 60.62H247.06V92H232.94z"
                        transform="rotate(180 240.005 76.31)"
                    ></path>
                    <path
                        fill="#263238"
                        stroke="#263238"
                        strokeMiterlimit="10"
                        d="M214.12 68.46H228.24V92H214.12z"
                        transform="rotate(180 221.175 80.23)"
                    ></path>
                    <path
                        fill="#263238"
                        d="M220.72 64.99L219.34 63.18 233.78 52.19 240.94 54.58 252.76 41.85 259.71 43.97 272.32 29.52 277.66 32.97 283.2 29.05 284.52 30.91 277.72 35.72 272.74 32.5 260.46 46.57 253.46 44.44 241.61 57.2 234.2 54.73 220.72 64.99z"
                    ></path>
                    <path
                        fill="#263238"
                        d="M285.67 35.23L290.13 25.55 279.51 26.53 285.67 35.23z"
                    ></path>
                </g>
                <g stroke="#263238">
                    <path
                        fill="none"
                        strokeMiterlimit="10"
                        d="M152.87 94.43L154.95 95.81"
                    ></path>
                    <path
                        fill="none"
                        strokeDasharray="5.012269973754883,5.012269973754883"
                        strokeMiterlimit="10"
                        d="M159.13 98.57L223.94 141.42"
                    ></path>
                    <path
                        fill="none"
                        strokeMiterlimit="10"
                        d="M226.03 142.8L228.11 144.18"
                    ></path>
                    <path
                        fill="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M85.5 51.55h72.6a6.38 6.38 0 016.38 6.38v49.65h0-85.35 0V57.92a6.38 6.38 0 016.37-6.37z"
                    ></path>
                    <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M100.66 74.06L141.09 74.06"
                    ></path>
                    <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M100.66 80.59L141.09 80.59"
                    ></path>
                    <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M100.66 87.11L141.09 87.11"
                    ></path>
                    <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M100.66 93.63L141.09 93.63"
                    ></path>
                    <path
                        fill="#7510F7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M164.48 60.39v-3.62a5.22 5.22 0 00-5.22-5.22H84.34a5.21 5.21 0 00-5.21 5.22v3.62z"
                    ></path>
                    <path
                        fill="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M149.88 56.2a1.32 1.32 0 10-1.31 1.32 1.32 1.32 0 001.31-1.32zM155.15 56.2a1.32 1.32 0 10-1.32 1.32 1.32 1.32 0 001.32-1.32zM160.42 56.2a1.32 1.32 0 10-1.32 1.32 1.32 1.32 0 001.32-1.32z"
                    ></path>
                    <path
                        fill="#263238"
                        strokeLinejoin="round"
                        d="M68.3 119.49h0a3.31 3.31 0 01-.38-4.72l24-27.51 3.66 3L73 119a3.3 3.3 0 01-4.7.49z"
                    ></path>
                    <path
                        fill="#fff"
                        strokeLinejoin="round"
                        d="M85.52 94.58l-17.6 20.19A3.3 3.3 0 1073 119l16.65-21.18z"
                    ></path>
                    <path
                        fill="#263238"
                        strokeLinejoin="round"
                        d="M111.89 66.85a15.12 15.12 0 102 21.29 15.12 15.12 0 00-2-21.29zM94 88.46a12.94 12.94 0 1118.22-1.71A12.94 12.94 0 0194 88.46z"
                    ></path>
                </g>
                <g stroke="#263238">
                    <path
                        fill="none"
                        strokeMiterlimit="10"
                        d="M123.01 213.21L125.51 213.21"
                    ></path>
                    <path
                        fill="none"
                        strokeDasharray="5.010250091552734,5.010250091552734"
                        strokeMiterlimit="10"
                        d="M130.53 213.21L218.2 213.21"
                    ></path>
                    <path
                        fill="none"
                        strokeMiterlimit="10"
                        d="M220.71 213.21L223.21 213.21"
                    ></path>
                    <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M81.88 176L138.41 176"
                    ></path>
                    <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M110.15 203.85L110.15 176"
                    ></path>
                    <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M65.35 182.93L65.35 218.16"
                    ></path>
                    <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M119.75 221.86L170.94 221.86 170.94 252.82"
                    ></path>
                    <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M138.41 222.39L138.41 252.26"
                    ></path>
                    <path
                        fill="#263238"
                        strokeMiterlimit="10"
                        d="M55.21 164.26H92.00999999999999V189.32999999999998H55.21z"
                    ></path>
                    <path
                        fill="#7510F7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M124.81 164.26H161.61V189.32999999999998H124.81z"
                    ></path>
                    <path
                        fill="#7510F7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M126.94 244.79H150.51999999999998V260.84999999999997H126.94z"
                    ></path>
                    <path
                        fill="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M54.95 210.13H78.53V226.19H54.95z"
                    ></path>
                    <path
                        fill="#263238"
                        strokeMiterlimit="10"
                        d="M157.88 244.79H181.45999999999998V260.84999999999997H157.88z"
                    ></path>
                    <path
                        fill="#7510F7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M97.03 209.28H123.26V235.51H97.03z"
                        transform="rotate(-45 110.14 222.398)"
                    ></path>
                </g>
                <g stroke="#263238">
                    <path
                        fill="none"
                        strokeMiterlimit="10"
                        d="M178.36 331.99L180.73 331.18"
                    ></path>
                    <path
                        fill="none"
                        strokeDasharray="5.01609992980957,5.01609992980957"
                        strokeMiterlimit="10"
                        d="M185.48 329.56L221.08 317.41"
                    ></path>
                    <path
                        fill="none"
                        strokeMiterlimit="10"
                        d="M223.45 316.6L225.82 315.79"
                    ></path>
                    <path
                        fill="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M60.04 316.44H172.75V342.90999999999997H60.04z"
                    ></path>
                    <path
                        fill="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M113.46 349.25H172.37V384.3H113.46z"
                    ></path>
                    <path
                        fill="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M113.46 384.3L133.97 367.9 142.54 374.24 160.44 360.44 172 371.63 172 384.3 113.46 384.3z"
                    ></path>
                    <circle
                        cx="123.53"
                        cy="358.2"
                        r="4.1"
                        fill="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></circle>
                    <path
                        fill="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M113.46 389.15H172.37V424.2H113.46z"
                    ></path>
                    <path
                        fill="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M113.46 424.2L133.97 407.79 142.54 414.13 160.44 400.33 172 411.52 172 424.2 113.46 424.2z"
                    ></path>
                    <circle
                        cx="123.53"
                        cy="398.1"
                        r="4.1"
                        fill="#263238"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></circle>
                    <path
                        fill="none"
                        strokeMiterlimit="10"
                        d="M61.75 351.89L106.53 351.89"
                    ></path>
                    <path
                        fill="none"
                        strokeMiterlimit="10"
                        d="M61.75 361.84L106.53 361.84"
                    ></path>
                    <path
                        fill="none"
                        strokeMiterlimit="10"
                        d="M61.75 371.79L106.53 371.79"
                    ></path>
                    <path
                        fill="none"
                        strokeMiterlimit="10"
                        d="M61.75 381.74L106.53 381.74"
                    ></path>
                    <path
                        fill="none"
                        strokeMiterlimit="10"
                        d="M61.75 391.69L106.53 391.69"
                    ></path>
                    <path
                        fill="none"
                        strokeMiterlimit="10"
                        d="M61.75 401.64L106.53 401.64"
                    ></path>
                    <path
                        fill="none"
                        strokeMiterlimit="10"
                        d="M61.75 411.59L106.53 411.59"
                    ></path>
                    <path
                        fill="none"
                        strokeMiterlimit="10"
                        d="M61.75 421.54L106.53 421.54"
                    ></path>
                </g>
                <g fill="none" stroke="#263238" strokeMiterlimit="10">
                    <path d="M85.96 460.64L720.99 460.64"></path>
                    <path d="M52.99 460.64L70.08 460.64"></path>
                </g>
            </motion.svg>

        </>
    )
}