
export interface ICine {
    id: number;
    nombre: string;
    corto: string;
    color: string;
    colorRef: {
        normal: string;
        dark: string;
    };
    direccion: {
        calle: string;
        numero: string;
        cp: string;
        localidad: string;
        provincia: string;
        pais: string;
    };

}

export const cines = [
    {
        id: 1,
        nombre: "Cine Municipal Regio",
        corto: "regio",
        color: "azul",
        colorRef: {
            normal: "#2d438f",
            dark: "#0e226a",
        },
        direccion: {
            calle: "Radio Nacional",
            numero: "s/n",
            cp: "04620",
            localidad: "Vera",
            provincia: "Almería",
            pais: "España",
        },
    },
    {
        id: 2,
        nombre: "Cine de Verano Terraza de Vera",
        corto: "vera",
        color: "azul",
        colorRef: {
            normal: "#2d438f",
            dark: "#0e226a",
        },
        direccion: {
            calle: "Antonio de Torres",
            numero: "2",
            cp: "04620",
            localidad: "Vera",
            provincia: "Almería",
            pais: "España",
        },
    },
    {
        id: 3,
        nombre: "Cine Tenis de Garrucha",
        corto: "garrucha",
        color: "naranja",
        colorRef: {
            normal: "#f7770e",
            dark: "#bf5f00",
        },
        direccion: {
            calle: "Tenis",
            numero: "s/n",
            cp: "04630",
            localidad: "Garrucha",
            provincia: "Almería",
            pais: "España",
        },
    }
]