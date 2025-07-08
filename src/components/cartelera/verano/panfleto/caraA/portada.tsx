
import React from "react";
import {IConfigCartelera, IPelicula} from "@/app/cartelera-cara-b/page";
import {ICine} from "@/data/cines";

import {Monoton as Font} from 'next/font/google';
import { Fascinate_Inline as Font2 } from 'next/font/google';

const font = Font({
    subsets: ["latin"],
    weight: ["400"], // Regular weight
});

const font2 = Font2({
    subsets: ["latin"],
    weight: ["400"], // Regular weight
});

export const PortadaCaraA = ({cine, portada} : {cine: ICine, portada: IPelicula}) => {

    const fechas = [];

    // Añadir a fechas desde el dia de diaInicio hasta el dia de diaFin
    let i = new Date(portada.diaInicio);
    const diaFin = new Date(portada.diaFin);

    while (i.getTime() <= diaFin.getTime() + 1) {
        fechas.push(new Date(i)); // Añadir una copia de 'i' al array
        i.setTime(i.getTime() + 86400000); // Sumar un día a 'i'
    }

    const meses = fechas.map((fecha, index) => {
        const mes = fecha.getMonth();
        const mesTexto = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'][mes];
        return mesTexto;
    }).filter((mes, index, array) => array.indexOf(mes) === index);

    const anios = fechas.map((fecha, index) => {
        const anio = fecha.getFullYear();
        return anio;
    }).filter((anio, index, array) => array.indexOf(anio) === index);

    return (
        <div className={`portada photo-class w-[400px] h-[800px] relative flex flex-col`} id={"portada"}>
            {cine && portada && portada.imagen &&
                <>
                    <img
                        alt={`foto_pelicula`}
                        className={`object-cover border-${cine.color}`}
                        style={{width: '100%', height: '100%', objectFit: 'cover'}}
                        src={portada.imagen!}
                    />
                    <div className={`absolute flex flex-col w-full h-full`}>
                        <div
                            className={`bg-[#2d438f] border-2 border-[#0e226a] top-0 left-0 m-2 p-3 flex items-center justify-center flex-col rounded-lg`}>
                            <h1 className={`text-white font-bold text-center text-[20px]`} style={{fontFamily: font2.style.fontFamily}}>Cartelera Veracines</h1>
                        </div>
                        <div className={`bg-[#dc3545] border-2 border-[#bd2c3a] rounded-lg w-fit mx-auto px-5 py-1`}  style={{fontFamily: font.style.fontFamily}}>
                            <p className={`text-${cine.color} text-sm text-white capitalize font-bold text-center`}>{meses.join(' - ')} {anios.join(' - ')}</p>
                        </div>
                    </div>

                </>

            }
        </div>
    )
}