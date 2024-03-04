import React from "react";
import {Kanit} from "next/font/google";

const kanit = Kanit({ subsets: ['latin'], weight: ['400', '700'] })

export const PrecioPelicula = ({config} : {config: any}) => {

    return (
        <div className="flex flex-col items-center justify-center">
            <div className={`shadow-[10px_10px_0_0] shadow-${config.cine.color} bg-${config.cine.color} w-1/2 text-2xl font-semibold mt-5 min-h-[60px] ml-1/2 rounded-full flex flex-col items-center justify-center`}>
                <p className={kanit.className + " text-white h-auto text-center"}>
                    Entrada: {config.precio}
                </p>
            </div>
            <p className={`text-xs text-${config.cine.color} pt-1 pl-5 pr-5 text-center mt-5`}>Accede a la venta anticipada a través de nuestra web en www.veracines.es</p>
        </div>

    )
}