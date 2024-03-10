import React, { useState } from "react";
import { motion } from "framer-motion"
export const Logo2 = () => {

    const lightGray = "#FFFFFF"
    // 565656
    // BBBBBB

    const svgVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 3 }
        }
    }

    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },
        visible: {

            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    }


    // const shapeVariations = {
    //     transition: {
    //         delay: 3,
    //         duration: 1,
    //         ease: "easeIn"
    //     },
    //     variants: {
    //         visible: {
    //             fillOpacity: 1,
    //         },
    //         hidden: {
    //             fillOpacity: 0,
    //         }
    //     },
    // }
    const combinedVariant1 = {
        transition: {
            duration: 1.5,
            ease: "easeInOut",
            fillOpacity: {
                delay: 1.5,
                duration: 1,
                ease: "easeIn",
            },
        },
        variants: {
            visible: {
                pathLength: 1,
                fillOpacity: 1,
            },
            hidden: {
                pathLength: 0,
                fillOpacity: 0,
            },
        },
    };

    const combinedVariant2 = {
        transition: {
            duration: 1.5,
            ease: "easeInOut",
            fillOpacity: {
                delay: 1.5,
                duration: 1,
                ease: "easeIn",
            },
        },
        variants: {
            visible: {
                pathLength: 1,
                fillOpacity: 1,
            },
            hidden: {
                pathLength: 0,
                fillOpacity: 0,
            },
        },
    };


    return (
        <>
            <motion.svg version="1.1" width="95" height="90" className="z-50" viewBox="0 0 3187.5 2243.8939355696903"
            // variants={svgVariants}
            // initial="hidden"
            // animate="visible"
            >
                <g transform="scale(9.375) translate(10, 10)">
                    <defs id="SvgjsDefs1189" />
                    <g id="SvgjsG1190" featureKey="odWo6G-0" transform="matrix(2,0,0,2,0,60)" fill="#000">
                        <defs xmlns="http://www.w3.org/2000/svg" />
                        <g xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                className="fil0"
                                d="M13.0424 15.2804l23.9152 0c0.213024,0 0.385728,0.172705 0.385728,0.385728l0 15.4745c0,0.213024 -0.172705,0.385732 -0.385728,0.385732l-23.9152 0c-0.213024,0 -0.385728,-0.172709 -0.385728,-0.385732l0 -15.4745c0,-0.213024 0.172705,-0.385728 0.385728,-0.385728zm1.22146 1.60719l0 13.0316 21.4723 0 0 -13.0316 -21.4723 0z"
                                {...combinedVariant2}
                                fill={lightGray}
                                animate="visible"
                                initial="hidden"
                                stroke={lightGray}
                                stroke-miterlimit="10"
                                stroke-width="0.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <motion.polygon
                                className="fil0"
                                points="30.5708,34.7908 19.4292,34.7908 19.4292,33.6759 30.5708,33.6759 "
                                // style={{ fill: '#111111', fillRule: 'nonzero' }}
                                {...combinedVariant2}
                                fill={lightGray}
                                animate="visible"
                                initial="hidden"
                                stroke={lightGray}
                                stroke-miterlimit="10"
                                stroke-width="0.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <motion.polygon className="fil0" points="17.3954,23.9155 17.3954,22.9824 22.7914,20.7045 22.7914,21.6983 18.5126,23.4546 22.7914,25.2261 22.7914,26.2218 "
                                {...combinedVariant2}
                                fill="none"
                                animate="visible"
                                initial="hidden"
                                stroke={lightGray}
                                stroke-miterlimit="10"
                                stroke-width="0.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <motion.polygon className="fil0" points="23.4192,27.6158 25.7805,19.1929 26.5809,19.1929 24.2252,27.6158 " style={{ fill: '#111111', fillRule: 'nonzero' }}
                                {...combinedVariant2}
                                fill={lightGray}
                                animate="visible"
                                initial="hidden"
                                stroke={lightGray}
                                stroke-miterlimit="10"
                                stroke-width="0.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <motion.polygon className="fil0" points="32.5989,23.9155 27.203,26.2218 27.203,25.2261 31.4761,23.4546 27.203,21.6983 27.203,20.7045 32.5989,22.9824 " style={{ fill: '#111111', fillRule: 'nonzero' }}
                                {...combinedVariant2}
                                fill={lightGray}
                                animate="visible"
                                initial="hidden"
                                stroke={lightGray}
                                stroke-miterlimit="10"
                                stroke-width="0.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <motion.polygon className="fil1" points="22.9616,31.1407 27.0384,31.1407 28.1635,33.801 21.8365,33.801 " style={{ fill: '#111111' }}
                                {...combinedVariant2}
                                fill={lightGray}
                                animate="visible"
                                initial="hidden"
                                stroke={lightGray}
                                stroke-miterlimit="10"
                                stroke-width="0.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <motion.path xmlns="http://www.w3.org/2000/svg" className="fil0" d="M25.3857 0.226008l10.4391 6.027 -0.000759843 0.00131102 10.4369 6.02567 0.388744 0.224449 0 0.441539 0 12.054 0 12.054 0 0.441539 -0.388744 0.224449 -10.4369 6.02567 0.000759843 0.00131102 -10.4391 6.027 -0.385728 0.222685 -0.385728 -0.222685 -10.4391 -6.027 0.000759843 -0.00131102 -10.4369 -6.02567 -0.388744 -0.224449 0 -0.441539 0 -12.054 0 -12.054 0 -0.441539 0.388744 -0.224449 10.4369 -6.02567 -0.000759843 -0.00131102 10.4391 -6.027 0.385728 -0.222685 0.385728 0.222685zm-0.385748 2.4497l-7.65976 4.42235 0.000755906 0.00133071 -11.6762 6.74124 0 22.3187 11.6762 6.74124 -0.000755906 0.00131102 7.6598 4.42237 7.65976 -4.42235 -0.000755906 -0.00133071 11.6762 -6.74124 0 -22.3187 -11.6762 -6.74124 0.000755906 -0.00131102 -7.6598 -4.42237z"
                            // style={{ fill: '#111111', fillRule: 'nonzero' }}
                            {...combinedVariant2}
                            fill={lightGray}
                            animate="visible"
                            initial="hidden"
                            stroke={lightGray}
                            stroke-miterlimit="10"
                            stroke-width="0.1"
                            stroke-linecap="round"
                            stroke-linejoin="round"

                        />
                        <rect xmlns="http://www.w3.org/2000/svg" className="fil2" width="50" height="50" style={{ fill: 'none' }} />
                    </g>
                    <g id="SvgjsG1191" featureKey="VGK2BT-0" transform="matrix(16.17732706363994,0,0,16.17732706363994,115.87817243935022,-104.19770053301856)" fill="#000">
                        <motion.path d="M12.441 6.441000000000001 c0.13559 0 0.23712 0.15254 0.13543 0.30492 l-5.1864 7.7288 l0 5.2373 c0 0.18644 -0.10169 0.28797 -0.27119 0.28797 l-0.98305 0 c-0.42356 0 -0.66102 -0.28797 -0.66102 -0.6778 l0 -4.8475 l-5.1864 -7.7288 c-0.084746 -0.15238 0 -0.30492 0.15254 -0.30492 l1.7119 0 c0.13559 0 0.20339 0.11864 0.28814 0.25424 l3.9831 5.8644 l3.9831 -5.8644 c0.10186 -0.13559 0.15271 -0.25424 0.30525 -0.25424 l1.7288 0 z"
                            {...combinedVariant1}
                            fill={lightGray}
                            animate="visible"
                            initial="hidden"
                            stroke={lightGray}
                            stroke-miterlimit="10"
                            stroke-width="0.1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                </g>
            </motion.svg>
        </>



    )

}