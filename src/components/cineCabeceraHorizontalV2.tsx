
import React from "react";
import {IConfigCartelera} from "@/app/cartelera-cara-b/page";
import Image from "next/image";
import veraCinta from "@/public/images/vera-cinta.png";
import garruchaCinta from "@/public/images/garrucha-cinta.png";
import regioCinta from "@/public/images/regio-cinta.png";
export const CineCabeceraHorizontalV2 = ({config} : {config: IConfigCartelera}) => {

    const cinta  = config.cine?.corto === 'vera' ? veraCinta : config.cine?.corto === 'garrucha' ? garruchaCinta : regioCinta;

    return (
        <div className={`w-full h-[80px] bg-${config.cine?.color} flex items-center justify-center relative`}>
            {cinta && (
                <Image
                    alt="foto_pelicula"
                    className="bg-white h-full"
                    src={cinta}
                />
            )}
            <span className="text-white font-bold text-xl w-full text-center px-[90px]">
        {config.cine?.nombre}
    </span>
            <Image
                alt="foto_pelicula"
                className="bg-white h-full"
                src={cinta}
            />
        </div>
    )
}