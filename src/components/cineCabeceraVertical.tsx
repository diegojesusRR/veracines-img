
import React from "react";
import {IConfigCartelera} from "@/app/cartelera-mano/page";
import Image from "next/image";

export const CineCabeceraVertical = ({config, src} : {config: IConfigCartelera, src: string}) => {

    return (
        <div className={`w-[80px] h-full bg-${config.cine?.color} flex flex-col items-center justify-center relative`}>
            <Image alt="foto_pelicula" className="bg-white w-full absolute -rotate-90 top-0" src={src} />
            <span className="text-white w-[220px] text-center font-bold text-xl transform -rotate-90">
                {config.cine?.nombre}
            </span>
            <Image alt="foto_pelicula" className="bg-white w-full absolute -rotate-90 bottom-0" src={src} />
        </div>
    )
}