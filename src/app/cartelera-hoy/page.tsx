"use client"
import React, {useEffect, useState} from "react";
import {FormularioCartelera} from "@/components/forms/formularioCartelera";
import {ICine} from "@/public/data/cines";
import {CarteleraCaraB} from "@/components/cartelera/carteleraCaraB";
import {cines} from "@/public/data/cines";
import {CarteleraCaraA} from "@/components/cartelera/carteleraCaraA";
import {CarteleraHoy} from "@/components/cartelera/caraA/carteleraHoy";

export interface IPelicula {
    titulo: string,
    tamanoTitulo: number,
    imagen?: string,
    imagenes?: string[],
    diaInicio: Date,
    diaFin: Date,
}
export interface IConfigCartelera {
    cine?: ICine,
    peliculas?: (IPelicula|undefined)[],
}

const initPelicula = (date: Date) => {
    const pelicula: IPelicula = {
        titulo: '',
        tamanoTitulo: 12,
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

    const configInicial1 = {
        cine: cines.find(cine => cine.id === 2),
        peliculas: initPeliculas(1),
        portada: initPelicula(new Date()),
    }

    const configInicial2 = {
        cine: cines.find(cine => cine.id === 3),
        peliculas: initPeliculas(1),
        portada: initPelicula(new Date()),
    }

    const [config1, setConfig1] = useState(configInicial1);
    const [config2, setConfig2] = useState(configInicial2);

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
                <CarteleraHoy config1={config1} config2={config2}/>
            </div>

            <FormularioCartelera config={config1} setConfig={setConfig1}/>
            <FormularioCartelera config={config2} setConfig={setConfig2}/>
        </div>

    );
}
