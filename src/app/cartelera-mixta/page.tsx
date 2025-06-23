"use client"
import React, {useEffect, useState} from "react";
import {FormularioCartelera} from "@/components/forms/formularioCartelera";
import {cines} from "@/data/cines";
import {IConfigCartelera} from "@/app/cartelera-cara-b/page";
import {CarteleraMixta} from "../../components/cartelera/verano/rrss/carteleraMixta";

export interface IPelicula {
    titulo: string,
    imagen?: string,
    imagenes?: string[],
    tamanoTitulo?: number,
    diaInicio: Date,
    diaFin: Date,
}

const initPelicula = (date: Date) => {
    const pelicula: IPelicula = {
        titulo: '',
        diaInicio: date,
        tamanoTitulo: 12,
        diaFin: date,
    }

    return pelicula;
}
const initPeliculas = (numPeliculas: number): IPelicula[] => {

    const peliculas = [];
    for (let i = 0; i < numPeliculas; i++) {
        peliculas.push(initPelicula(new Date(new Date().getTime() + (86400000 * i))));
    }

    return peliculas;
}
export default function Home() {

    const configInicial1: IConfigCartelera = {
        cine: cines.find(cine => cine.id === 2),
        peliculas: initPeliculas(4),
    }

    const configInicial2: IConfigCartelera = {
        cine: cines.find(cine => cine.id === 1),
        peliculas: initPeliculas(4),
    }

    const [config1, setConfig1] = useState(configInicial1);
    const [config2, setConfig2] = useState(configInicial2);

    const handleConfigChange = (newConfig: IConfigCartelera, index?: number) => {
        if(index === 1)
            setConfig1(newConfig);
        else if(index === 2)
            setConfig2(newConfig);
    }

    useEffect(() => {
    }, [config1, config2]);

    return (
        <div className="flex flex-row">
            <div className="hidden">
                <div className="bg-azul shadow-azul text-azul"/>
                <div className="bg-rojo shadow-rojo text-rojo"/>
                <div className="bg-naranja shadow-naranja text-naranja"/>
            </div>
            <div className="flex flex-col">
                <CarteleraMixta config1={config1} config2={config2}/>
            </div>

            <FormularioCartelera config={config1} setConfig={handleConfigChange} index={1}/>
            <FormularioCartelera config={config2} setConfig={handleConfigChange} index={2}/>
        </div>

    );
}
