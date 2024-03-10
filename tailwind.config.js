
/** @type {import(tailwindcss).Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                titiLight: ["titiLight", "sans-serif"],
                titiRegular: ["titiRegular", "sans-serif"],
                titiSemibold: ["titiSemibold", "sans-serif"],
                titiBold: ["titiBold", "sans-serif"],
            },

            colors: {
                darkGray: '#3B3B3B',
                lightViolet: '#7510f7',
                lightGreen: '#5be9b9',
                darkViolet: '#141c3a',
                veryLightGray : '#EAEAEA'
            },

        }
    }

}
