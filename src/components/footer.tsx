import React from "react";
import Image from "next/image";
import {Kanit} from "next/font/google";
import ayuntamiento from "@/public/images/ayuntamiento.png";
import ubicacion from "@/public/images/ubicacion.png";
import {ICine} from "@/data/cines";

export const Footer = ({cine}: { cine: ICine }) => {

    const direccion = `${cine.direccion.calle}, ${cine.direccion.numero}, ${cine.direccion.cp}`;
    const localidad = `${cine.direccion.localidad}, ${cine.direccion.provincia}`;
    
    return (
        <div className="flex w-full p-4 text-center items-center flex-1">
            <div className="flex-1 flex flex-row items-center">
                <Image alt="foto_pelicula" className="object-contain" width={30} height={20} src={ubicacion} />
                <span className="ml-2">
            <p style={{color: cine.colorRef.normal}} className={`italic text-sm`}>{direccion}</p>
            <p style={{color: cine.colorRef.normal}} className={` italic text-sm`}>{localidad}</p>
        </span>
            </div>
            <div className="flex-1">
                <p style={{color: cine.colorRef.normal}} className={` italic text-sm`}>Tlfn: 660 391 365</p>
                <p style={{color: cine.colorRef.normal}} className={` italic text-sm`}>www.veracines.es</p>
            </div>
            <div className="flex-1 flex max-w-2/3 items-center">
                <p style={{color: cine.colorRef.normal}} className={` italic text-sm`}>Colabora Excmo. Ayuntamiento de Vera</p>
                <Image alt="foto_pelicula" className="object-contain ml-2" width={60} height={40} src={ayuntamiento} />
            </div>
        </div>
    )
}