
import React from "react";
import {IConfigCartelera, IPelicula} from "@/app/cartelera-cara-b/page";
import {ICine} from "@/data/cines";


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
        <div className={`portada photo-class w-[400px] h-[800px] relative flex flex-col`} id={"portada"} id={"portada"}>
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
                            className={`bg-${cine.color} border-2 border-dark-${cine.color} top-0 left-0 m-2 p-3 flex items-center justify-center flex-col rounded-lg`}>
                            <h1 className={`text-${cine.color} text-xl text-white capitalize font-bold text-center`}>{cine.nombre}</h1>
                        </div>
                        <div className={`bg-${cine.color} border-2 border-${cine.color} rounded-lg w-fit mx-auto px-5 py-1`}>
                            <p className={`text-${cine.color} text-sm text-white capitalize font-bold text-center`}>{meses.join(' - ')} {anios.join(' - ')}</p>
                        </div>
                        <div
                            className={`absolute w-full bg-${cine.color} border-t-2 border-${cine.color} bottom-0 left-0 p-3 flex items-center justify-center flex-col`}>
                            <p className={`text-${cine.color} text-sm text-white capitalize font-bold text-center`}>Todas las funciones empezarán a las 22:00</p>
                        </div>
                    </div>

                </>

            }
        </div>
    )
}