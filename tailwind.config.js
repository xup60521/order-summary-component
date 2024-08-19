/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Pale_blue: "hsl(225, 100%, 94%)",
                c_Bright_blue: "hsl(245, 75%, 52%)",
                c_Very_pale_blue: "hsl(225, 100%, 98%)",
                c_Desaturated_blue: "hsl(224, 23%, 55%)",
                c_Dark_blue: "hsl(223, 47%, 23%)",
            },
            fontFamily: {
                red_hat_display: ["Red Hat Display", "sans-serif"]
            }
        },
    },
    plugins: [],
}

