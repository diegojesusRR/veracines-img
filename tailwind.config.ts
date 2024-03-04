import type {Config} from "tailwindcss";

const azul = {
    normal: "#2d438f",
    dark: "#0e226a",
}

const rojo = {
    normal: "#e10000",
    dark: "#b90000",
}

const naranja = {
    normal: "#f7770e",
    dark: "#bf5f00",
}

const colors = {
    azul: azul.normal,
    rojo: rojo.normal,
    naranja: naranja.normal,
    blanco: "#ffffff",
}

const darkColors = {
    azul: azul.dark,
    rojo: rojo.dark,
    naranja: naranja.dark,
    blanco: "#ffffff",
}

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors,
            boxShadowColor: darkColors,
            backgroundImage: {
                fondo: "url('/src/public/images/fondo.png')"
            }
        },
    },
    plugins: []
};
export default config;
