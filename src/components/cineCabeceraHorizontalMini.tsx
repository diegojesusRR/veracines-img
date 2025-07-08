
import React from "react";
import {IConfigCartelera} from "@/app/cartelera-cara-b/page";
import Image from "next/image";
import veraCinta from "@/public/images/vera-cinta.png";
import garruchaCinta from "@/public/images/garrucha-cinta.png";
import regioCinta from "@/public/images/regio-cinta.png";
import { Fascinate_Inline as Font } from 'next/font/google';

const font = Font({
    subsets: ["latin"],
    weight: ["400"],
});

export const CineCabeceraHorizontalMiniV2 = ({config} : {config: IConfigCartelera}) => {

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
            <span
                className="text-white font-bold text-[20px] w-full text-center px-[90px] p-0"
                style={{ fontFamily: font.style.fontFamily, padding:0, width:'100%' }}
            >
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