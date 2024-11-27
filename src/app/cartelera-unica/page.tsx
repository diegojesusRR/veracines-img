"use client"
import React, {useEffect, useState} from "react";
import {cines} from "@/data/cines";
import {Cartelera1Pelicula} from "@/components/cartelera/catelera1Pelicula";
import {FormularioCartelera} from "../../components/forms/new/formularioCartelera";
import {ICarteleraPeliculas} from "@/interfaces/formularios";

export default function Home() {

    const configInicial1: ICarteleraPeliculas = {
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
                        hora: "18:00",
                        vose: false,
                    }
                ]
            }]
        }]
    }

    const [config, setConfig] = useState(configInicial1);

    return (
        <div className="flex flex-row">
            <div className="hidden">
                <div className="bg-azul shadow-azul text-azul"/>
                <div className="bg-rojo shadow-rojo text-rojo"/>
                <div className="bg-naranja shadow-naranja text-naranja"/>
            </div>
            <div className="flex flex-col">
                <Cartelera1Pelicula config={config}/>
            </div>
            <FormularioCartelera config={config} setConfig={setConfig} configCartelera={{
                minProyecciones: 1,
                maxProyecciones: 1,
            }}/>
        </div>

    );
}
