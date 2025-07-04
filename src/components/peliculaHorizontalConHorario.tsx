'use client'

import React from "react";
import { FotoPelicula } from "@/components/fotoPelicula";
import { ICine } from "@/data/cines";
import { ICarteleraPeliculaHorario } from "@/interfaces/formularios";
import { Monoton as Font } from 'next/font/google';

const font = Font({
    subsets: ["latin"],
    weight: ["400"],
});

import { Neuton as Font2 } from 'next/font/google';

const font2 = Font2({
    subsets: ["latin"],
    weight: ["400"],
});

export const PeliculaHorizontalConHorario = ({ cine, proyeccion, numPeliculas }: {
    cine: ICine,
    proyeccion: ICarteleraPeliculaHorario,
    numPeliculas: number
}) => {
    // Construir los bloques de horarios por día
    const horarios = proyeccion.dias.map((dia) => {
        const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][dia.dia.getDay()];
        return (
            <div key={dia.dia.getTime()} className="flex flex-row items-center">
                <div className={`font-bold text-${cine.color} text-[10px] w-20 text-left mr-2`}
                     style={{ fontFamily: font.style.fontFamily }}

                >
                    {diaSemana} {dia.dia.getDate()}
                </div>
                <div className="flex flex-row gap-1.5 flex-1">
                    {dia.horarios.map((horario) => (
                        <span
                            key={horario.hora}
                            className={`inline-flex items-center justify-center font-bold text-[10px] text-white  p-0.5 rounded bg-${cine.color} px-1`}
                        >
                {horario.hora}H
                            {horario.vose && (
                                <span className="ml-1 text-[0.8em] text-gray-500">(VOSE)</span>
                            )}
            </span>
                    ))}
                </div>
            </div>
        );
    });

    return (
        <div className="flex flex-row w-full items-stretch bg-white rounded-lg shadow overflow-hidden">
            {/* Foto a la izquierda, más grande */}
            <div className="flex-shrink-0 flex items-center justify-center" style={{ width: 160, minHeight: 180 }}>
                {proyeccion.pelicula.imagen && (
                    <FotoPelicula
                        cine={cine}
                        pelicula={proyeccion.pelicula}
                    />
                )}
            </div>
            {/* Info a la derecha */}
            <div className="flex flex-col flex-1 p-4 justify-top">
                <div
                    className={`font-bold uppercase text-[15px] mb-2 h-[80px] text-${cine.color} whitespace-normal break-words`}
                    title={proyeccion.pelicula.titulo}
                    style={{ fontFamily: font.style.fontFamily }}
                >
                    {proyeccion.pelicula.titulo}
                </div>
                <div className="grid grid-rows-6 h-[110px] gap-[22px]">
                    {horarios}
                </div>
            </div>
        </div>
    );
}