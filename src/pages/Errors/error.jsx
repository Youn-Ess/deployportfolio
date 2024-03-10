import { useNavbar } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"


export const Error = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className='h-screen w-100 flex flex-col justify-center items-center '>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    enableBackground="new 0 0 500 500"
                    viewBox="0 0 500 500"
                >
                    <path fill="#FFF" d="M0 0H500V500H0z"></path>
                    <g>
                        <g fill="#F5DF60">
                            <path d="M195.829 287.638h-13.112v23.048h-31.762v-23.048h-47.481v-23.619l49.517-72.402h29.727v71.995h13.112v24.026zm-44.874-24.026v-13.845c0-2.606.094-6.12.285-10.547.189-4.424.338-6.746.448-6.963h-.896c-1.846 4.181-3.937 8.091-6.271 11.728l-13.194 19.627h19.628zM290.22 251.314c0 21.067-3.53 36.5-10.587 46.301-7.058 9.8-17.864 14.699-32.413 14.699-14.226 0-24.949-5.116-32.17-15.352-7.222-10.233-10.832-25.451-10.832-45.649 0-21.175 3.529-36.702 10.588-46.585 7.057-9.881 17.863-14.822 32.414-14.822 14.171 0 24.88 5.145 32.128 15.433 7.248 10.291 10.872 25.614 10.872 45.975zm-53.996 0c0 13.466.841 22.723 2.525 27.772 1.682 5.049 4.506 7.574 8.47 7.574 4.017 0 6.853-2.606 8.51-7.819 1.656-5.212 2.484-14.387 2.484-27.527 0-13.193-.842-22.438-2.524-27.731-1.684-5.294-4.508-7.94-8.47-7.94-3.964 0-6.788 2.553-8.47 7.655-1.684 5.104-2.525 14.442-2.525 28.016zM391.289 287.638h-13.111v23.048h-31.763v-23.048h-47.481v-23.619l49.517-72.402h29.727v71.995h13.111v24.026zm-44.874-24.026v-13.845c0-2.606.094-6.12.285-10.547.189-4.424.338-6.746.448-6.963h-.896c-1.846 4.181-3.938 8.091-6.271 11.728l-13.193 19.627h19.627z"></path>
                        </g>
                        <g
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                        >
                            <path d="M55.75 218.036L103.887 218.036"></path>
                            <path d="M115.441 218.036L125.717 218.036"></path>
                            <path d="M47.033 204.488L133.208 204.488"></path>
                            <path d="M39.94 204.488L32.847 204.488"></path>
                            <path d="M47.033 191.617L75.643 191.617"></path>
                            <path d="M83.303 191.617L143.388 191.617"></path>
                        </g>
                        <g
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                        >
                            <path d="M396.009 325.524L447.521 325.524"></path>
                            <path d="M455.899 325.524L463.35 325.524"></path>
                            <path d="M406.296 311.975L473.803 311.975"></path>
                            <path d="M401.152 311.975L396.009 311.975"></path>
                            <path d="M396.009 299.104L427.041 299.104"></path>
                            <path d="M432.595 299.104L455.899 299.104"></path>
                        </g>
                        <g fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="3.268">
                            <path d="M201.994 287.183h-13.112v23.048H157.12v-23.048h-47.481v-23.619l49.517-72.402h29.727v71.995h13.112v24.026zm-44.875-24.026v-13.845c0-2.606.094-6.12.285-10.547.189-4.424.338-6.746.448-6.963h-.896c-1.846 4.181-3.937 8.091-6.271 11.728l-13.194 19.627h19.628zM296.384 250.859c0 21.067-3.53 36.5-10.587 46.301-7.058 9.8-17.864 14.699-32.413 14.699-14.226 0-24.949-5.116-32.17-15.352-7.222-10.233-10.832-25.451-10.832-45.649 0-21.175 3.529-36.702 10.587-46.585 7.057-9.881 17.863-14.822 32.414-14.822 14.171 0 24.88 5.145 32.128 15.433 7.25 10.291 10.873 25.615 10.873 45.975zm-53.995 0c0 13.466.841 22.723 2.525 27.772 1.682 5.049 4.506 7.574 8.47 7.574 4.017 0 6.853-2.606 8.51-7.819 1.656-5.212 2.484-14.387 2.484-27.528 0-13.193-.842-22.438-2.524-27.731-1.684-5.294-4.508-7.94-8.47-7.94-3.964 0-6.788 2.553-8.47 7.655-1.684 5.105-2.525 14.444-2.525 28.017zM397.454 287.183h-13.112v23.048H352.58v-23.048h-47.481v-23.619l49.517-72.402h29.727v71.995h13.112v24.026zm-44.874-24.026v-13.845c0-2.606.094-6.12.285-10.547.189-4.424.338-6.746.448-6.963h-.896c-1.846 4.181-3.938 8.091-6.271 11.728l-13.193 19.627h19.627z"></path>
                        </g>
                        <text
                            fontFamily="OpenSans-Extrabold"
                            fontSize="37.185"
                            transform="translate(190.382 362.4)"
                        >
                            ERROR
                        </text>
                        <g
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                        >
                            <path d="M418.489 215.1L418.489 204.061"></path>
                            <path d="M410.783 218.292L402.978 210.486"></path>
                            <path d="M407.592 225.998L396.553 225.998"></path>
                            <path d="M410.783 233.703L402.978 241.509"></path>
                            <path d="M418.489 236.895L418.489 247.934"></path>
                            <path d="M426.195 233.703L434.001 241.509"></path>
                            <path d="M429.387 225.998L440.426 225.998"></path>
                            <path d="M426.195 218.292L434.001 210.486"></path>
                        </g>
                        <g
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                        >
                            <path d="M72.261 270.066L72.261 262.087"></path>
                            <path d="M66.691 272.374L61.049 266.732"></path>
                            <path d="M64.384 277.944L56.405 277.944"></path>
                            <path d="M66.691 283.514L61.049 289.156"></path>
                            <path d="M72.261 285.821L72.261 293.8"></path>
                            <path d="M77.831 283.514L83.473 289.156"></path>
                            <path d="M80.138 277.944L88.118 277.944"></path>
                            <path d="M77.831 272.374L83.473 266.732"></path>
                        </g>
                        <g
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                        >
                            <path d="M288.183 105.254L288.183 97.274"></path>
                            <path d="M282.613 107.561L276.971 101.919"></path>
                            <path d="M280.306 113.131L272.327 113.131"></path>
                            <path d="M282.613 118.701L276.971 124.343"></path>
                            <path d="M288.183 121.008L288.183 128.987"></path>
                            <path d="M293.753 118.701L299.395 124.343"></path>
                            <path d="M296.06 113.131L304.039 113.131"></path>
                            <path d="M293.753 107.561L299.395 101.919"></path>
                        </g>
                        <path
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.419"
                            d="M111.874 326.894H385.635V369.992H111.874z"
                        ></path>
                        <path fill="none" d="M111.874 386.271H387V416.8H111.874z"></path>
                        <text
                            fontFamily="MyriadPro-Regular"
                            fontSize="13.07"
                            transform="translate(154.446 395.55)"
                        >
                            The requested page does not exist.
                        </text>
                        <path
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                            d="M133.208 172.198L133.208 137.669 312.701 137.669 312.701 214.389"
                        ></path>
                        <path
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                            d="M249.436 113.131L249.436 156.361 368.464 156.361 368.464 176.029"
                        ></path>
                        <path
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                            d="M137.491 176.481a4.283 4.283 0 11-8.566 0 4.283 4.283 0 018.566 0z"
                        ></path>
                        <circle
                            cx="249.436"
                            cy="108.848"
                            r="4.283"
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                        ></circle>
                        <path
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                            d="M372.747 180.764a4.284 4.284 0 11-8.567-.001 4.284 4.284 0 018.567.001zM316.984 219.383a4.284 4.284 0 11-8.567-.001 4.284 4.284 0 018.567.001z"
                        ></path>
                        <g
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                        >
                            <path d="M105.295 305.164L95.161 315.298"></path>
                            <path d="M95.161 305.164L105.295 315.298"></path>
                        </g>
                        <g
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                        >
                            <path d="M110.362 158L100.228 168.135"></path>
                            <path d="M100.228 158L110.362 168.135"></path>
                        </g>
                        <g
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                        >
                            <path d="M439.068 272.876L428.933 283.011"></path>
                            <path d="M428.933 272.876L439.068 283.011"></path>
                        </g>
                        <path
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.261"
                            d="M151.47 100.161c-3.232 0-6.19 1.163-8.487 3.089-2.346-7.062-8.994-12.16-16.843-12.16-8.787 0-16.065 6.389-17.487 14.771a10.564 10.564 0 00-2.913-.416c-5.843 0-10.579 4.737-10.579 10.579 0 5.375 4.012 9.803 9.202 10.48v.1h47.107c7.302 0 13.222-5.919 13.222-13.222 0-7.301-5.92-13.221-13.222-13.221z"
                        ></path>
                        <path
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                            d="M396.605 167.417c2.348 0 4.497.845 6.166 2.244 1.704-5.13 6.534-8.834 12.236-8.834 6.384 0 11.671 4.642 12.704 10.731a7.658 7.658 0 012.116-.302 7.686 7.686 0 017.686 7.686c0 3.905-2.914 7.122-6.685 7.613v.072h-34.222c-5.305 0-9.605-4.301-9.605-9.605s4.299-9.605 9.604-9.605zM443.789 349.113a8.024 8.024 0 00-5.171 1.882c-1.429-4.302-5.48-7.409-10.262-7.409-5.354 0-9.788 3.893-10.654 9a6.452 6.452 0 00-1.775-.253 6.442 6.442 0 00-.839 12.831v.061h28.7a8.055 8.055 0 008.056-8.055 8.056 8.056 0 00-8.055-8.057zM54.253 332.114c2.348 0 4.497.845 6.166 2.244 1.704-5.13 6.534-8.834 12.236-8.834 6.384 0 11.671 4.642 12.704 10.731a7.658 7.658 0 012.116-.302 7.686 7.686 0 017.686 7.686c0 3.905-2.914 7.122-6.685 7.613v.072H54.253a9.605 9.605 0 01-9.605-9.605c0-5.305 4.3-9.605 9.605-9.605z"
                        ></path>
                        <path
                            fill="none"
                            stroke="#000"
                            strokeDasharray="3.2675,7.6242"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                            d="M164.692 93.818s60.44-49.277 142.56-26.575C393.515 91.09 410.783 152.6 410.783 152.6"
                        ></path>
                        <path
                            fill="none"
                            stroke="#000"
                            strokeDasharray="3.0467,7.1089"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.017"
                            d="M73.433 237.04c-23.431 3.634-35.21 53.363-8.854 73.104"
                        ></path>
                        <path
                            fill="none"
                            stroke="#000"
                            strokeDasharray="3.2675,7.6242"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                            d="M368.464 380.526s40.138 17.546 57.732-6.933"
                        ></path>
                        <path
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                            d="M177.513 180.764L177.513 155.418"
                        ></path>
                        <path
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                            d="M171.395 180.764L171.395 168.135"
                        ></path>
                        <path
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                            d="M270.67 186.628L270.67 168.091"
                        ></path>
                        <path
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                            d="M263.72 185.047L263.72 177.359"
                        ></path>
                        <path
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                            d="M257.554 185.047L257.554 172.198"
                        ></path>
                        <path
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                            d="M183.394 180.764L183.394 168.091"
                        ></path>
                        <path
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                            d="M351.395 184.292L351.395 178.622"
                        ></path>
                        <path
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                            d="M345.277 184.292L345.277 170.482"
                        ></path>
                        <path
                            fill="none"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            strokeWidth="2.163"
                            d="M357.276 184.292L357.276 174.428"
                        ></path>
                    </g>
                </svg>
                <div className="pb-[4rem]">
                    <button onClick={() => navigate('/deployportfolio')} className="text-lightViolet border-2 border-lightViolet  rounded-3xl px-[1.7rem] py-[0.6rem] font-titiSemibold text-[1.1rem] flex items-center gap-3 transition duration-500 hover:bg-lightViolet hover:text-white ">go to home page</button>
                </div>
            </div>
        </>
    )
}
