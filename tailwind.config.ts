import type {Config} from "tailwindcss";

const vera = {
    normal: "#2d438f",
    dark: "#0e226a",
}

const regio = {
    normal: "#dc3545",
    dark: "#bd2c3a",
}

const naranja = {
    normal: "#f7770e",
    dark: "#bf5f00",
}

const colors = {
    vera: vera.normal,
    regio: regio.normal,
    naranja: naranja.normal,
    "dark-vera": vera.dark,
    "dark-regio": regio.dark,
    "dark-naranja": naranja.dark,
    blanco: "#ffffff",
}

const darkColors = {
    vera: vera.dark,
    regio: regio.dark,
    naranja: naranja.dark,
    blanco: "#ffffff",
}

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/tailwind-datepicker-react/dist/**/*.js", // <--- Add this line
    ],
    theme: {
        extend: {
            colors,
            boxShadowColor: darkColors,
            backgroundImage: {
                fondo: "url('/src/public/images/fondo.png')"
            },
            borderColor: {
                vera: vera.dark,
                regio: regio.dark,
                naranja: naranja.dark,
            },
        },
    },
    plugins: []
};
export default config;
