
import React from "react";
import {IConfigCartelera} from "@/app/cartelera-cara-b/page";
import Image from "next/image";
import veraCinta from "@/public/images/vera-cinta.png";
import garruchaCinta from "@/public/images/garrucha-cinta.png";
export const CineCabeceraHorizontal = ({config} : {config: IConfigCartelera}) => {

    const cinta  = config.cine?.corto === 'vera' ? veraCinta : garruchaCinta;

    return (
        <div className={`h-[80px] w-[360px] bg-${config.cine?.color} flex flex-row items-center justify-around mx-auto my-2 rounded-lg relative`}>
            <span className="text-white w-[220px] text-center font-bold text-xl transform ">
                {config.cine?.nombre}
            </span>
        </div>
    )
}