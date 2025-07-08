"use client"
import React, {useEffect, useState} from "react";
import {FormularioCartelera} from "../../components/forms/new/formularioCartelera";
import {ICine} from "@/data/cines";
import {cines} from "@/data/cines";
import {CarteleraHoy} from "@/components/cartelera/verano/panfleto/carteleraHoy";
import {ICarteleraPeliculas} from "@/interfaces/formularios";
import {Cartelera6Peliculas} from "@/components/cartelera/verano/panfleto/Cartelera6Peliculas";
import {FotoButton} from "@/components/fotoButton";
import {CineCabeceraHorizontal} from "@/components/cartelera/CineCabeceraHorizontal";
import {PeliculaCarteleraConHorario} from "@/components/peliculaCarteleraConHorario";
import {Cartelera12Peliculas} from "@/components/cartelera/verano/Cartelera12Peliculas";

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

    const configInicial: ICarteleraPeliculas = {
        cine: cines.find(cine => cine.id === 2)!,
        proyecciones: [{
            pelicula: {
                titulo: '',
                tamanoTitulo: 12,
            },
            dias: [{
                dia: new Date(),
                horarios: [
                    {
                        hora: "22:00",
                        vose: false,
                    }
                ]
            }]
        }]
    }

    const configInicial2: ICarteleraPeliculas = {
        cine: cines.find(cine => cine.id === 1)!,
        proyecciones: [{
            pelicula: {
                titulo: '',
                tamanoTitulo: 12,
            },
            dias: [{
                dia: new Date(),
                horarios: [
                    {
                        hora: "22:00",
                        vose: false,
                    }
                ]
            }]
        }]
    }

    const [config, setConfig] = useState(configInicial);
    const [config2, setConfig2] = useState(configInicial2);

    useEffect(() => {
    }, [config, config2]);

    return (
        <div className="flex flex-row">
            <div className="hidden">
                <div className="bg-vera shadow-vera text-vera"/>
                <div className="bg-rojo shadow-rojo text-rojo"/>
                <div className="bg-naranja shadow-naranja text-naranja"/>
            </div>
            <div className="flex flex-col">
                <Cartelera12Peliculas config={config} config2={config2}/>
            </div>

            <FormularioCartelera config={config} setConfig={setConfig}  configCartelera={{
                minProyecciones: 6,
                maxProyecciones: 6,
            }}/>
            <FormularioCartelera config={config2} setConfig={setConfig2}  configCartelera={{
                minProyecciones: 6,
                maxProyecciones: 6,
            }}/>
        </div>
    );
}
