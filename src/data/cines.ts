
export interface ICine {
    id: number;
    nombre: string;
    corto: string;
    color: string;
    logo: string;
    horaDefectoPelicula?: string;
    colorRef: {
        normal: string;
        dark: string;
    };
    servicios: string[],
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
        color: "regio",
        logo: "/assets/logos/cine-regio.png",
        colorRef: {
            normal: "#dc3545",
            dark: "#bd2c3a",
            // normal: "#2d438f",
            // dark: "#0e226a",
        },
        servicios: ["pops", "climate", "2k", "ice-creams"],
        horaDefectoPelicula: "20:00",
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
        nombre: "Cine Municipal Terraza de Vera",
        corto: "vera",
        color: "vera",
        logo: "/assets/logos/cine-vera.png",
        colorRef: {
            normal: "#2d438f",
            dark: "#0e226a",
        },
        horaDefectoPelicula: "22:00",
        servicios: ["pops", "parking", "2k", "ice-creams", "burguer"],
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
        logo: "/assets/logos/cine-vera.png",
        servicios: [],
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