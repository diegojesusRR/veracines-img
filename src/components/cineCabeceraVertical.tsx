
import React from "react";
import {IConfigCartelera} from "@/app/cartelera-cara-b/page";
import Image from "next/image";
import veraCinta from "@/public/images/vera-cinta.png";
import garruchaCinta from "@/public/images/garrucha-cinta.png";
import regioCinta from "@/public/images/regio-cinta.png";
export const CineCabeceraVertical = ({config} : {config: IConfigCartelera}) => {

    const cinta  = config.cine?.corto === 'vera' ? veraCinta : config.cine?.corto === 'garrucha' ? garruchaCinta : regioCinta;

    return (
        <div className={`w-[80px] h-full bg-${config.cine?.color} flex flex-col items-center justify-center relative`}>
            {cinta && <Image alt="foto_pelicula" className="bg-white w-full absolute -rotate-90 top-0" src={cinta} />}
            <span className="text-white w-[220px] text-center font-bold text-xl transform -rotate-90">
                {config.cine?.nombre}
            </span>
            <Image alt="foto_pelicula" className="bg-white w-full absolute -rotate-90 bottom-0" src={cinta} />
        </div>
    )
}