import React from "react";
import {Kanit, Oswald, Roboto_Condensed} from "next/font/google";
import {PrecioPelicula} from "@/components/precio";

const kanit = Kanit({ subsets: ['latin'], weight: ['400', '700'] })
const oswald = Oswald({ subsets: ['latin'], weight: ['400', '700'] })

export const InfoPelicula = ({config} : {config: any}) => {

    const horarios = config.proyecciones && config.proyecciones.map((proyeccion: any) => {
        const horas = proyeccion.horarios.map((horario: any) => `${horario.hora}${horario.vose ? ` (VOSE)` : ''}`);
        const ultimaHora = horas.pop();
        const horasString = horas.join(', ');
        const horarioString = horasString ? `${horasString} y ${ultimaHora}` : ultimaHora;
        return `${proyeccion.fecha.toLocaleDateString('es-ES', { weekday: 'long' }).replace(/(^|\s)\S/g, (char: string) => char.toUpperCase())} ${proyeccion.fecha.getDate()}: ${horarioString}`;
    });

    const meses = config.proyecciones && config.proyecciones.map((proyeccion: any) => proyeccion.fecha.getMonth());
    const mesesString = meses?.filter((mesNumber: number, index: number) => meses.indexOf(mesNumber) === index).map((mes: number) => new Date(0, mes).toLocaleDateString('es-ES', { month: 'long' }).replace(/(^|\s)\S/g, (char: string) => char.toUpperCase()));
    const mesesCadena = mesesString ? mesesString.length > 1 ? `${mesesString[0]} y ${mesesString[1]}` : mesesString[0] : undefined;
    return (
        <div className="w-full flex flex-col items-center justify-between">
            <div className={`shadow-[10px_10px_0_0] shadow-${config.cine.color} bg-${config.cine.color} w-full text-3xl font-semibold flex flex-col items-center justify-center min-h-[100px]`}>
                <h2 className={kanit.className + " text-white h-auto text-center"}>
                    {config.pelicula.titulo}
                </h2>
            </div>
            <div className="w-full font-semibold flex flex-col items-center justify-center pl-5">
                <h3 className={`${kanit.className} text-${config.cine.color} text-2xl h-auto text-left underline underline-offset-4 w-full`}>
                    {mesesCadena}
                </h3>
                <div className="mt-5 w-full text-2xl">
                    {horarios?.map((horario: string, index: number) => (
                        <div key={index} className={`${oswald.className} text-${config.cine.color}`}>{horario}</div>
                    ))}
                </div>
            </div>
            <PrecioPelicula config={config} />
        </div>
    )
}