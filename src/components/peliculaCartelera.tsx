'use client'

import React from "react";
import {FotoPelicula} from "@/components/fotoPelicula";
import {IPelicula} from "@/app/cartelera-cara-b/page";
import {ICine} from "@/public/data/cines";

export const PeliculaCartelera = ({cine, pelicula, className} : {cine: ICine, pelicula: IPelicula, className?: string}) => {

    const fechas = [];

    // Añadir a fechas desde el dia de diaInicio hasta el dia de diaFin
    let i = new Date(pelicula.diaInicio);
    const diaFin = new Date(pelicula.diaFin);

    while (i.getTime() <= diaFin.getTime() + 1) {
        fechas.push(new Date(i)); // Añadir una copia de 'i' al array
        i.setTime(i.getTime() + 86400000); // Sumar un día a 'i'
    }

    const dias = fechas.map((fecha, index) => {
        const dia = fecha.getDate();
        const diaSemana = fecha.getDay();
        const diaSemanaTexto = ['D', 'L', 'M', 'X', 'J', 'V', 'S'][diaSemana];
        return `${diaSemanaTexto} ${dia}`;
    });

    const meses = fechas.map((fecha, index) => {
        const mes = fecha.getMonth();
        const mesTexto = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'][mes];
        return mesTexto;
    }).filter((mes, index, array) => array.indexOf(mes) === index);

    return (
        <React.Fragment>
        {
            pelicula.imagen ?
                <div className={`flex flex-col max-h-[380px] py-2 px-2 ${className??''}`}>
                    <h3 className={`w-full text-${pelicula.titulo.length >= 30 ? '[10px]' : 'xs'} col-span-3 text-white bg-${cine.color} text-center font-bold p-2 rounded-lg h-16 flex items-center justify-center`}>                        {pelicula.titulo}</h3>
                    <FotoPelicula cine={cine} pelicula={pelicula}/>
                    <div
                        className={`mt-2 w-full text-xs col-span-3 text-white bg-${cine.color} text-center font-bold p-2 rounded-lg mb-2`}>
                        <div className={`text-${cine.color} bg-white rounded-lg p-0.5`}>{meses.join(' - ')}</div>
                        <div className="text-white pt-2">{dias.join(' - ')}</div>
                    </div>
                </div>
                : <></>
        }
        </React.Fragment>
    )
}