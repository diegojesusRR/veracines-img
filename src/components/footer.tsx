import React from "react";
import Image from "next/image";
import {Kanit} from "next/font/google";
import ayuntamiento from "@/public/images/ayuntamiento.png";
import ubicacion from "@/public/images/ubicacion.png";

export const Footer = ({config}: { config: any }) => {

    const direccion = `${config.cine.direccion.calle}, ${config.cine.direccion.numero}, ${config.cine.direccion.cp}`;
    const localidad = `${config.cine.direccion.localidad}, ${config.cine.direccion.provincia}`;
    
    return (
        <div className="flex w-full p-4 text-center items-center flex-1">
            <div className="flex-1 flex flex-row items-center">
                <Image alt="foto_pelicula" className="object-contain" width={30} height={20} src={ubicacion} />
                <span className="ml-2">
            <p className={`text-${config.cine.color} italic text-sm`}>{direccion}</p>
            <p className={`text-${config.cine.color} italic text-sm`}>{localidad}</p>
        </span>
            </div>
            <div className="flex-1">
                <p className={`text-${config.cine.color} italic text-sm`}>Tlfn: 660 391 365</p>
            </div>
            <div className="flex-1 flex max-w-2/3 items-center">
                <p className={`text-${config.cine.color} italic text-sm`}>Colabora Excmo. Ayuntamiento de Vera</p>
                <Image alt="foto_pelicula" className="object-contain ml-2" width={60} height={40} src={ayuntamiento} />
            </div>
        </div>
    )
}