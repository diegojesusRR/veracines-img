"use client"
import React, {useEffect, useState} from "react";
import {FormularioCartelera} from "@/components/forms/formularioCartelera";
import {ICine} from "@/data/cines";
import {CarteleraCaraB} from "../../components/cartelera/verano/panfleto/carteleraCaraB";
import {cines} from "@/data/cines";
import {CarteleraCaraA} from "../../components/cartelera/verano/panfleto/carteleraCaraA";

export interface IPelicula {
    titulo: string,
    tamanoTitulo?: number,
    imagen?: string,
    imagenes?: string[],
    diaInicio: Date,
    diaFin: Date,
}

export interface IConfigCartelera {
    cine?: ICine,
    peliculas?: IPelicula[],
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

    const configInicial = {
        cine: cines.find(cine => cine.id === 2),
        peliculas: initPeliculas(8),
        portada: initPelicula(new Date()),
    }

    const [config, setConfig] = useState(configInicial);

    useEffect(() => {
    }, [config]);

    return (
        <div className="flex flex-row">
            <div className="hidden">
                <div className="bg-vera shadow-vera text-vera"/>
                <div className="bg-rojo shadow-rojo text-rojo"/>
                <div className="bg-naranja shadow-naranja text-naranja"/>
            </div>
            <div className="flex flex-col">
                <CarteleraCaraB config={config}/>
            </div>

            <FormularioCartelera config={config} setConfig={setConfig}/>
        </div>

    );
}
