'use client'

import React from "react";
import {FotoPelicula} from "@/components/fotoPelicula";
import {ICine} from "@/data/cines";
import {ICarteleraPeliculaHorario} from "@/interfaces/formularios";
import {Monoton as Font, Neuton as Font2} from 'next/font/google';

const font = Font({
    subsets: ["latin"],
    weight: ["400"],
});

const font2 = Font2({
    subsets: ["latin"],
    weight: ["400"],
});

export const PeliculaHorizontalMini = ({cine, proyeccion, index}: {
    cine: ICine,
    proyeccion: ICarteleraPeliculaHorario,
    numPeliculas: number,
    index: number
}) => {
    // Construir los bloques de horarios por día
    const horarios = proyeccion.dias.map((dia) => {
        const diaSemana = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'][dia.dia.getDay()];
        return (
            <div key={dia.dia.getTime()} className="flex flex-row items-center h-[20px">
                <div className={`font-bold text-${cine.color} text-[9px] w-[40px] text-left mr-2`}
                     style={{fontFamily: font.style.fontFamily}}

                >
                    {diaSemana} {dia.dia.getDate()}
                </div>
                <div className="grid grid-cols-2 flex-wrap gap-0.5 flex-1 items-center justify-center text-center min-w-0">
                    {dia.horarios.map((horario) => (
                        <span
                            key={horario.hora}
                            className={`items-center font-bold text-[9px] text-white py-0.5 px-0 rounded bg-${cine.color} whitespace-nowrap`}>
                            {horario.hora}H
                            {horario.vose && (<span className="ml-1 text-[0.8em] text-gray-500">(VOSE)</span>)}
                        </span>
                    ))}
                </div>
            </div>
        );
    });

    return (
        <div className="portada flex flex-row w-full items-stretch bg-white rounded-lg shadow overflow-hidden">
            {/* Foto a la izquierda, más grande */}
            <div className="flex-shrink-0 flex items-center justify-center ml-1" style={{width: 75, minHeight: 85}}>
                {proyeccion.pelicula.imagen && (
                    <FotoPelicula
                        cine={cine}
                        pelicula={proyeccion.pelicula}
                    />
                )}
            </div>
            {/* Info a la derecha */}
            <div className="flex flex-col flex-1 p-2 justify-top">
                <div
                    className={`font-bold uppercase text-[11px] mb-2 h-[30px] text-${cine.color} whitespace-normal break-words`}
                    title={proyeccion.pelicula.titulo}
                    style={{fontFamily: font.style.fontFamily}}
                >
                    {proyeccion.pelicula.titulo}
                </div>
                <div className="grid grid-cols-2 gap-[3px] gap-x-[16px]">
                    {horarios}
                </div>
            </div>
        </div>
    );
}