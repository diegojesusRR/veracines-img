import React from "react";
import Image from "next/image";
import logoVeracines from "@/public/images/logo-cine.png";
import tituloVeracines from "@/public/images/veracines.png";
import {Kanit} from "next/font/google";

const kanit = Kanit({ subsets: ['latin'], weight: ['400', '700'] })

export const Cabecera = ({config} : {config: any}) => {
    return (
        <div className={`flex flex-row shadow-[10px_10px_0_0] bg-${config.cine.color} shadow-${config.cine.color} w-full p-4 flex-1`}>
            <div className={`flex items-center justify-center shadow-[10px_10px_0_0] shadow-${config.cine.color} bg-white col-span-2 h-full aspect-square`}>
                <img
                    alt="logo"
                    width="110px"
                    height="110px"
                    style={{ objectFit: "fill" }}
                    className="p-2 aspect-square"
                    src={logoVeracines.src}
                />
            </div>
            <div className={`flex-col bg-primary flex-grow relative text-${config.cine.color}`}>
                <div className="w-full mb-2 text-2xl font-semibold">
                    <img alt="logo" width="260px" height="90px"  className="logoED" src={tituloVeracines.src}/>
                </div>
                <div className="mt-5 relative w-full left-[90px] mb-2 text-2xl font-semibold">
                    <h2 className={kanit.className + " text-white"}>
                        {config.cine.nombre}
                    </h2>
                </div>
            </div>
        </div>
    )
}