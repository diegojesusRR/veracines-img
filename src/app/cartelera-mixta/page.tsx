"use client"
import React, {useEffect, useState} from "react";
import {FormularioCartelera} from "@/components/forms/formularioCartelera";
import {cines} from "@/public/data/cines";
import {IConfigCartelera} from "@/app/cartelera-mano/page";
import {CarteleraMixta} from "@/components/cartelera/carteleraMixta";

export interface IPelicula {
    titulo: string,
    imagen?: string,
    imagenes?: string[],
    diaInicio: Date,
    diaFin: Date,
}
export interface IConfigCarteleraMixta {
    cartelera1: IConfigCartelera,
    cartelera2: IConfigCartelera,
}

const initPelicula = (date: Date) => {
    const pelicula: IPelicula = {
        titulo: '',
        diaInicio: date,
        diaFin: date,
    }

    return pelicula;
}
const initPeliculas = (numPeliculas: number) => {

    const peliculas = [];
    for (let i = 0; i < numPeliculas; i++) {
        peliculas.push(initPelicula(new Date(new Date().getTime() + (86400000 * i))));
    }

    return peliculas;
}
export default function Home() {

    const configInicial = {
        cartelera1: {
            cine: cines.find(cine => cine.id === 2),
            peliculas: initPeliculas(4),
        },
        cartelera2: {
            cine: cines.find(cine => cine.id === 3),
            peliculas: initPeliculas(4),
        },
    }

    const [config, setConfig] = useState(configInicial);

    const handleConfigChange = (newConfig: IConfigCartelera, index?: number) => {

        console.log(newConfig, index);

        if(index !== undefined)
            setConfig({
                ...config,
                [`cartelera${index}`]: newConfig,
            });

    }

    useEffect(() => {
        console.log(config)
    }, [config]);

    return (
        <div className="flex flex-row">
            <div className="hidden">
                <div className="bg-azul shadow-azul text-azul"/>
                <div className="bg-rojo shadow-rojo text-rojo"/>
                <div className="bg-naranja shadow-naranja text-naranja"/>
            </div>
            <div className="flex flex-col">
                <CarteleraMixta config1={config.cartelera1} config2={config.cartelera2}/>
            </div>

            <FormularioCartelera config={config.cartelera1} setConfig={handleConfigChange} index={1}/>
            <FormularioCartelera config={config.cartelera2} setConfig={handleConfigChange} index={2}/>
        </div>

    );
}
